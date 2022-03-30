import React, {
    useState
} from 'react';
import {
    Route,
    BrowserRouter,
    Routes,
    NavLink
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import ContactScreen from '../../Screens/Pages/ContactScreen';
import MainScreen from '../../Screens/Pages/MainScreen';
import logo from '../../assets/img/LogoPortfoliow512.png';

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    // console.log(navToggle);
    return (
        <>
            <BrowserRouter>
                <nav id="main-nav">
                    <img id='logo' src={logo} alt='Logo'></img>
                    <div id='mobile-menu'>
                        <a href="#" id='mobile-menu-opener' className={navToggle ? 'opened' : 'closed'} onClick={() => setNavToggle(navToggle ? false : true)}><i className='fas fa-bars'></i></a>

                    </div>

                </nav>

                <nav >
                    <ul id='mobile-list' className={navToggle ? 'opened' : 'closed'}>
                        <li className='item-nav'><NavLink to='/'>Home</NavLink></li>
                        <li className='item-nav'><NavLink to='/contact'>Contact</NavLink></li>
                        <li className='item-nav'><Link to='/#aboutme'>About</Link></li>
                        <li className='item-nav'><Link to='/#projects'>Projects</Link></li>
                    </ul>
                </nav>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<MainScreen />} />
                        <Route path='/contact' element={<ContactScreen />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default Navbar