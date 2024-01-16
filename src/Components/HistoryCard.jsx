import React from "react";

/**
 * Creates a history card which is displayed on the history page. The card contains 
 * an image and statistics from that year including information like length, crew size, 
 * awards won, etc. 
 */

function History(props) {
    return (
        <div className="history_container">
            <div classname="history_left_column">
                <img className="history_image" src={props.image} alt="History" id="history_image"/>
            </div>
            <div>
                <h1 className="history_stat" style={{fontSize: '30px'}}>{props.title}</h1>
                <p className="history_stat">{"Operating Years: " + props.operating_years}</p>
                <p className="history_stat">{"Length: " + props.length}</p>
                <p className="history_stat">{"Beam: " + props.beam}</p>
                <p className="history_stat">{"Crew Size " + props.crew_size}</p>
                <p className="history_stat">{"Propulsion Class: " + props.propulsion_class}</p>
                <p className="history_stat">{"Entered In: " + props.entered_in}</p>
                <p className="history_stat">{"Awards: " + props.awards}</p>
                <p className="history_stat">{"Top Speed: " + props.top_speed}</p>
                <p className="history_stat">{"Faculty Advisor: " + props.faculty_advisor}</p>
                <p className="history_description">{"Description: " + props.description}</p>
            </div>
        </div>
    )
}

export default History