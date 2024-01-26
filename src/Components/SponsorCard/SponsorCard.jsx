import React from "react";
import "./SponsorCard.css";

/**
 * Creates the sponsor card that is displayed on the sponsors page. 
 * Displays an image of the sponsor.
 */

function Sponsor(props) {
    return (
        <div className="sponsorcard_container">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt="Sponsor" className="sponsorcard_image" />
            </a>
            <div className="sponsorcard_title_container">
                <h1 className="sponsorcard_title">{props.title}</h1>
            </div>
        </div>
    )
}

export default Sponsor