import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdminNavBar from './AdminNavbar'

function AdminRooms() {

    const [houses, getLandlordHouses] = useState([])
    const [statuses, getHouseStatus] = useState([])
    const [image_field, getImg] = useState("")
    const [roomDetails, setRoomDetails] = useState({
        room_number: "",
        compound_id: "",
        status_id: ""
    })

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/houses").then(resp => {
            getLandlordHouses(resp.data.houses)
        })
    }, [houses])

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/statuses").then(respons => {
            getHouseStatus(respons.data.data)
        })
    }, [statuses])

    const getImage = (event) => {
        // console.log(event.target.files[0].name)

        getImg(
            event.target.files[0]
        )
    }

    const saveRoom = (ev) => {
        ev.preventDefault()
        setRoomDetails({
            ...roomDetails,
            [ev.target.name]: ev.target.value
        })
    }

    const createRoom = (eve) => {
        eve.preventDefault()
        // console.log(roomDetails);
        let data = {
            room_number: roomDetails.room_number,
            house_id: roomDetails.compound_id,
            booking_status_id: roomDetails.status_id
        }

        if (data.room_number === "" || data.room_number === null || data.room_number === undefined) {
            alert("Please enter room number")
        } else if (data.house_id === "" || data.house_id === null || data.house_id === undefined) {
            alert("Please select compoud")

        } else if (data.booking_status_id === "" || data.booking_status_id === null || data.booking_status_id === undefined) {
            alert("Please select room status")
        } else {
            axios.post("http://localhost:8080/irent/api/room", data).then(res => {
                alert(res.data.message)
                setRoomDetails({
                    room_number: "",
                    compound_id: "",
                    status_id: ""
                })
            }).catch(err=>{
                alert("Something went wrong with the server. room not created..")
            })
        }

    }
    return (
        <div>
            <AdminNavBar/>
        <div className="container" style={{ marginTop: "20px" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row gx-3 gy-2 align-items-center">
                <div className="col-sm-3">
                    <input type="text" className="form-control" name='room_number' placeholder="Room number" aria-label="House name" onChange={saveRoom} />
                </div>

                <div className="col-sm-3">
                    
                    <select className="form-select" name="compound_id" id="specificSizeSelect" onChange={saveRoom}>
                        <option value="n">Compound</option>
                        {
                            houses.map((house, key) => {
                                return <option key={key} value={house.id}>{house.house_name}</option>
                            })
                        }

                    </select>
                </div>
                <div className="col-sm-3">
                    <select name="status_id" className="form-select" id="specificSizeSelect" onChange={saveRoom}>
                        <option value="m">Room Status</option>
                        {
                            statuses.map((status, key) => {
                                return <option key={key} value={status.id}>{status.status}</option>
                            })
                        }

                    </select>
                </div>
                <div className="col-sm-3">
                    <button type="button" className="form-control btn btn-secondary" onClick={createRoom}>Save</button>
                </div>
            </div>
            <hr />
    

        </div>
        </div>
    )
}

export default AdminRooms
