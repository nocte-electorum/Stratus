import React from 'react';
import './css/login.css';
import { invoke } from '@tauri-apps/api';
import logo_img from './assets/images/logo-full.png';
import { router } from "./index";


async function tryLogin() {
    let userbox: HTMLInputElement = document.getElementById("login-namebox") as HTMLInputElement;
    let passbox: HTMLInputElement = document.getElementById("login-passbox") as HTMLInputElement;
    let username: string = userbox.value;
    let password: string = passbox.value;

    let success: boolean = await invoke("try_login", { name: username, password: password });
    let errortext: HTMLParagraphElement = document.getElementById("errortext") as HTMLParagraphElement;
    if (success) {
        errortext.hidden = true;
        router.navigate("/dash");
    } else {
        errortext.hidden = false;
    }
}

function App() : React.ReactElement {
    return <>
    <img className="logo" src={logo_img} height="120" alt="Logo and text saying stratus" />
    <input placeholder="Name" className="textbox username" id="login-namebox" />
    <input placeholder="Password" className="textbox password" id="login-passbox" type="password" />
    <button onClick={tryLogin}>Login</button>
    <p className="error-text" id="errortext" hidden={true}>Invalid username or password!</p>
    </>
}

export default App;
