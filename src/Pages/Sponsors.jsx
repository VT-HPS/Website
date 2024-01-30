import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import sponsorInfos from '../Assets/sponsor_infos.json';
import Sponsor from "../Components/SponsorCard/SponsorCard";

const Sponsors = () => {
    var [sponsorList, setSponsors] = useState([]);

    useEffect(() => {
        const loadedSponsors = sponsorInfos.map(sponsor => ({
            ...sponsor,
            image: `${process.env.PUBLIC_URL}/${sponsor.image}`
        }));
        setSponsors(loadedSponsors);
    }, []);

    return (
        <div className="main_page_container">
            <h1 className="page_title">Our Sponsors</h1>

            <div className="sponsor_grid">
                {sponsorList.map((sponsor) => (
                    <div key={sponsor.id}>
                        <Sponsor
                            id={sponsor.id}
                            title={sponsor.title}
                            image={sponsor.image}
                            link={sponsor.link}
                        />
                    </div>
                ))}
            </div>

            <div className="sponsor_reg_button_container">
                <Link to="/become_a_sponsor">
                    <button className="sponsor_reg_button">Become an HPS Sponsor</button>
                </Link>
            </div>
        </div>
    );
}

export default Sponsors;
