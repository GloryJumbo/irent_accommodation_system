import React,{useState} from "react";
import {Carousel} from "react-bootstrap"

import  Image2   from "../images/abc.jpeg";
import  Image3   from "../images/efg.jpg";
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="top-css">
        <Carousel.Item>
          
          <img
            className="d-block w-100"
            src={Image2}

            alt="First Slide"
          />
  
          <Carousel.Caption>
            <h3>Affordable and Secure</h3>
            <p>Students Accommodation</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3}

            alt="Second Slide"
          />
  
          <Carousel.Caption>
            <h3>Affordable and Secure</h3>
            <p>
              Students Accommodation
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;