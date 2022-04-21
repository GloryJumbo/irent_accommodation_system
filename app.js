const express = require("express");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload")

const controller = require("./controllers/status.controller")
var corsOptions = {
    origin: ["http://localhost:3000","http://localhost:3001"]
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

app.get("/irent/api/statuses", controller.getAllStatuses);
app.post("/irent/api/status", controller.postStatus);
app.delete("/irent/api/status/:id", controller.deleteStatus);
app.post("/irent/api/landlord", controller.postLandlord);
app.get("/irent/api/landlords", controller.getLandlords);
app.get("/irent/api/landlord/:id", controller.getLandlord);
app.get("/irent/api/location/:id", controller.getLocation);
app.post("/irent/api/house", controller.postHouse);
app.post("/irent/api/phone-number", controller.postPhoneNumber);
app.post("/irent/api/book-room", controller.postBookRoom);
app.get("/irent/api/houses", controller.getHouses);
app.get("/irent/api/free-rooms/:id", controller.getFreeRooms);
app.get("/irent/api/rooms/:statusId&:houseId", controller.getAllFreeRoomsByLandlord);
app.delete("/irent/api/room/:roomId", controller.updateRoomStatus);
app.get("/irent/api/phone/:roomId", controller.getlandlordPhoneNumber);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});