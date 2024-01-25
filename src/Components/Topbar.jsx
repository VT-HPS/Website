import { NavLink } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import logo from '../Assets/hps_logo1.png';
import { Link } from 'react-router-dom';

/**
 * Creates the top bar that is displayed at the top of every page.
 * The top bar has links to every page in the website, and the color of the link
 * darkens if the user is currently on that page. 
 */

const Topbar = ({children}) => {
    const menuItem = [
        { path: '/', name: 'Home'},
        { path: '/team', name: 'Team'},
        { path: '/history', name: 'History'},
        { path: '/sponsors', name: 'Sponsors'},
        { path: '/membership', name: 'Membership'},
        { path: '/gallery', name: 'Gallery'},
        { path: '/faq', name: 'FAQ'}
    ];
    return (
        <header class="topbar_header">
            <div className="topbar_container">
                <div className="topbar">
                    <div className="logo">
                        <Link to="/" className="logo-link">
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>
                    </div>
                    <input type="checkbox" id="nav-check"></input>
                    <label for="nav-check" class="nav-toggler">
                        <span></span>
                    </label>
                    <nav class="nav">
                    {
                        menuItem.map(item => (
                            <NavLink to={item.path} className="link" key={item.path}>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    </nav>
                </div>
                <main className="main_container">{children}</main>
            </div>
        </header>
    );
};

export default Topbar;