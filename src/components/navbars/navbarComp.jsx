import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton, ButtonGroup, DropdownType, SplitButton, Badge } from "react-bootstrap"
function NavbarComp() {
  const [statusCount, countStatuses] = useState([])
  const [freeRooms, setFreeRooms] = useState([])
  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/irent/api/free-rooms/" + 48 + "&" + 46)
      .then(res => res.json()).then(data => {
        countStatuses(data.data)
      })
  }, [statusCount])

  useEffect(() => {
    fetch("http://localhost:8080/irent/api/rooms/free/" + 48 + "&" + 46)
      .then(res => res.json()).then(resData => {
        setFreeRooms(resData.data);

      })
  }, [freeRooms])

  useEffect(() => {
    fetch("http://localhost:8080/irent/api/houses")
      .then(res => res.json()).then(resData => {
        setHouses(resData.houses)
      })
  }, [houses])

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
  
  const gotoAboutPage = () => {
    navigate("/abouts")
  }
  
  const setFreeRoomsFu = (frooms) => {
    const holder = []
    frooms.map(roo => {
      holder.push(roo.house_id)
    })
    const freeR = {}
    for (const r of holder) {
      if (freeR[r]) {
        freeR[r] += 1
      } else {
        freeR[r] = 1
      }
    }
    return freeR

  }

  const goToCompound = (e) => {
    localStorage.setItem("housId", JSON.stringify(e.target.id))
    fetch("http://localhost:8080/irent/api/house-image/"+parseInt(e.target.id))
      .then(res => res.json()).then(resData => {
        localStorage.setItem("houseName", JSON.stringify(resData.house[0].house_name))
        localStorage.setItem("landlor_id", JSON.stringify(resData.house[0].landlord_id))
      })

      navigate("/houses/house/")
  }
  return (
    <div className="nav-css nav p-4">
      <span onClick={gotoHome}>
        <p className="app-name nav">iRent</p>
      </span>

      <ul className="list-group list-group-horizontal  cursor-csss">
        <li className="list-group-item" onClick={gotoHouses}>Compounds</li>

        <li className="list-group-item">
          <div>
            {[DropdownButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="sm"
                variant="secondary"
                title={"Available - " + statusCount.map(count => {
                  return count.count
                })}
              >
                {
                houses.map((tt, key)=>{
                  return Object.keys(setFreeRoomsFu(freeRooms)).map((ff,kk)=>{
                    
                   return tt.id===parseInt(ff)?<Dropdown.Item key={kk} id={tt.id} onClick={goToCompound}>{tt.house_name} <span className="badge rounded-pill bg-secondary text-light"> {setFreeRoomsFu(freeRooms)[ff]}</span></Dropdown.Item>:null
                  })
                })
              }
              </DropdownType>
            ))}
          </div>

        </li>
        <li className="list-group-item" onClick={gotoAboutPage}>About</li>
      </ul>
    </div>
  );
}

export default NavbarComp;
