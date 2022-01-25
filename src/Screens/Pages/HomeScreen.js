import React from 'react'
import '../../assets/style.css'
import { Navbar } from '../../components/Navbar'

const HomeScreen = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div id="container">
                <main>
                    <section className='introduction'>
                        <p className='intro'>Hoi, mijn naam is</p>
                        <p className='name-intro'>Maarten Bos.</p>
                        <p className='about-intro'>Ik doe de opleiding webdevelopment!</p>
                    </section>
                    <section id="aboutme">
                        <h2 className='main-about'>About Me</h2>
                        <p>
                            Ik ben een student en volg de opleiding webdeveloper aan het grafisch lyceum Utrecht.<br></br>
                            Ik zit nu in het 2e studie jaar.<br></br>
                            Ik ben iemand die enthousiast is en goed kan samenwerken. Verder wil ik mezelf altijd verbeteren en mijn kennis vergroten.
                        </p>
                    </section>
                    <section id="projects">
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

export default HomeScreen
