import React from "react";
import { Link } from "react-router-dom";
import BottomCarousel from "./BotomCarousel";
import ControlledCarousel from "./CarouselComp";
import NavigateComp from "./navigateComp";

function Home() {
  return (
    <div className="">
        <div className="container">

        <ControlledCarousel/>
        </div>
        
        {/* <NavigateComp/> */}
        <hr/>
      <BottomCarousel/>
    </div>
  );
}

export default Home;
