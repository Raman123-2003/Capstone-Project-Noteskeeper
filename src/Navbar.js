import React from 'react';
import Logo from './logo-1.png';
import './Navbar.css';


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar">
                <img src={Logo} alt="" style={{ width: 170, height: 75,textAlign:'center'}} />
                <h2>Notes Keeper</h2>
            </nav>
        </div>
    )
}
