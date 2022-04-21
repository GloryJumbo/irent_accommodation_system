import './App.css';
import NavbarComp from './components/navbars/navbarComp';
import Houses from './components/views/Houses';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Bookings from './components/views/bookings';
import Rooms from './components/views/Rooms';
import Home from './components/views/Home';
import Book from './components/views/Book';
import AboutPage from './components/views/AboutPage';
import House from './components/views/House';
import { useState } from 'react';
import BookingOk from './components/views/bookingOk';

function App() {
  const [url, getUrl] = useState("")
  const urlfu = () => {
    let hhs = localStorage.getItem("houseId")
    getUrl(JSON.parse(hhs))
    return url
  }
  // const bookRoom = () => {
  //   let landId = localStorage.getItem("landlord")
  //   if (JSON.parse(landId) === "") {
  //     return <Houses />
  //   } else {
  //     return <Book />
  //   }
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/compounds" exact element={<Houses />} />
          <Route path={"/houses/house/"} exact element={<House />} />
          <Route path="/rooms" exact element={<Rooms />} />
          <Route path="/abouts" exact element={<AboutPage />} />
          <Route path="/bookings" exact element={<Bookings />} />
          <Route path="/book-room" exact element={<Book/>} />
          <Route path="/booking-successful" exact element={<BookingOk/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
