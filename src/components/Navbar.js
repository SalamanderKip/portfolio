import React, {
    Component
} from 'react';
import {
    Link,
    NavLink
} from 'react-router-dom';

// export const Navbar = () => {
//     return (
//         <nav>
//             <img id="logo" src="LogoPortfoliow512.png" alt="Logo"></img>
//             <ul>
//                 <li className="item-nav"><NavLink to="/">Home</NavLink></li>
//                 <li className="item-nav"><NavLink to="/contact">Contact</NavLink></li>
//                 <li className="item-nav"><Link to="/#aboutme">About</Link></li>
//                 <li className="item-nav"><Link to="/#projects">Projects</Link></li>
//                 <li id="CV-nav"><a href="/CV_MaartenBos.pdf" target="_blank">CV</a></li>
//             </ul>
//         </nav>
//     );
// };

class Navbar extends Component {
    render() {
        return (
            <>
                <nav>
                    <img id="logo" src="LogoPortfoliow512.png" alt="Logo"></img>
                    <ul>
                        <li className="item-nav"><NavLink to="/">Home</NavLink></li>
                        <li className="item-nav"><NavLink to="/contact">Contact</NavLink></li>
                        <li className="item-nav"><Link to="/#aboutme">About</Link></li>
                        <li className="item-nav"><Link to="/#projects">Projects</Link></li>
                        <li id="CV-nav"><a href="/CV_MaartenBos.pdf" target="_blank">CV</a></li>
                    </ul>
                </nav>
            </>
        );
    };
};

export default Navbar