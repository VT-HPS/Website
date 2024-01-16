import React from "react";

/**
 * Creates a team member card to be displayed on the team page. 
 * The card contains an image of the team member, their first and last name, and their major.
 */
function Team(props) {
    const imagePath = require("../Assets/teamMembers/" + props.lastName + props.firstName + ".jpg")
    return (
        <div className="team_container">
            <div className="team_card_container">
                <div>
                    <img src={imagePath} alt="Team" id="team_image" />
                </div>
                <h2 className="team_title">{props.firstName + " " + props.lastName}</h2>
                <p className="team_description">{props.major}</p>
            </div>
            <div >
                {props.removeTeam}
            </div>
        </div>
    )
}

export default Team