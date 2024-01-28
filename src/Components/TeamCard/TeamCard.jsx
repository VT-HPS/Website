import React from "react";
import "./TeamCard.css";

/**
 * Creates a team member card to be displayed on the team page. 
 * The card contains an image of the team member, their first and last name, and their major.
 */
function TeamCard(props) {
    return (
        <div className="teamcard_container">
            <img src={props.image} alt="Team" className="teamcard_image" />
            <div className="teamcard_info_container">
                 <h2 className="teamcard_name">{props.name}</h2>
                 <p className="teamcard_position">{props.position}</p>
                 <p className="teamcard_year">{props.year}</p>
            </div>
            <div >
                {props.removeGallery}
            </div>
        </div>
    )
}


export default TeamCard;