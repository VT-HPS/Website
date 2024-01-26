import React from "react";
import RotatingImages from "../Components/RotatingImages";
/**
 * Creates the home page for the website. The home page consists of basic text and a rotating
 * images carousel. 
 */
const Home = () => {
    return (
        <div className="main_page_container">
            <div>
                <header className="home-header">
                    <h1 className="centered_text">What is Human Powered Submarine at Virginia Tech?</h1>
                    <p className="centered_text">Interdisciplinary Student Design Team</p>
                </header>
            </div>
            <div className="rotating_images">
                <RotatingImages />
            </div>
            <div className="home_text_container">
                <section>
                    <h2 className="centered_text">About The Team</h2>
                    <p className="centered_text">
                        Hello! We are HPS at VT and we design, build, and race submarines
                    </p>
                </section>

                <section>
                    <h2 className="centered_text">Contact</h2>
                    <p className="centered_text">
                        Email: hps@vt.edu<br />
                    </p>
                </section>
            </div>
        </div>

    );
}

export default Home;