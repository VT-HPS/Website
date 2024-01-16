import React, { useState, useEffect} from "react";
import TeamCard from "../Components/TeamCard"
import axios from "axios";

/**
 * Creates the team page which contains a grid of Team Card components that display
 * images and information of members of the team. The team cards are created using information
 * from a mongo database. 
 */
const Team = () => {
    const [teamList, setTeam] = useState([]);
    const [sortMethod, setSortMethod] = useState('lastNameAsc');


    useEffect(() => {
        axios.get('http://localhost:5000/api/team')
            .then((response) => {
                setTeam(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const sortedData = sortTeam([...teamList]);
        setTeam(sortedData);
    }, [sortMethod]);

    const sortTeam = (data) => {
        switch (sortMethod) {
            case 'lastNameAsc':
                return data.sort((a, b) => a.lastName.localeCompare(b.lastName));
            case 'lastNameDesc':
                return data.sort((a, b) => b.lastName.localeCompare(a.lastName));
            case 'major':
                return data.sort((a, b) => a.major.localeCompare(b.major));
            default:
                return data;
        }
    };

    // State for the modals
    const [showFirstModal, setShowFirstModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);

    // Functions to handle opening and closing the first modal
    const handleFirstModalShow = () => setShowFirstModal(true);
    const handleFirstModalClose = () => setShowFirstModal(false);

    // Functions to handle opening and closing the second modal
    const handleSecondModalShow = () => setShowSecondModal(true);
    const handleSecondModalClose = () => setShowSecondModal(false);

    return (
        <div className="main_page_container">
            <h1 className="page_title">Our Team Members</h1>
                 
            <div>
                <label>Sort by: </label>
                <select onChange={(e) => setSortMethod(e.target.value)} value={sortMethod}>
                    <option value="lastNameAsc">Last Name (A-Z)</option>
                    <option value="lastNameDesc">Last Name (Z-A)</option>
                    <option value="major">Major</option>
                </select>
            </div>

            <div className="team_grid">
            {
                teamList.map((team) => {
                    if(team.existingMember === true)
                    {
                        return (
                            <div key={team.id}>
                                <TeamCard
                                    id={team.id}
                                    firstName={team.firstName}
                                    lastName={team.lastName}
                                    email={team.email}
                                    imagePath={team.imagePath}
                                    major={team.major}
                                />
                            </div>
                        );
                    }
                    
                })
            }
            </div>
        </div>
    )
}

export default Team;