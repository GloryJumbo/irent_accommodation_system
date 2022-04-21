import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminNavBar() {
  const [user, getUser] = useState()
 const navigate = useNavigate()
  useEffect(()=>{

      let us = JSON.parse(localStorage.getItem("username"))
      getUser(us)

  },[user])

  const logoutUser = () => {
    // should show a progress bar for logging out
    setTimeout(()=>{
        localStorage.clear()
        navigate("/login")
    }, 1000)

}
  return (
    <div className="navbar-css position-fixed top-0 w-100">
      <div className="st-css">
      <span className="btn btn-light" onClick={logoutUser}>Logout</span> <span>{user}</span>
      </div>

      <div style={{ textAlign: "center" }}>

      <p>iRent Content Management System</p>
      <div className="btn-group" role="group" aria-label="Basic example">


        <Link to="/admin/compounds"> <button type="button" className="btn btn-dark">Compounds</button></Link>

        <Link to="/admin/rooms"><button type="button" className="btn btn-dark">
          Rooms
        </button></Link>
        <Link to="/admin/landlords"><button type="button" className="btn btn-dark">Landlords</button></Link>
        <Link to="/admin/bookings"><button type="button" className="btn btn-dark">Bookings</button></Link>
        <Link to="/admin/phone-numbers"><button type="button" className="btn btn-dark">Phonenumbers</button></Link>
        <Link to="/admin/statuses"><button type="button" className="btn btn-dark">Status</button></Link>
        <Link to="/admin/compound-images"><button type="button" className="btn btn-dark">More Images</button></Link>


      </div>
      </div>

    </div>
  );
}

export default AdminNavBar;
