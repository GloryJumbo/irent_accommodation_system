import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookingPage from "../BookingPage";
import CompoundsComponents from "./Compounds";

function NavbarCompByUser() {
    const [user, getUser] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("username")) === "" || JSON.parse(localStorage.getItem("username")) === null || JSON.parse(localStorage.getItem("username")) === undefined) {
            navigate("/login")
        } else {

            let us = JSON.parse(localStorage.getItem("username"))
            getUser(us)
        }

    }, [user])

    const logoutUser = () => {
        // should show a progress bar for logging out
        setTimeout(()=>{
            localStorage.clear()
            navigate("/login")
        }, 3000)

    }
    return (
        <div>

            <div className="navbar-css top-0 position-fixed w-100">
                <div className="st-css">
                    <span className="btn btn-light" onClick={logoutUser}>Logout</span> <span>{user}</span>
                </div>
                <div style={{ textAlign: "center" }}>

                    <p>iRent Content Management System</p>
                    <div className="btn-group" role="group" aria-label="Basic example">

                        <Link to="/irent/user/components"> <button type="button" className="btn btn-dark">Compounds</button></Link>

                        <Link to="/irent/user/rooms"><button type="button" className="btn btn-dark">
                            Rooms
                        </button></Link>

                        <Link to="/irent/user/bookings"><button type="button" className="btn btn-dark">Bookings</button></Link>
                        <Link to="/compound-photos"><button type="button" className="btn btn-dark">More Images</button></Link>
                    </div>
                </div>
            </div>




        </div>

    );
}

export default NavbarCompByUser;
