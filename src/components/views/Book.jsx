import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Book() {

    const [rooms, getAllFreeRooms] = useState([])
    const [pendingRooms, getAllPendingRooms] = useState([])
    const [freePending, setFreePendingRooms] = useState([])
    const [landlordDetails, getLandlord] = useState([])
    const [phoneNumber, getContact] = useState([])
    const [bookingDetails, getBookingDetails] = useState({
        fullname: "",
        email: "",
        phone_number: "",
        payment_phone: "",
        room_number: ""
    })
    const navigate = useNavigate()

    const [isBooked, bookResponce] = useState("")
    const [bgColor, bgColorFun] = useState("")
    const [housess, setHouses] = useState("")
    const hId = localStorage.getItem("housId")
    let land_Id = localStorage.getItem("landlor_id")


    // console.log(freePending);
    useEffect(() => {
        fetch("http://localhost:8080/irent/api/rooms/all-free/" + 48 + "&" + parseInt(JSON.parse(hId)))
            .then(res => res.json()).then(data => {

                getAllFreeRooms(data.data)
            })
    }, [rooms])

    useEffect(() => {
        fetch("http://localhost:8080/irent/api/rooms/all-pending/" + 46 + "&" + parseInt(JSON.parse(hId)))
            .then(res => res.json()).then(data => {

                getAllPendingRooms(data.data)
            })
    }, [rooms])


    useEffect(() => {
        setFreePendingRooms(rooms.concat(pendingRooms))
    }, [freePending])


    useEffect(() => {
        fetch("http://localhost:8080/irent/api/house-image/" + JSON.parse(hId))
            .then(res => res.json()).then(data => {
                setHouses(data.house[0].location)
            })
    }, [housess])

    useEffect(() => {

        let landId = localStorage.getItem("landlor_id")
        fetch("http://localhost:8080/irent/api/landlord/" + parseInt(JSON.parse(landId)))
            .then(res => res.json()).then(data => {
                getLandlord(data.data)
            })
    }, [landlordDetails])

    useEffect(() => {
        let landId = localStorage.getItem("landlor_id")

        fetch("http://localhost:8080/irent/api/phone/" + parseInt(JSON.parse(landId)))
            .then(res => res.json()).then(data => {

                getContact(data.data[0].phone_number)
            })
    }, [phoneNumber])


    const bookRoom = (event) => {
        const value = event.target.value;

        getBookingDetails({
            ...bookingDetails,
            [event.target.name]: value
        });

    }

    const saveBookingRoom = (e) => {

        e.preventDefault()
        if (bookingDetails.fullname === "" && bookingDetails.phone_number === "" && bookingDetails.payment_phone === "") {

            bookResponce("Please fill all fields...")
            bgColorFun("red")
        } else {

            let data = {
                customer_name: bookingDetails.fullname,
                email: bookingDetails.email,
                phone_number: bookingDetails.phone_number,
                payment_phone_number: bookingDetails.payment_number,
                house_id: JSON.parse(localStorage.getItem("housId")),
                landlord_id: JSON.parse(localStorage.getItem("landlor_id")),
                room_numder: bookingDetails.room_number,
                deposit_approval: "Not Paid",
                phone: phoneNumber
            }
            axios.post("http://localhost:8080/irent/api/book-room", data)
                .then((res) => {

                    if (res.status === 200) {

                        // let nn = localStorage.getItem("land_name")
                        let room_id = localStorage.getItem("room_id_value")
                        axios.patch("http://localhost:8080/irent/api/room/" + parseInt(JSON.parse(room_id))).then(result => {
                            localStorage.setItem("phoneNum", JSON.stringify(data.phone_number))
                            bookResponce("")

                            setTimeout(() => {

                                navigate("/booking-successful")
                            }, 2000);

                        })
                    }

                })


        }

    }
    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6" style={{ textAlign: "center" }}>
                        <div className="m-2" style={{ marginTop: "20px" }}>

                            {

                                isBooked === "" ? "" : <span className="form-control" style={{ backgroundColor: bgColor, color: "whitesmoke" }}>{isBooked}</span>

                            }
                        </div>
                        <form className="form-group mt-4">
                            <div className="for-control m-2">
                                <input type="text" placeholder="Full name" name="fullname" className="form-control" onChange={bookRoom} required />
                            </div>
                            <div className="for-control m-2">
                                <input type="email" placeholder="Email address" name="email" className="form-control" onChange={bookRoom} />
                            </div>
                            <div className="for-control m-2">
                                <input type="text" placeholder="Phone number(s) e.g 0888123456, 0991345678" name="phone_number" className="form-control" onChange={bookRoom} required />
                            </div>
                            <div className="for-control m-2">
                                <input type="text" placeholder="Phone number for payment" name="payment_number" className="form-control" onChange={bookRoom} required />
                            </div>
                            <div className="for-control m-2">
                                <select className="form-select" name="room_number" id="specificSizeSelect" onChange={bookRoom}>
                                    <option value="1">Room number</option>
                                    {

                                        freePending.map((room, key) => {
                                            localStorage.setItem("room_id_value", JSON.stringify(room.id))
                                            return <option key={key} value={room.room_number}>{room.room_number}</option>
                                        })
                                    }

                                </select>
                            </div>
                            <div className="for-control m-2">
                                <button type="button" className="btn btn-secondary form-control" onClick={saveBookingRoom}>Book</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-3 mt-3">
                        {
                            landlordDetails.map((land, key) => {
                                return <div key={key} className="card m-2 p-2 c-css">
                                    <div className="card-body">
                                        <p>Landlord : {

                                            land.landlord_name
                                        }</p>

                                        <p>House Location : {
                                            housess
                                        }</p>
                                        <p>Payment : {
                                            phoneNumber
                                        }
                                        </p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;
