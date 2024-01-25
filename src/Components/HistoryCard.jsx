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
                <p className="history_stat"><b>Operating Years: </b>{props.operating_years}</p>
                <p className="history_stat"><b>Length: </b>{props.length}</p>
                <p className="history_stat"><b>Beam: </b>{props.beam}</p>
                <p className="history_stat"><b>Crew Size: </b>{props.crew_size}</p>
                <p className="history_stat"><b>Propulsion Class: </b>{props.propulsion_class}</p>
                <p className="history_stat"><b>Entered In: </b>{props.entered_in}</p>
                <p className="history_stat"><b>Awards: </b>{props.awards}</p>
                <p className="history_stat"><b>Top Speed: </b>{props.top_speed}</p>
                <p className="history_stat"><b>Faculty Advisor: </b>{props.faculty_advisor}</p>
                <p className="history_stat"><b>Description: </b>{props.description}</p>
            </div>
        </div>
    )
}

export default History