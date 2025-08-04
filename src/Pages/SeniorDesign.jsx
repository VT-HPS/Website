import React, { useState, useEffect } from "react";
import galleryInfos from "../Assets/Senior_Design.json";
import Card from "../Components/SeniorDesignGalleryCard/SeniorDesignGalleryCard";
import Stack from 'react-bootstrap/Stack';
import { trackWindowScroll } from 'react-lazy-load-image-component';

/**
 * Creates the Gallery page which contains a series of gallery cards that are created from
 * a json file called "GalleryInfos.json". The page also has a sort drop down menu in the top left corner
 * that enables the user to sort the gallery images based on date and title. 
 */
const SeniorDesign = ({ scrollPosition }) => {
    var [galleryList, setGallerys] = useState([]);
    var [sortMethod, setSortMethod] = useState('year-asc');

    /**
     * Maps all the gallery cards from the json file
     */
    useEffect(() => {
        const loadedGallerys = galleryInfos.map(gallery => ({
            ...gallery,
            image: `${process.env.PUBLIC_URL}/${gallery.image}`
        }));
        setGallerys(loadedGallerys);
    }, []);

    /**
     * Sorts the gallery based on date using the method sent to it
     */
    useEffect(() => {
        setGallerys((prevGalleryList) => {
            const sortedGallery = [...prevGalleryList];
            switch (sortMethod) {
                case 'year-desc': // Date Oldest-Newest
                    sortedGallery.sort((a, b) => (a.year * 365 - b.year * 365) + (a.month * 30 - b.month * 30) + (a.day - b.day));
                    break;
                case 'year-asc': // Date Newest-Oldest
                    sortedGallery.sort((a, b) => (b.year * 365 - a.year * 365) + (b.month * 30 - a.month * 30) + (b.day - a.day));
                    break;
                default:
                    break;
            }
            return sortedGallery;
        });
    }, [sortMethod]);

    /**
     * Sorts the gallery based on name or date
     */

    return (
        <div className="main_page_container">
            <h1 className="page_title">Senior Design</h1>

            <Stack gap={2} >
                <h4 className="sponsor_reg_centered_text">The HPS senior design team is a subset of the HPS club team, that operates alongside the other subteams. This team is apart of the Interdisciplinary Capstone program, a year-long design course where students of different majors come together to tackle design challenges. In previous years the senior design teams have aimed to design variable drivetrain systems, reliable propulsion, and autonomous controls.</h4><br/>
                <h4 className="sponsor_reg_centered_text">The addition of this team in the 2023-2024 academic year has allowed the team to generate new and innovative systems leading to sucess at the International Submarine Races. The senior design team continues to innovate following a comprehensive design process with advising from Virginia Tech faculty and looks forward to continuing to help the team improve.</h4><br/>
            </Stack>


            {/* Dropdown for sorting */}
            <div>
                <label>Sort by: </label>
                <select onChange={(e) => setSortMethod(e.target.value)} value={sortMethod}>
                    <option value="year-asc">Date (Newest-Oldest)</option>
                    <option value="year-desc">Date (Oldest-Newest)</option>
                </select>
            </div>
            <div className="gallery_grid">
                {
                    galleryList.map((gallery) => {
                        return (
                            <div key={gallery.id}>
                                <Card
                                    id={gallery.id}
                                    year={gallery.year}
                                    image={gallery.image}
                                    placeholder={gallery.placeholder}
                                    position={scrollPosition}
                                    day={gallery.day}
                                    month={gallery.month}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default trackWindowScroll(SeniorDesign);