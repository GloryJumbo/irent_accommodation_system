import React from "react";
import { Link } from "react-router-dom";
import House from "../images/abc.jpeg";

function NavigateComp() {
    return (
        <div className="navig">

            <div class="card cursor-css" style={{ width: "16rem" }}>
                <img src={House} class="card-img-top card-new-css" alt="..." />
               <Link to="/bookings" className="cards-css">

                <div class="card-body  ">
                    <p class="btn btn-light">Bookings</p>
                </div>
               </Link>
            </div>
            {/* <div class="card cursor-css" style={{ width: "16rem" }}>
                <img src={MH} class="card-img-top card-new-css" alt="..." />
                <div class="card-body">
                    <p class="card-text">Location</p>
                </div>
            </div> */}
            <div class="card cursor-css" style={{ width: "16rem" }}>
                <img src={House} class="card-img-top card-new-css" alt="..." />
                <Link to="/compounds" className="cards-css">

                <div class="card-body  ">
                    <p class="btn btn-light">Compounds</p>
                </div>
               </Link>
            </div>


        </div>
    );
}

export default NavigateComp;
