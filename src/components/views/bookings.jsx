import React, { useEffect, useState } from "react"
import axios from "axios"

function Bookings() {
    const [bookedRooms, getBookedRooms] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/irent/api/booked/rooms").then(rooms => {
            getBookedRooms(rooms.data.bookings)
        }).catch(err => console.error(err))
    }, [bookedRooms])

    const approveBooking = (e) => {
        e.preventDefault()
        
        let pp = "Paid"
        let nn = "Not Paid"
        let ppn = e.target.id.split("-")[1]
        
        e.target.textContent === "Paid"? axios.patch("http://localhost:8080/irent/api/booked/rooms/"+nn+"&"+e.target.id.split("-")[0]+"&"+ppn).then(res=>{
            console.log(res.data.message);
        }).catch(err=>console.log(err)): axios.patch("http://localhost:8080/irent/api/booked/rooms/"+pp+"&"+e.target.id.split("-")[0]+"&"+ppn).then(res=>{
            console.log(
                
                res.data.msg
            );
        }).catch(err=>console.log(err))
        // console.log(e.target.textContent);
    }
    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           
            
            <div>
                <table className="table table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">Customer</th>
                            <th scope="col">Room Number</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Approve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedRooms.map((room, key) => {
                                return <tr scope="col" key={key}>
                                    <td id={room.id+"-"+room.phone_number} name={room}>
                                        {room.customer_name}
                                    </td>
                                    <td id={room.id+"-"+room.phone_number} name={room}>
                                        {room.room_numder}
                                    </td>
                                    <td id={room.id+"-"+room.phone_number} name={room}>
                                        {room.phone_number}
                                    </td>
                                    <td id={room.id+"-"+room.phone_number} name={room}>
                                        
                                        <span id={room.id+"-"+room.phone_number} name={room} type="button" className="form-control btn btn-secondary" onClick={approveBooking}>{room.deposit_approval}</span>
                                    </td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Bookings
