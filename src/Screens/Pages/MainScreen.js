import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";

// import '../../assets/style.css'
// import { Navbar } from '../../components/Navbar'

class MainScreen extends Component {
    render() {
        return (
            <>
                <div className='socials'>
                    <ul className='socials-ul'>
                        <li><a href='https://github.com/SalamanderKipp/' title='GitHub' aria-label="GitHub" target="_blank" rel="noreferrer"><i className="fab fa-github socials-general"></i></a></li>
                        <li><a href='https://www.linkedin.com/in/maarten-bos-7370b71bb/' title='Linkedin' aria-label="Linkedin" target="_blank" rel="noreferrer"><i className="fab fa-linkedin socials-general"></i></a></li>
                        <li><a href='https://codepen.io/SalamanderKip/' title='Codepen' aria-label="Codepen" target="_blank" rel="noreferrer"><i className="fab fa-codepen socials-general"></i></a></li>
                    </ul>
                </div>
                <div id="container">
                    <main>
                        <section className='introduction'>
                            <p className='intro'>Hoi, mijn naam is</p>
                            <p className='name-intro'>Maarten Bos.</p>
                            <p className='study-intro'>Ik doe de opleiding <wbr /> webdevelopment!</p>
                        </section>
                        <section id='aboutme'>
                            <h2 className='main-about'>About Me</h2>
                            <div className='aboutme-wrapper'>
                                <div>
                                    Ik ben een student en volg de opleiding webdeveloper aan het grafisch lyceum Utrecht.<br></br>
                                    Ik zit nu in het 2e studie jaar.<br></br>
                                    Ik ben iemand die enthousiast is en goed kan samenwerken. Verder wil ik mezelf altijd verbeteren en mijn kennis vergroten.
                                </div>
                                <div>
                                    <img className="about-picture" src="maartencv.jpg" alt="Project"></img>
                                </div>
                            </div>
                        </section>
                        <section id="projects">
                            <h2 className='main-project'>Projecten</h2>
                            <div className="card-item">
                                <img className="project1" src="bever.png" alt="Project"></img>
                                <div className="testt">
                                    <h4>Maarten</h4>
                                    <p>Test</p>
                                </div>
                            </div>
                            <div className="card-item">
                                <img className="project1" src="bever.png" alt="Project"></img>
                                <div className="testt">
                                    <h4>Maarten</h4>
                                    <p>Test</p>
                                </div>
                            </div>
                            <div className="card-item">
                                <img className="project1" src="bever.png" alt="Project"></img>
                                <div className="testt">
                                    <h4>Maarten</h4>
                                    <p>Test</p>
                                </div>
                            </div>
                            <div className="card-item">
                                <img className="project1" src="bever.png" alt="Project"></img>
                                <div className="testt">
                                    <h4>Maarten</h4>
                                    <p>Test</p>
                                </div>
                            </div>
                            <div className="card-item">
                                <img className="project1" src="bever.png" alt="Project"></img>
                                <div className="testt">
                                    <h4>Maarten</h4>
                                    <p>Test</p>
                                </div>
                            </div>
                            <div className="card-item">
                                <img className="project1" src="bever.png" alt="Project"></img>
                                <div className="testt">
                                    <h4>Maarten</h4>
                                    <p>Test</p>
                                </div>
                            </div>
                            <div className="card-item">
                                <img className="project1" src="bever.png" alt="Project"></img>
                                <div className="testt">
                                    <h4>Maarten</h4>
                                    <p>Test</p>
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer id="footer">
                        <h3>designed &amp; build by Maarten Bos</h3>
                    </footer>
                </div>
            </>
        )
    }
}

export default MainScreen
