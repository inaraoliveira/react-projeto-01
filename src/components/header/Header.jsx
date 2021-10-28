import React from "react";
import '../header/Header.css'
import Logo from '../assets/Logo.gif'

export default function Header(){
    return(
        <div className='container'>
            <header className='header'>
                <img src={Logo} alt="Logo" />
                <nav className='nav'>
                    <a href="">Home</a>
                    <a href="">Personagens</a>
                    <a href="">Sobre a série</a>
                    <a href="">Detalhe dos Personagens</a>
                </nav>
            </header>
        </div>
    );
}