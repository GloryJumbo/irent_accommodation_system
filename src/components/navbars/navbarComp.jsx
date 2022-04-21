import React from "react";
import {Link} from "react-router-dom";

function NavbarComp() {
  return (
    <div className="navbar-css position-fixed top-0 w-100">
      <p>iRent Content Management System</p>
      <div class="btn-group" role="group" aria-label="Basic example">

       
          <Link to="/houses"> <button type="button" class="btn btn-dark">Compounds</button></Link>
          
          <Link to="/rooms"><button type="button" class="btn btn-dark">
            Rooms
          </button></Link>
          <Link to="/landlords"><button type="button" class="btn btn-dark">Landlords</button></Link>
          <Link to="/bookings"><button type="button" class="btn btn-dark">Bookings</button></Link>
          <Link to="/phone-numbers"><button type="button" class="btn btn-dark">Phonenumbers</button></Link>
          <Link to="/statuses"><button type="button" class="btn btn-dark">Status</button></Link>
        
        
        
        
        
      </div>
    </div>
  );
}

export default NavbarComp;
