import React from "react";
import { Link } from "react-router-dom";
import ControlledCarousel from "./CarouselComp";
import NavigateComp from "./navigateComp";

function Home() {
  return (
    <div className="">
        <div className="container">

        <ControlledCarousel/>
        </div>
        <hr/>
        <NavigateComp/>
        <hr/>
      
    </div>
  );
}

export default Home;
