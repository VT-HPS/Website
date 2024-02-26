import React from "react";
import "./GalleryCard.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

/**
 * Creates the Gallery Card component which is what is used on the gallery page.
 * It displays an image with a title, year that the image was taken, and a brief description.
 */
function GalleryCard(props) {
    return (
        <div className="gallerycard_container">
            <LazyLoadImage src={props.image} alt="Gallery" className="gallerycard_image" placeholderSrc={props.placeholder} scrollPosition={props.position}/>
            <div className="gallerycard_caption_container">
                <p className="gallerycard_description">{props.year}</p>
            </div>
            <div >
                {props.removeGallery}
            </div>
        </div>
    )
}

export default GalleryCard;