import React from "react";
import "./GalleryCard.css"

/**
 * Creates the Gallery Card component which is what is used on the gallery page.
 * It displays an image with a title, year that the image was taken, and a brief description.
 */
function GalleryCard(props) {
    return (
        <div className="gallerycard_container">
            <img src={props.image} alt="Gallery" className="gallerycard_image" />
            <div className="gallerycard_caption_container">
                <p classname="gallerycard_description">{props.year}</p>
            </div>
            <div >
                {props.removeGallery}
            </div>
        </div>
    )
}

export default GalleryCard;