import React from "react";
import "./FooterCard.css";
import logo from '../../Assets/hps_logo1.png';
import { SocialIcon } from 'react-social-icons'


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
                        <a href="/membership">Contact</a>
                        <a href="/history">History</a>
                        <a href="/sponsors">Sponsorship</a>
                        <a href="https://vt-hps.github.io/">Wiki</a>
                    </nav>
                </div>
                <div className="footer-line-container">
                    <p className="footer-copyright">
                        &copy; <a className="text-white" href="/">2024 HPS at Virginia Tech</a> | hps@vt.edu
                    </p>
                    {/* The hrefs were added in this container to the social icons for true anchors and to get rid of warnings*/}
                    <div className="social-icon-container">
                        <a className="social-icon" href="https://www.instagram.com/vthps/">
                            <SocialIcon network="instagram" url="https://www.instagram.com/vthps/"/>
                        </a>
                        <a className="social-icon" href="https://www.linkedin.com/company/human-powered-submarine-at-virginia-tech/about/">
                            <SocialIcon network="linkedin" url="https://www.linkedin.com/company/human-powered-submarine-at-virginia-tech/about/"/>
                        </a>
                        <a className="social-icon" href="https://github.com/VT-HPS">
                            <SocialIcon network="github" url="https://github.com/VT-HPS" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default PageFooter;