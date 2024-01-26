import React, { useState, useEffect } from "react"
import HistoryCard from "../Components/HistoryCard/HistoryCard"
import history_infos from "../Assets/History.json"

/**
 * Creates the History page which displays a series of history cards
 * in a column. The history card information is taken from the "History.json" file. 
 */


const History = ({ signedIn }) => {
    var [historyList, setHistory] = useState([])

    useEffect(() => {
        const loadedHistory = history_infos.map(history => ({
            ...history,
            image: `${process.env.PUBLIC_URL}/${history.image}`
        }));
        setHistory(loadedHistory);
    }, []);


    return (
        <div className="main_page_container">
            <h1 className="page_title">
                <div>History</div>
            </h1>

            <ul>
                {
                    historyList.map((history) => {
                        return (<HistoryCard
                            key={history.id}
                            id={history.id}
                            title={history.title}
                            operating_years={history.operating_years}
                            length={history.length}
                            beam={history.beam}
                            crew_size={history.crew_size}
                            propulsion_class={history.propulsion_class}
                            entered_in={history.entered_in}
                            awards={history.awards}
                            top_speed={history.top_speed}
                            faculty_advisor={history.faculty_advisor}
                            description={history.description}
                            image={history.image}
                        />)

                    })
                }
            </ul>
        </div>
    )
}

export default History;