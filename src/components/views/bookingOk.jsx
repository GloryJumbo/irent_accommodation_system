import { useEffect, useState } from "react"

const BookingOk = () => {
    const [book, setBookFeed] = useState()
    useEffect(() => {
        
        setBookFeed(JSON.parse(localStorage.getItem("phoneNum")))
    })
    return (
        <div className="text-center m-4">
            <p>Booking is successful. Check sms sent to {book} </p>

        </div>
    )
}

export default BookingOk;