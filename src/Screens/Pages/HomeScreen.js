import React from 'react'
import '../../assets/style.css'

const HomeScreen = () => {
    return (
        <>
            <div id="container">
                <header>
                    <nav>
                        <img src="LogoPortfoliow512.png" alt="Logo"></img>
                        <div>
                            <ul id="nav">
                                <li><a href="default.asp">Home</a></li>
                                <li><a href="news.asp">About</a></li>
                                <li><a href="contact.asp">Projects</a></li>
                                <li><a href="about.asp">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <main>

                </main>
                <footer id="footer">
                    <h3>designed &amp; build by Maarten Bos</h3>
                </footer>
            </div>
        </>
    )
}

export default HomeScreen
