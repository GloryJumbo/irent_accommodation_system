import React, { useEffect, useState } from "react";
import axios from "axios"
function Book() {
    const [rooms, getAllFreeRooms] = useState([])
    const [landlordDetails, getLandlord] = useState([])
    const [phoneNumber, getContact]= useState([])
    const [bookingDetails, getBookingDetails] = useState({
        fullname: "",
        email: "",
        phone_number: "",
        payment_phone: "",
        room_number: ""
    })

    const hId = localStorage.getItem("housId")
    useEffect(() => {
        fetch("http://localhost:8080/irent/api/rooms/" + 38 + "&" + JSON.parse(hId))
            .then(res => res.json()).then(data => {
                getAllFreeRooms(data.data)
            })

        let landId = localStorage.getItem("landlord")
        fetch("http://localhost:8080/irent/api/landlord/" + JSON.parse(landId))
            .then(res => res.json()).then(data => {
                getLandlord(data.data)
            })
        fetch("http://localhost:8080/irent/api/phone/" + JSON.parse(landId))
            .then(res => res.json()).then(data => {
                getContact(data.data)
            })

    }, [rooms, landlordDetails, phoneNumber])

    const bookRoom = (event) => {
        const value = event.target.value;
        // console.log(event.target.value);
        getBookingDetails({
            ...bookingDetails,
            [event.target.name]: value
        });

    }
    const saveBookingRoom = (e) => {
        e.preventDefault()

        if (bookingDetails.fullname === "" && bookingDetails.phone_number === "" && bookingDetails.payment_phone === "") {
            alert("fill all fields...")
        } else {

            let data = {
                customer_name: bookingDetails.fullname,
                email: bookingDetails.email,
                phone_number: bookingDetails.phone_number,
                payment_phone_number: bookingDetails.payment_number,
                house_id: parseInt(JSON.parse(hId)),
                room_numder: parseInt(bookingDetails.room_number)
            }
            axios.post("http://localhost:8080/irent/api/book-room", data)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Booking request sent successfully...")
                        axios.delete("http://localhost:8080/irent/api/room/" + parseInt(bookingDetails.room_number)).then(result => {
                            console.log(result);
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
                    <div className="col-sm-6">

                        <form className="form-group mt-4">
                            <div className="for-control m-2">
                                <input type="text" placeholder="Full name" name="fullname" className="form-control" onChange={bookRoom} required />
                            </div>
                            <div className="for-control m-2">
                                <input type="email" placeholder="Email(optional)" name="email" className="form-control" onChange={bookRoom} />
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
                                        rooms.map((room, key) => {
                                            return <option key={key} value={room.id}>{room.room_number}</option>
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
                                return <div className="card m-2 p-2 c-css">
                                    <div className="card-body">
                                        <p>LANDLORD</p>
                                        <hr/>
                                        <p>Landlord : {land.landlord_name}</p>
                                        <p>House Location : {land.location}</p>
                                        
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
