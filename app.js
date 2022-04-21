const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();

const connect = require("./db/dbConfig")


const controller = require("./controllers/status.controller")
var corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001"]
};
app.use(bodyParser({limit:'200mb'}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded

// simple route

app.get("/irent/api/statuses", controller.getAllStatuses);
app.post("/irent/api/status", controller.postStatus);
app.get("/irent/api/rooms/free/:id&:id2", controller.getAllFreeRooms);
app.get("/irent/api/rooms/all-free/:id&:id2", controller.getAlFreeRooms);
app.get("/irent/api/rooms/all-pending/:id&:id2", controller.getAlPendingRooms);
app.delete("/irent/api/booking/delete/:id", controller.deleteBooking);
app.post("/irent/api/landlord", controller.postLandlord);
app.get("/irent/api/landlords", controller.getLandlords);
app.get("/irent/api/landlord/:id", controller.getLandlord);
app.get("/irent/api/location/:id", controller.getLocation);
app.post("/irent/api/house", controller.postHouse);
app.post("/irent/api/room", controller.postRoomNumber);
app.get("/irent/api/house/:id", controller.getHousesById);
app.post("/irent/api/phone-number", controller.postPhoneNumber);
app.post("/irent/api/book-room", controller.postBookRoom);
app.post("/irent/api/house/images", controller.postHouseImages);
app.get("/irent/api/house/images/:id", controller.getHouseImages);
app.get("/irent/api/houses", controller.getHouses);
app.delete("/irent/api/delete/landlord/:id", controller.DeleteLandlord);
app.get("/irent/api/rooms/images", controller.getAllImages);
app.get("/irent/api/houses/:id", controller.getHouseByLandlord);
app.get("/irent/api/house-image/:id", controller.getHouseById);
app.get("/irent/api/free-rooms/:id&:id2", controller.getFreeRooms);
app.get("/irent/api/rooms/:statusId&:statusId2&:houseId", controller.getAllFreeRoomsByLandlord);
app.patch("/irent/api/room/:roomId", controller.updateRoomStatus);
app.patch("/irent/api/room-status/:statusId&:roomId", controller.updateRoomStat);
app.get("/irent/api/phone/:landlordId", controller.getlandlordPhoneNumber);
app.get("/irent/api/booked/rooms", controller.getBookings);
app.get("/irent/api/booked/rooms/:landlord_id", controller.getBookingsById);
app.get("/irent/api/house-rooms", controller.getRoomStatusByNumberHouse);
app.get("/irent/api/admin/:username&:password", controller.getAdmin);
app.get("/irent/api/user/landlord/:username&:password", controller.getLandlordByUsername);
app.patch("/irent/api/booked/rooms/:deposit_approval&:id&:phone_number", controller.updateBookingPayStatus);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});