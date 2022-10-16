use crate::functions::account;

#[tauri::command]
pub fn try_login(name: String, password: String) -> bool {
    account::try_login(&name, &password).is_ok()
}

#[tauri::command]
pub fn is_registered() -> bool {
    account::is_registered(&account::get_data_dir())
}

#[tauri::command]
pub fn try_register(name: String, password: String) -> bool {
    account::try_register(&name, &password).is_ok()
}
