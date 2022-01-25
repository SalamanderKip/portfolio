import React from 'react';

export const Navbar = () => {
    return (
        <nav>
            <div id="nav-bar-main">
                <img id="logo" src="LogoPortfoliow512.png" alt="Logo"></img>
                <ul id="nav">
                    <li className="item-nav"><a href="/">Home</a></li>
                    <li className="item-nav"><a href="#aboutme">About</a></li>
                    <li className="item-nav"><a href="#projects">Projects</a></li>
                    <li className="item-nav"><a href="/contact">Contact</a></li>
                    <li id="CV-nav"><a href="/CV_MaartenBos.pdf">CV</a></li>
                </ul>
            </div>
        </nav>
    );
};
