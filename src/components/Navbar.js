import React from 'react';

export const Navbar = () => {
    return (
        <nav>
            <div id="nav-bar-main">
                <img id="logo" src="LogoPortfoliow512.png" alt="Logo"></img>
                <ul id="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li id="contact-nav"><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
