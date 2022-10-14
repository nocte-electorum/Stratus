#[tauri::command]
pub fn try_login(name: String, password: String) -> bool {
    println!("Tried login with {name} and {password}");
    true
}

#[tauri::command]
pub fn is_registered() -> bool {
    false
}

#[tauri::command]
pub fn try_register(name: String, password: String) -> bool {
    true
}
