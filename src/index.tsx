import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import './css/index.css';
import { invoke } from "@tauri-apps/api";
import Login from './Login';
import Register from './Register';
import Dashboard from "./Dashboard";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.addEventListener("contextmenu", ev => ev.preventDefault());

// @ts-ignore
export let router;
(async function() : Promise<void> {
    let is_registered: boolean = await invoke("is_registered");
    router = createBrowserRouter([
        {
            path: "/",
            element: (function() : React.ReactElement {
                if (is_registered) {
                    return Login();
                } else {
                    return Register();
                }
            })()
        },
        {
            path: "/dash",
            element: Dashboard()
        }
    ]);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
})()
