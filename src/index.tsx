import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Login from './Login';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.addEventListener("contextmenu", ev => ev.preventDefault());

root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
