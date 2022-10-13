import React from 'react';
import './css/login.css';
import { invoke } from '@tauri-apps/api';
import logo_img from './assets/images/logo-full.png';


async function try_login() {
    let userbox: HTMLInputElement = document.getElementById("login-namebox") as HTMLInputElement;
    let passbox: HTMLInputElement = document.getElementById("login-passbox") as HTMLInputElement;
    let username: string = userbox.textContent || "";
    let password: string = passbox.textContent || "";

    let success: boolean = await invoke("try_login", { username: username, password: password });
    if (success) {
        // Switch screens here
    } else {
        let errortext: HTMLParagraphElement = document.getElementById("errortext") as HTMLParagraphElement;
        errortext.hidden = true;
    }
}

function App() {
    return <>
    <img className="logo" src={logo_img} height="120" />
    <input placeholder="Username" className="textbox username" id="login-namebox" />
    <input placeholder="Password" className="textbox password" id="login-passbox" type="password" />
    <button onClick={try_login}>Login</button>
    <p className="error-text" id="errortext" hidden={true}>Invalid username or password!</p>
    </>
}

export default App;
