import React from "react";
import "./FooterCard.css";
import logo from '../../Assets/hps_logo1.png';
import { BsGithub, BsInstagram } from 'react-icons/bs';

/* This page creates a footer, examples can be found at this website https://www.flowbite-react.com/docs/components/footer, these examples
 * were followed but not implemented with flowbite since tailwing was not as customizable as css
 */

const PageFooter = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-line-container">
                    <img
                        className="footer-logo"
                        href="/"
                        src={logo}
                        alt="HPS at Virginia Tech"
                    />
                    <nav className="footer-links">
                        <a href="/">About</a>
                        <a href="/history">History</a>
                        <a href="/sponsors">Sponsorship</a>
                        <a href="/membership">Contact</a>
                    </nav>
                </div>
                <div className="footer-line-container">
                    <p className="footer-copyright">
                        &copy; <a className="text-white" href="/">2024 HPS at Virginia Tech</a> | hps@vt.edu
                    </p>
                    <div className="social-icon-container">
                        <a className="social-icon" href="https://www.instagram.com/vthps/">
                            <BsInstagram className="text-white" />
                        </a>
                        <a className="social-icon" href="https://github.com/VT-HPS">
                            <BsGithub className="text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default PageFooter;