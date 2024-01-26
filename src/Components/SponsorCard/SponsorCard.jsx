import React from "react";

/**
 * Creates the sponsor card that is displayed on the sponsors page. 
 * Displays an image of the sponsor.
 */

function Sponsor(props) {
    return (
        <div className="sponsor_container">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt="Sponsor" id="sponsor_image" />
            </a>
            <div className="sponsor_card_container">
                <h1 className="sponsor_title">{props.title}</h1>
            </div>
        </div>
    )
}

export default Sponsor