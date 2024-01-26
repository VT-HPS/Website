import React from "react";

/**
 * Creates a team member card to be displayed on the team page. 
 * The card contains an image of the team member, their first and last name, and their major.
 */
function TeamCard(props) {
    return (
        <div className="team_container">
            <img src={props.image} alt="Team" id="team_image" />
            <div className="team_card_container">
                 <h2 className="team_name">{props.name}</h2>
                 <p className="team_position">{props.position}</p>
                 <p className="team_year">{props.year}</p>
            </div>
            <div >
                {props.removeGallery}
            </div>
        </div>
    )
}


export default TeamCard;