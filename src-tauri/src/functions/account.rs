use std::path::PathBuf;
use anyhow::anyhow;

fn get_or_create_dir(path: &PathBuf) -> &PathBuf {
    if !path.exists() {
        std::fs::create_dir_all(path);
    }
    path
}

pub fn get_data_dir() -> PathBuf {
    dirs::home_dir().unwrap().join(".stratus").join("data")
}

pub fn is_registered(dir: &PathBuf) -> bool {
    dir.join(".hp").exists()
}

pub fn try_register(name: &str, password: &str) -> Result<(), anyhow::Error> {
    let data_dir: PathBuf = get_data_dir();
    let _ = get_or_create_dir(&data_dir);
    if is_registered(&data_dir) {
        return Err(anyhow!("An account is already registered!"));
    }

    let mut contents: String = format!(
        "{}\n{}",
        name,
        libpasta::hash_password(password)
    );

    let pass_file_path: PathBuf = data_dir.join(".hp");
    let _ = std::fs::write(&pass_file_path, contents.as_bytes())?;
    Ok(())
}

pub fn try_login(name: &str, password: &str) -> Result<(), anyhow::Error> {
    let file_path = get_data_dir().join(".hp");
    if !file_path.exists() {
        return Err(anyhow!("Credentials file doesn't exist!"));
    }

    let contents: String = std::fs::read_to_string(&file_path)?;
    let lines: Vec<&str> = contents.lines().collect();
    let (found_name, hashed_password): (&str, &str) = (lines[0], lines[1]);

    if found_name.trim() == name
       && libpasta::verify_password(hashed_password.trim(), password) {
        Ok(())
    } else {
        Err(anyhow!("Provided credentials don't match credentials file."))
    }
}
