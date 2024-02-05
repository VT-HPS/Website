import React from "react";
import krakenCompPic from "../Assets/Kraken_Trimmed.jpeg";
import krakenInstallPic from "../Assets/Kraken_Under_Tent.jpg";
import ecanPic from "../Assets/Installing_Ecan.jpg";

/**
 * Creates the home page for the website. The home page consists of basic text and a rotating
 * images carousel. 
 */
const Home = () => {
    return (
        <div className="home-container">
            <div className="home-top-container">
                <img className="home-top-image" src={krakenCompPic} alt="home"></img>
                <h1 className="home-top-text">We are the Human Powered Submarine Team at Virginia Tech</h1>
            </div>
            <div className="home-image-info-container">
                <img className="home-image-half" src={krakenInstallPic} alt="home"></img>
                <div className="home-info-half-container">
                    <p className="home-info-half">The Human Powered Submarine (HPS) Team is one of many student-run engineering design teams that are the pride of Virginia Tech's College of Engineering. Our team's mission is to design, build, and race submarines that are propelled and controlled entirely by a human pilot. To complete such a project requires the knowledge of various engineering and liberal arts disciplines. In order to build a functional submarine and be competitive at our biennial competition, the International Submarine Races, requires the teamwork of students who understand topics including hydrodynamics, electronics, composite materials, physics, machining, and administration. Participation on the team gives students a practical application of engineering and allows them to see the design progress from concept, to plan, to functional boat, as well as experience the thrill of competition.</p>
                </div>
            </div>
            <div className="home-image-info-container">
                <img className="home-image-half" src={ecanPic} alt="home"></img>
                <div className="home-info-half-container">
                    <p className="home-info-half">Every two years we compete at the International Submarine Races. The organization that runs these competitions is the Foundation for Underwater Research & Education (FURE). The competition has run for the past 25 years and is hosted by the Naval Surface Warfare Center, Carderock Division in Bethesda, Maryland. The competition is judged on a variety of factors, but the most crucial component is speed! The main objective of the competition is to be the fastest submarine to cross a 100 meter pool and beat the other submarines that we are competing against.</p>
                </div>
            </div>
        </div>

    );
}

export default Home;