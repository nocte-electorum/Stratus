import React from 'react';
import './css/login.css';
import logo_img from './assets/images/logo-full.png';

function App() {
    return <>
        <img className="logo" src={logo_img} height="120" />
        <input placeholder="Username" className="textbox" />
    </>
}

export default App;
