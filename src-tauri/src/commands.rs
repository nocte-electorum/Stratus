#[tauri::command]
pub fn try_login(username: String, password: String) -> bool {
    println!("Tried login with {username} and {password}");
    false
}
