import React from "react";
import "./HistoryCard.css";

/**
 * Creates a history card which is displayed on the history page. The card contains 
 * an image and statistics from that year including information like length, crew size, 
 * awards won, etc. 
 */

function History(props) {
    return (
        <div className="historycard_container">
            <div className="historycard_image_container">
                <img className="historycard_image" src={props.image} alt="History" id="history_image"/>
            </div>
            <div>
                <h1 className="historycard_stat" style={{fontSize: '30px'}}>{props.title}</h1>
                <p className="historycard_stat"><b>Operating Years: </b>{props.operating_years}</p>
                <p className="historycard_stat"><b>Length: </b>{props.length}</p>
                <p className="historycard_stat"><b>Beam: </b>{props.beam}</p>
                <p className="historycard_stat"><b>Crew Size: </b>{props.crew_size}</p>
                <p className="historycard_stat"><b>Propulsion Class: </b>{props.propulsion_class}</p>
                <p className="historycard_stat"><b>Entered In: </b>{props.entered_in}</p>
                <p className="historycard_stat"><b>Awards: </b>{props.awards}</p>
                <p className="historycard_stat"><b>Top Speed: </b>{props.top_speed}</p>
                <p className="historycard_stat"><b>Faculty Advisor: </b>{props.faculty_advisor}</p>
                <p className="historycard_stat"><b>Description: </b>{props.description}</p>
            </div>
        </div>
    )
}

export default History