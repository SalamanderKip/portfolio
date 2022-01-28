import React, { useEffect, useState } from 'react';
// import '../../assets/style.css'
// import { Navbar } from '../../components/Navbar'


const MainScreen = () => {
    const [projects, setProjects] = useState([]);

    // the function wich fetches the data from the api
    const GetData = async () => {
        const response = await fetch(
            'http://localhost:3001/projects'
        );

        const data = await response.json();
        // console.log(data)

        // sets the data in a variable so it can be acces for the map()
        setProjects(data);
    };

    useEffect(() => {
        GetData();
    }, []);
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
                        <h2 className='main-project'>projecten</h2>
                        {projects.map((project) => {
                            return (
                                <div className="card-item" key= {project.id}>
                                    <div className="testt">
                                        <i className="fas fa-external-link-alt"></i>
                                        <h4>{project.title}</h4>
                                        <p>{project.dessc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                </main>
                <footer id="footer">
                    <h3>designed &amp; build by Maarten Bos</h3>
                </footer>
            </div>
        </>
    )
}

export default MainScreen
