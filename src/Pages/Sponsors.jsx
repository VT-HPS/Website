import React, { useState, useEffect } from "react";
import sponsorInfos from '../Assets/sponsor_infos.json'
import Sponsor from "../Components/SponsorCard"

/**
 * Creates the sponsors page which displays a grid of SponsorCard components, which is simply
 * images of the team's sponsor logos.The sponsor information is loaded from a json called "sponsor_infos.json"
 */
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
            {
                sponsorList.map((sponsor) => {
                    return (
                        <div key={sponsor.id}>
                            <Sponsor
                                id={sponsor.id}
                                title={sponsor.title}
                                image={sponsor.image}
                                link={sponsor.link}
                            />
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default Sponsors;