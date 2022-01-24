import React from 'react'
import '../../assets/style.css'
import { Navbar } from '../../components/Navbar'

const HomeScreen = () => {
    return (
        <>
            <div id="container">
                <header>
                    <Navbar />
                </header>
                <main>
                    <section id="overmij">
                        <p>
                            Ik ben Maarten Bos, 18 jaar oud.
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
