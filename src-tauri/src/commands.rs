#[tauri::command]
pub fn try_login(username: String, password: String) -> bool {
    println!("Tried login with {username} and {password}");
    true
}

#[tauri::command]
pub fn is_logged_in() -> bool {
    true
}
