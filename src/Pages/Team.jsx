import React, { useState, useEffect } from "react";
import memberInfos from '../Assets/MemberInfo.json';
import TeamCard from "../Components/TeamCard/TeamCard";
import { trackWindowScroll } from 'react-lazy-load-image-component';

/**
 * Creates the team page which contains a grid of Team Card components that display
 * images and information of members of the team. The team cards are created using information
 * from a mongo database. 
 */
const Team = ({ scrollPosition }) => {
    var [teamList, setTeam] = useState([]);

    /**
     * Maps all the gallery cards from the json file
     */
    useEffect(() => {
        const loadedTeam = memberInfos.map(team => ({
            ...team,
            image: `${process.env.PUBLIC_URL}/${team.image}`
        }));
        setTeam(loadedTeam);
    }, []);

    return (
        <div className="main_page_container">
            <h1 className="page_title">Officers</h1>
            <div className="team_grid">
                {/* These warning ignore labels are becuase there is no else statement within the if 
                structure and there does not need to be or the team page does not show correctly*/}
                {/* eslint-disable-next-line*/}
                {teamList.map((team) => {
                    if (team.office === "Officer") {
                        return (
                            <div key={team.id}>
                                <TeamCard
                                    id={team.id}
                                    name={team.name}
                                    image={team.image}
                                    position={team.position}
                                    year={team.year}
                                    scrollPosition={scrollPosition}
                                />
                            </div>
                        );
                    }
                })}
            </div>
            <h1 className="page_title">Lead Engineers</h1>
            <div className="team_grid">
                {/* eslint-disable-next-line*/}
                {teamList.map((team) => {
                    if (team.office === "LE") {
                        return (
                            <div key={team.id}>
                                <TeamCard
                                    id={team.id}
                                    name={team.name}
                                    image={team.image}
                                    position={team.position}
                                    year={team.year}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
}

export default trackWindowScroll(Team);

// var [sortMethod, setSortMethod] = useState('year-asc');
// var yearDict = {
//     "Senior": 1,
//     "Junior": 2,
//     "Sophomore": 3,
//     "Freshman": 4
// }

// /**
//  * Calls the sortGallery method and sorts based off the provided
//  * sort method
//  */
// useEffect(() => {
//     sortTeam();
// }, [sortMethod]);

// /**
//  * Sorts the gallery based on name or date
//  */
// const sortTeam = () => {
//     setTeam((prevTeamList) => {
//         const sortedTeam = [...prevTeamList];
//         switch (sortMethod) {
//             case 'name-asc': // Name A-Z
//                 sortedTeam.sort((a, b) => a.name.localeCompare(b.name));
//                 break;
//             case 'name-desc': // Name Z-A
//                 sortedTeam.sort((a, b) => b.name.localeCompare(a.name));
//                 break;
//             case 'year-asc': // Date Oldest-Newest
//                 sortedTeam.sort((a, b) => yearDict[a.year] - yearDict[b.year]);
//                 break;
//             case 'year-desc': // Date Newest-Oldest
//                 sortedTeam.sort((a, b) => yearDict[b.year] - yearDict[a.year]);
//                 break;
//             default:
//                 break;
//         }
//         return sortedTeam;
//     });
// };

/* Dropdown for sorting
<div>
    <label>Sort by: </label>
    <select onChange={(e) => setSortMethod(e.target.value)} value={sortMethod}>
        <option value="year-asc">Date (Oldest-Newest)</option>
        <option value="year-desc">Date (Newest-Oldest)</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
    </select>
</div> */