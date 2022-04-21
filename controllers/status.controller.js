const connect = require("../db/dbConfig")
const getAllStatuses = (req, res)=>{
    connect.query("SELECT * FROM booking_status", (err, data, fields) => {
        if (err) throw err
        res.json({
            message: "booking status",
            data
        })
    })
}

const postStatus = (req, res)=>{
    let status = req.body.status
    connect.query("INSERT INTO booking_status SET ?", {status},(err)=>{
        if(err) throw err
        res.json({message:"Posted one status successfully"})
    })

}

const deleteStatus = (req, res)=>{
    
    connect.query("DELETE FROM booking_status WHERE booking_status.id= ?", [req.params.id],(err)=>{
        if(err) throw err
        res.json({message:"Deleted one status successfully"})
    })

}


const postLandlord = (req, res)=>{
    let landlord = req.body
    connect.query("INSERT INTO landlords SET ?", landlord,(err)=>{
        if(err) throw err
        res.json({message:"Post successfull"})
    })

}
const postBookRoom = (req, res)=>{
    let room = req.body
    connect.query("INSERT INTO booking_details SET ?", room,(err)=>{
        if(err) throw err
        res.json({message:"Booking successfull"})
    })

}

const postHouse = (req, res)=>{
    let house = req.body
    connect.query("INSERT INTO houses SET ?", house,(err)=>{
        if(err) throw err
        res.json({message:"Post successfull"})
    })

}

const postPhoneNumber = (req, res)=>{
    let phone_number = req.body
    connect.query("INSERT INTO phone_numbers SET ?", phone_number,(err)=>{
        if(err) throw err
        res.json({message:"Post successfull"})
    })

}
const postRoomNumber = (req, res)=>{
    let rooms = req.body
    connect.query("INSERT INTO rooms SET ?", rooms,(err)=>{
        if(err) throw err
        res.json({message:"Post successfull"})
    })

}
const getLandlords = (req, res)=>{
    connect.query("SELECT * FROM landlords",(err, data, fields)=>{
        if(err) throw err
        res.json({message:"Landlords list", data})
    })
}

const getLandlord = (req, res)=>{
    let landId = req.params.id
    connect.query("SELECT * FROM landlords WHERE landlords.id=?", [landId],(err, data, fields)=>{
        if(err) throw err
        res.json({message:"Landlords list", data})
    })
}
const getlandlordPhoneNumber = (req, res)=>{
    let landId = req.params.id
    connect.query("SELECT phone_number FROM phone_numbers WHERE phone_numbers.landlord_id=?", [landId],(err, data, fields)=>{
        if(err) throw err
        res.json({message:"Landlord's phone number list", data})
    })
}

const getHouses = (req, res)=>{
    connect.query("SELECT * FROM houses",(err, houses, fields)=>{
        if(err) throw err
        res.json({message:"Houses list", houses})
    })

}
const getLocation= (req, res)=>{
    let location = req.params.is
    connect.query("SELECT location_name FROM location WHERE location.id= ?",[location], (err, data,fields)=>{
        if(err) throw err
        res.json({message:"Landlords list", data})
    })
}

const getFreeRooms= (req, res)=>{
let statusId = req.params.id
    let sql = "SELECT COUNT(booking_status_id) as count FROM rooms WHERE booking_status_id = ?"
    connect.query(sql, [statusId], (err, data,fields)=>{
        if(err) throw err
        res.json({message:"Rooms count", data})
    })
}
const getAllFreeRoomsByLandlord= (req, res)=>{
let houseId = req.params.houseId
let statusId = req.params.statusId
    let sql = "SELECT * FROM rooms WHERE booking_status_id = ? AND house_id= ?"
    connect.query(sql, [statusId,houseId], (err, data,fields)=>{
        if(err) throw err
        res.json({message:"Free Rooms", data})
    })
}
const updateRoomStatus= (req, res)=>{

let roomId = req.params.roomId

    let sql = "DELETE FROM rooms WHERE rooms.id= ?"
    connect.query(sql, [roomId], (err)=>{
        if(err) throw err
        res.json({message:"Deleted room status successfully..."})
    })
}

module.exports = {
    getAllStatuses,
    postStatus,
    deleteStatus,
    postLandlord,
    getLandlords,
    getLandlord,
    getLocation,
    postHouse,
    postPhoneNumber,
    getHouses,
    postRoomNumber,
    getFreeRooms,
    getAllFreeRoomsByLandlord,
    postBookRoom,
    updateRoomStatus,
    getlandlordPhoneNumber
};