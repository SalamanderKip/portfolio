import React, { useLayoutEffect, useState } from 'react';
import images from '../../assets/img/ditbenik2.png';
import { Footer } from '../../components/footer/Footer';
import { Socials } from '../../components/socials/Socials';
import { EmailSocials } from '../../components/socials/EmailSocials';

const MainScreen = () => {
    const [projects, setProjects] = useState([]);
    const [example, setExample] = useState(false);
    const [projectInfo, setProjectInfo] = useState({});
    const [currentProj, setCurrentProj] = useState(1);

    // the function wich fetches the data from the api
    const getData = async (language) => {
        let url = 'https://bosmaarten.nl/api/projects';
        let url2 = 'https://bosmaarten.nl/api/projects-content';
        if (language) {
            url += '?language=' + language;
        }

        let response;
        let response2;
        await Promise.all([
            fetch(url).then(resp => response = resp),
            fetch(url2).then(resp => response2 = resp)
        ]);

        const data1 = await response.json();
        const data2 = await response2.json();

        let tempProjData = mergeData(data1, data2);

        console.log('data', tempProjData);

        // sets the data in a variable so it can be acces for the map()
        setProjectInfo(tempProjData);
        setProjects(data1);
    };

    useLayoutEffect(() => {
        getData();
    }, []);

    const setModal = async (projectId) => {
        setExample(true);
        setCurrentProj(projectId);
    }

    return (
        <>

            <Socials />
            <EmailSocials />
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
                    <section id='projects' className='projects'>
                        <h2 className='main-project'>Projecten 2</h2>
                        <div >
                            <button className='sortButtons' onClick={() => getData()}>All</button>
                            <button className='sortButtons' onClick={() => getData('PHP')}>PHP</button>
                            <button className='sortButtons' onClick={() => getData('Javascript')}>Javascript</button>
                        </div>
                        {projects.map((project) => {
                            return (
                                <div onClick={() => setModal(project.id)} data-modal-toggle={project.id} data-projectname={project.title} className='card-item' key={project.id}>
                                    <div className='testt'>
                                        <i className='fas fa-external-link-alt'></i>
                                        <h4>{project.title}</h4>
                                        <p>{project.dessc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </section>

                    <div data-projectname aria-hidden="true" className={`${example ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed mainProject justify-center items-center h-modal md:h-full md:inset-0`}>
                        <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                        {projectInfo[currentProj]?.title}
                                    </h3>
                                    <button onClick={() => setExample(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        {projectInfo[currentProj]?.description_nl}
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        {projectInfo[currentProj]?.description_en}
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

function mergeData(data1, data2) {
    let mergedData = {};
    data1.forEach(proj => {
        mergedData[proj.id] = proj;
    });

    data2.forEach(projData2 => {
        const projData1 = mergedData[projData2.id];
        if (projData1) {
            mergedData[projData2.id] = {
                ...projData2,
                ...projData1
            };
        } else {
            mergedData[projData2.id] = projData2;
        }
    });
    return mergedData;
}

