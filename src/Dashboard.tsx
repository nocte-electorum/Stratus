import React from "react";
import styles from "./css/dashboard.module.css";
import { invoke } from "@tauri-apps/api";


let name: string = "";
(async function() {
    name = await invoke("get_name");
    invoke("log", { s: `Found name ${name}` });
})()

function App() : React.ReactElement {
    return <>
    <h1 className={styles.title}>Welcome, {name}!</h1>
    </>
}

export default App;