import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function NavbarComp() {
  const [statusCount, countStatuses] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/irent/api/free-rooms/" + 38)
      .then(res => res.json()).then(data => {
        countStatuses(data.data)
        
      })
  }, [statusCount])

  const navigate = useNavigate()
  const gotoHome = () => {
    navigate("/")
  }
  const gotBookings = () => {
    navigate("/bookings")
  }
  const gotoHouses = () => {
    navigate("/compounds")
  }
  const gotLocations = () => {
    navigate("/locations")
  }
  const gotoAboutPage = () => {
    navigate("/abouts")
  }
  return (
    <div className="nav-css nav p-4">
      <span onClick={gotoHome}>
        <p className="app-name nav">iRent</p>
      </span>

      <ul className="list-group list-group-horizontal cursor-csss">
        <li className="list-group-item" onClick={gotoHouses}>Compounds</li>
        <li className="list-group-item" onClick={gotBookings}>Bookings</li>
        <li className="list-group-item">Notifications <span className="btn btn-success">{statusCount.map((count, key) => {
          return count.count
        })}</span></li>
        <li className="list-group-item" onClick={gotoAboutPage}>About</li>
      </ul>
    </div>
  );
}

export default NavbarComp;
