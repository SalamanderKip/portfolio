import React, {
    useState
} from 'react';
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import ContactScreen from '../Screens/Pages/ContactScreen';
import MainScreen from '../Screens/Pages/MainScreen';

// export const Navbar = () => {
//     return (
//         <nav>
//             <img id='logo' src='LogoPortfoliow512.png' alt='Logo'></img>
//             <ul>
//                 <li className='item-nav'><NavLink to='/'>Home</NavLink></li>
//                 <li className='item-nav'><NavLink to='/contact'>Contact</NavLink></li>
//                 <li className='item-nav'><Link to='/#aboutme'>About</Link></li>
//                 <li className='item-nav'><Link to='/#projects'>Projects</Link></li>
//                 <li id='CV-nav'><a href='/CV_MaartenBos.pdf' target='_blank'>CV</a></li>
//             </ul>
//         </nav>
//     );
// };

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    console.log(navToggle);
    return (
        <>
            <HashRouter>
                <nav>
                    <img id='logo' src='LogoPortfoliow512.png' alt='Logo'></img>
                    <div id='mobile-menu'>
                        <a id='mobile-menu-opener' className={navToggle ? 'opened' : 'closed'} onClick={() => setNavToggle(navToggle ? false : true)}>menu</a>
                        <ul className={navToggle ? 'opened' : 'closed'}>
                            <li className='item-nav'><NavLink to='/'>Home</NavLink></li>
                            <li className='item-nav'><NavLink to='/contact'>Contact</NavLink></li>
                            <li className='item-nav'><Link to='/#aboutme'>About</Link></li>
                            <li className='item-nav'><Link to='/#projects'>Projects</Link></li>
                            {/* <li id='CV-nav'><a href='/CV_MaartenBos.pdf' target='_blank'>CV</a></li> */}

                        </ul>
                    </div>

                </nav>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<MainScreen />} />
                        <Route path='/contact' element={<ContactScreen />} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};

export default Navbar