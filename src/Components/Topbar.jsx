import { NavLink } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';

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
        <div className="topbar_container">
            <div className="topbar">
                {
                    menuItem.map(item => (
                        <NavLink to={item.path} className="link" key={item.path}>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main className="main_container">{children}</main>
        </div>
    );
};

export default Topbar;