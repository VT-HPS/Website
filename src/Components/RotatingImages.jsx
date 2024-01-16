import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
/**
 * Creates the rotating images carousel on the home page. 
 */
    const data = [
        {
          image:require('../Assets/Gallery_Images/Nautalis_Under_Tent.jpg'), 
          caption:"Nautalis",
          description:"Under Tent"
         },
         {
          image:require('../Assets/Gallery_Images/Full_Team_Photo.jpg'), 
          caption:"Team Photo",
          description:"2022 - 2023 Team"
         } 
      ]


      function HomeCarousel() {
        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
             {data.map((slide, i) => {
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