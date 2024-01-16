import React from "react";

/**
 * Creates the Gallery Card component which is what is used on the gallery page.
 * It displays an image with a title, year that the image was taken, and a brief description.
 */
function GalleryCard(props) {
    return (
        <div className="gallery_container">
            
            <img src={props.image} alt="Gallery" id="gallery_image" />
            <div className="gallery_card_container">
                <h1 className="gallery_title">{props.title}</h1>
                <p classname="gallery_description">{props.year}</p>
                <p className="gallery_description">{props.description}</p>
            </div>
            <div >
                {props.removeGallery}
            </div>
        </div>
    )
}

export default GalleryCard;