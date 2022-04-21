import axios from "axios"
import React, { useEffect, useState } from "react"
import NavbarCompByUser from "./NavbarUser"

function BookingApproval() {
    const [data, loadData] = useState([[]])

    const [bookedRooms, getBookedRooms] = useState([])
    const [bookeRooms, getBookeRooms] = useState([])
    const [update, updateMessage] = useState("")
    const land = localStorage.getItem("landlord_id")

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/booked/rooms/" + parseInt(JSON.parse(land))).then(rooms => {
            getBookedRooms(rooms.data.bookings)

        }).catch(err => console.error(err))
    }, [bookedRooms])

    const approveBooking = (e) => {
        e.preventDefault()
        let pp = "Paid"
        let nn = "Not Paid"
        let ppn = e.target.id.split("-")[1]

        e.target.textContent === "Paid" ? axios.patch("http://localhost:8080/irent/api/booked/rooms/" + nn + "&" + e.target.id.split("-")[0] + "&" + ppn).then(res => {
            // console.log(res.data.message);
        }).catch(err => console.log(err)) : axios.patch("http://localhost:8080/irent/api/booked/rooms/" + pp + "&" + e.target.id.split("-")[0] + "&" + ppn).then(res => {

        }).catch(err => console.log(err))
        // console.log(e.target.textContent);
    }


    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/statuses").then((response) => {
            loadData(response.data.data);
        });
    }, [data]);

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/house-rooms").then((response) => {

            getBookeRooms(response.data.room);


        });
    }, []);

    const updateRoom = (e) => {
        if (e.target.value === "48") {


            axios.delete("http://localhost:8080/irent/api/booking/delete/" + e.target.name).then(res => {


            })
        } else {
            axios.patch("http://localhost:8080/irent/api/room-status/" + e.target.value + "&" + e.target.id).then(res => {

                if (res.status === 200) {
                    updateMessage(res.data.message);
                    window.location.reload()
                } else {
                    updateMessage("Server error...");
                }
            })
        }


    }


    return (
        <div>
            <NavbarCompByUser />
            <div className="container" style={{ marginTop: "20px" }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div>
                    <div className="w-100" style={{ textAlign: "center" }}><span className="m-1">{update}</span></div>
                    <table className="table table-secondary">
                        <thead>
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col">Room Number</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Approve</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedRooms.map((room, key) => {
                                    return <tr scope="col" key={key}>
                                        <td id={room.id}>
                                            {room.customer_name}
                                        </td>
                                        <td id={room.id}>
                                            {room.room_numder}({
                                                bookeRooms.map((book, k) => {
                                                    return room.room_numder === book.room_number && room.house_id === book.house_id ? <span key={k}>{
                                                        data.map((bs, kk) => {
                                                            return book.booking_status_id === bs.id ? <span key={kk}>{bs.status}</span> : null
                                                        })}</span> : null
                                                })
                                            })
                                        </td>
                                        <td id={room.id}>
                                            {room.phone_number}
                                        </td>
                                        <td id={room.id + "-" + room.phone_number} name={room.phone_number}>
                                            <span id={room.id + "-" + room.phone_number} name={room.phone_number} type="button" className="form-control btn btn-secondary" onClick={approveBooking}>{room.deposit_approval}</span>
                                        </td>
                                        <td id={room.id}>

                                            {
                                                bookeRooms.map((book, k) => {
                                                    // console.log(book)
                                                    return room.room_numder === book.room_number || room.house_id === book.house_id ? <select key={k} className="form-select"
                                                        name={room.id} id={book.id} onChange={updateRoom}>
                                                        <option key={key} value="no">Update</option>

                                                        {

                                                            data.map((status, key) => {
                                                                return <option key={key} value={status.id} name={room.id}>{status.status}</option>
                                                            })

                                                        }

                                                    </select> : null
                                                })
                                            }

                                        </td>
                                    </tr>
                                })
                            }


                        </tbody>
                    </table>

                </div>

            </div>
        </div>

    )

}

export default BookingApproval