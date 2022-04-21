import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

function NavbarComp() {
  const [user, getUser] = useState()

  useEffect(()=>{

      let us = JSON.parse(localStorage.getItem("username"))
      getUser(us)

  },[user])
  return (
    <div className="navbar-css position-fixed top-0 w-100">
      <div className="st-css">
        <span>{user}</span>
      </div>

      <div style={{ textAlign: "center" }}>

      <p>iRent Content Management System</p>
      <div className="btn-group" role="group" aria-label="Basic example">


        <Link to="/compounds"> <button type="button" className="btn btn-dark">Compounds</button></Link>

        <Link to="/rooms"><button type="button" className="btn btn-dark">
          Rooms
        </button></Link>
        <Link to="/landlords"><button type="button" className="btn btn-dark">Landlords</button></Link>
        <Link to="/bookings"><button type="button" className="btn btn-dark">Bookings</button></Link>
        <Link to="/phone-numbers"><button type="button" className="btn btn-dark">Phonenumbers</button></Link>
        <Link to="/statuses"><button type="button" className="btn btn-dark">Status</button></Link>
        <Link to="/compound-images"><button type="button" className="btn btn-dark">More Images</button></Link>


      </div>
      </div>

    </div>
  );
}

export default NavbarComp;
