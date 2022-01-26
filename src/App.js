import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import ContactScreen from './Screens/Pages/ContactScreen';
import MainScreen from './Screens/Pages/MainScreen';
import './assets/style.css';

class App extends Component {
    render() {
        return (
            <>
                <HashRouter>
                    <nav>
                        <img id="logo" src="LogoPortfoliow512.png" alt="Logo"></img>
                        <ul>
                            <li className="item-nav"><NavLink to="/">Home</NavLink></li>
                            <li className="item-nav"><NavLink to="/contact">Contact</NavLink></li>
                            <li className="item-nav"><Link to="/#aboutme">About</Link></li>
                            <li className="item-nav"><Link to="/#projects">Projects</Link></li>
                            <li id="CV-nav"><a href="/CV_MaartenBos.pdf" target="_blank">CV</a></li>
                        </ul>
                        <div className="content">
                            <Routes>
                                <Route path="/" element={<MainScreen />} />
                                <Route path="/contact" element={<ContactScreen />} />
                            </Routes>
                        </div>
                    </nav>

                </HashRouter>
            </>
        )
    }
}

export default App

