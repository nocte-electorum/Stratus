import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import './css/index.css';
import Login from './Login';
import Register from './Register';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.addEventListener("contextmenu", ev => ev.preventDefault());

export const router = createBrowserRouter([
    {
        path: "/",
        element: Register()
    },
    {
        path: "/login",
        element: Login()
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
