import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import ControlledCarousel from "./CarouselComp";
// import MH from "../images/location.png";
import House from "../images/abc.jpeg";
function Houses(props) {
  const [houses, getHouses] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch("http://localhost:8080/irent/api/houses").then(data => data.json()).then(house => {
      getHouses(house.houses)
    })
  }, [houses])

  const gotoHouse = (e) => {
    localStorage.setItem("houseName", JSON.stringify(e.target.id.split("-")[0]))
    localStorage.setItem("housId", JSON.stringify(e.target.id.split("-")[1]))
    localStorage.setItem("landlor_id", JSON.stringify(e.target.name))
    navigate(`/houses/house`)
  }

  return (
    <div className='row'>

      <div className="col-md-12 m-2 house-css" style={{ marginTop: "20px" }}>
        {
          houses.map((h, k) => {

            return <div className='card-columns house-css' key={k}>

              <div className="card  p-1" style={{ width: "20rem", marginRight: "10px" }}>
                <img onClick={gotoHouse}  src={h.image} id={h.house_name + "-" + h.id} name={h.landlord_id} className="card-img-top cursor-css card-new-css" alt="..." />

                <div className="card-body  cards-css"  id={h.house_name + "-" + h.id} name={h.landlord_id} >
                  <p className="card-text t-size" id={h.house_name + "-" + h.id} name={h.landlord_id}>{h.house_name}</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Houses
