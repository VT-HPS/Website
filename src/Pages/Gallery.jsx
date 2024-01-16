import React, { useState, useEffect } from "react";
import galleryInfos from '../Assets/GalleryInfos.json';
import Card from "../Components/GalleryCard";

/**
 * Creates the Gallery page which contains a series of gallery cards that are created from
 * a json file called "GalleryInfos.json". The page also has a sort drop down menu in the top left corner
 * that enables the user to sort the gallery images based on date and title. 
 */
const Gallery = () => {
    var [galleryList, setGallerys] = useState([]);
    var [sortMethod, setSortMethod] = useState('year-desc');

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
     * Calls the sortGallery method and sorts based off the provided
     * sort method
     */
    useEffect(() => {
        sortGallery();
    }, [sortMethod]);

    /**
     * Sorts the gallery based on name or date
     */
    const sortGallery = () => {
        setGallerys((prevGalleryList) => {
            const sortedGallery = [...prevGalleryList];
            switch (sortMethod) {
                case 'name-asc': // Name A-Z
                    sortedGallery.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'name-desc': // Name Z-A
                    sortedGallery.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 'year-asc': // Date Oldest-Newest
                    sortedGallery.sort((a, b) => a.year - b.year);
                    break;
                case 'year-desc': // Date Newest-Oldest
                    sortedGallery.sort((a, b) => b.year - a.year);
                    break;
                default:
                    break;
            }
            return sortedGallery;
        });
    };

    return (
        <div className="main_page_container">
            <h1 className="page_title">Gallery</h1>

            {/* Dropdown for sorting */}
            <div>
                <label>Sort by: </label>
                <select onChange={(e) => setSortMethod(e.target.value)} value={sortMethod}>
                    <option value="year-asc">Date (Oldest-Newest)</option>
                    <option value="year-desc">Date (Newest-Oldest)</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                </select>
            </div>
            <div className="gallery_grid">
            {
                galleryList.map((gallery) => {
                    return (
                        <div key={gallery.id}>
                            <Card
                                id={gallery.id}
                                title={gallery.title}
                                year={gallery.year}
                                description={gallery.description}
                                image={gallery.image}
                            />
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default Gallery;