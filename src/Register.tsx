import React from 'react';
import "./css/login.css";
import logo_img from './assets/images/logo-full.png';
import { invoke } from "@tauri-apps/api";
import { router } from "./index";


async function tryRegister() {
    let namebox: HTMLInputElement = document.getElementById("register-namebox") as HTMLInputElement;
    let passbox: HTMLInputElement = document.getElementById("register-passbox") as HTMLInputElement;

    let success: boolean = await invoke("try_register", { name: namebox.value, password: passbox.value });
    if (success) {
        router.navigate("/dash");
    }
}

function App() : React.ReactElement {
    return <>
    <img className="logo" src={logo_img} height="120" alt="Logo and text saying stratus" />
    <input placeholder="Name (only used for greetings)" className="textbox username" id="register-namebox" />
    <input placeholder="Password" className="textbox password" id="register-passbox" type="password" />
    <button onClick={tryRegister}>Register</button>
    </>
}

export default App;