import React from "react";
import { Link } from "react-router-dom";
import House from "../images/abc.jpeg";

function NavigateComp() {
    return (
        <div className="navig">

            <div className="card cursor-css" style={{ width: "16rem" }}>
               <Link to="/bookings" className="cards-css">
                <img src={House} className="card-img-top card-new-css" alt="..." />

                <div className="card-body  ">
                    <p className="btn btn-light">Bookings</p>
                </div>
               </Link>
            </div>
            {/* <div className="card cursor-css" style={{ width: "16rem" }}>
                <img src={MH} className="card-img-top card-new-css" alt="..." />
                <div className="card-body">
                    <p className="card-text">Location</p>
                </div>
            </div> */}
            <div className="card cursor-css" style={{ width: "16rem" }}>
                <Link to="/compounds" className="cards-css">
                <img src={House} className="card-img-top card-new-css" alt="..." />

                <div className="card-body  ">
                    <p className="btn btn-light">Compounds</p>
                </div>
               </Link>
            </div>


        </div>
    );
}

export default NavigateComp;
