import React, { Component } from "react";

import {
    Route,
    Routes,
    HashRouter
} from "react-router-dom";
import Navbar from './components/Navbar';
import ContactScreen from './Screens/Pages/ContactScreen';
import MainScreen from './Screens/Pages/MainScreen';
import './assets/style.css';

class App extends Component {
    render() {
        return (
            <>
                <HashRouter>
                    <Navbar/>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<MainScreen />} />
                            <Route path="/contact" element={<ContactScreen />} />
                        </Routes>
                    </div>
                </HashRouter>
            </>
        )
    }
}

export default App

