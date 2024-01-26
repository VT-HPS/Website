import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from "react";
import rotateImageList from '../../Assets/Rotating_Image.json';

/**
 * This function builds a componet that is a rotating image screen that draws images from the "Rotating_Image.json" file and then
 * displays them with their captions and the next and previous buttons. To add images just add to the "Rotating_Image.json" file.
 */
function HomeCarousel() {
  var [imageList, setImages] = useState([]);
  var [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  /**
 * Maps all the gallery cards from the json file
 */
  useEffect(() => {
    const loadedImages = rotateImageList.map(slide => ({
      ...slide,
      image: `${process.env.PUBLIC_URL}/${slide.image}`
    }));
    setImages(loadedImages);
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imageList.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 h=50"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}

    </Carousel>
  );
}
export default HomeCarousel;