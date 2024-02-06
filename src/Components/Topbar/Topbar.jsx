import { NavLink } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import logo from '../../Assets/hps_orange_logo.png';
import { Link } from 'react-router-dom';
import "./Topbar.css";

/**
 * Creates the top bar that is displayed at the top of every page.
 * The top bar has links to every page in the website, and the color of the link
 * darkens if the user is currently on that page. 
 */

const Topbar = ({children}) => {
    const menuItem = [
        { path: '/team', name: 'Team'},
        { path: '/history', name: 'History'},
        { path: '/sponsors', name: 'Sponsors'},
        { path: '/membership', name: 'Membership'},
        { path: '/gallery', name: 'Gallery'},
        { path: '/faq', name: 'FAQ'}
    ];

    const closeHamburgerMenu = () => {
        // Find the checkbox element and uncheck it
        const checkbox = document.getElementById('nav-check');
        if (checkbox) {
            checkbox.checked = false;
        }
  };
    return (
        <header className="topbar-header">
            <div className="topbar-container">
                <div className="topbar">
                    <div className="topbar-logo">
                        <Link to="/" className="logo-link">
                            <img src={logo} alt="Logo" className="topbar-logo" />
                        </Link>
                    </div>
                    <input type="checkbox" id="nav-check"></input>
                    <label htmlFor="nav-check" className="nav-toggler">
                        <span></span>
                    </label>
                    <nav className="nav">
                    {
                        menuItem.map(item => (
                            <NavLink onClick={closeHamburgerMenu} to={item.path} className="link" key={item.path}>
                                <div className="link-text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    </nav>
                </div>
                <main className="main-container">{children}</main>
            </div>
        </header>
    );
};

export default Topbar;