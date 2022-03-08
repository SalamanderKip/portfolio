import React, { useLayoutEffect, useState } from 'react';
import images from '../../assets/img/foto.png';
import { Footer } from '../../components/footer/Footer';
import { Socials } from '../../components/socials/Socials';

const MainScreen = () => {
    const [projects, setProjects] = useState([]);
    const [example, setExample] = useState(false);

    // the function wich fetches the data from the api
    const getData = async (language) => {
        let url = 'https://bosmaarten.nl/api/projects';
        if (language) {
            url += '?language=' + language;
        }

        const response = await fetch(
            url
        );

        const data = await response.json();
        // console.log(data)

        // sets the data in a variable so it can be acces for the map()
        setProjects(data);
    };

    // const readData = (e) => {
    //     getData(e);
    // };

    useLayoutEffect(() => {
        getData();
    }, []);

    
    return (
        <>

            <Socials />
            <div id='container'>
                <main>
                    <section className='introduction'>
                        <p className='intro'>Hoi, mijn naam is</p>
                        <p className='name-intro'>Maarten Bos.</p>
                        <p className='study-intro'>Ik doe de opleiding <wbr /> webdevelopment!</p>
                    </section>
                    <section id='aboutme'>
                        <h2 className='main-about'>Wie ben ik</h2>
                        <div className='aboutme-wrapper'>
                            <div>
                                Ik ben een student en volg de opleiding webdeveloper aan het grafisch lyceum Utrecht.<br></br>
                                Ik zit nu in het 2e studie jaar.<br></br>
                                Ik ben iemand die enthousiast is en goed kan samenwerken. Verder wil ik mezelf altijd verbeteren en mijn kennis vergroten.
                            </div>
                            <div className='CV-nav'>
                                <a href='/CV_MaartenBos.pdf' target='_blank'>Bekijk mijn CV</a>
                            </div>
                        </div>
                        <img className='about-picture' src={images} alt='Project'></img>
                    </section>
                    <section className='projects'>
                        <button onClick={() => getData()}>All</button>
                        <button onClick={() => getData('PHP')}>PHP</button>
                        <button onClick={() => getData('Javascript')}>Javascript</button>
                        <h2 className='main-project'>Projecten </h2>
                        {/* <div className='parent'> */}
                        {projects.map((project) => {
                            return (
                                <div className='card-item' key={project.id}>
                                    <div className='testt'>
                                        <i className='fas fa-external-link-alt'></i>
                                        <h4>{project.title}</h4>
                                        <p>{project.dessc}</p>
                                    </div>
                                </div>
                            )
                        })}

                        {/* </div> */}
                    </section>



                    <section className='projects'>
                        <h2 className='main-project'>Projecten </h2>
                        {projects.map((project) => {
                            return (
                                <>
                                    <div onClick={() => setExample(true)} data-modal-toggle={project.id} data-projectname={project.title} className='card-item' key={project.id}>
                                        <div className='testt'>
                                            <i className='fas fa-external-link-alt'></i>
                                            <h4>{project.title}</h4>
                                            <p>{project.dessc}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </section>

                    <div data-projectname aria-hidden="true" className={`${example ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0`}>
                        <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                        {project.id}
                                    </h3>
                                    <button onClick={() => setExample(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                    </p>
                                </div>

                                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                    <button onClick={() => setExample(false)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                    <button onClick={() => setExample(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        </>
    )
}

export default MainScreen
