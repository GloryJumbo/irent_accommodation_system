import './App.css';
import NavbarComp from './components/navbars/navbarComp';
import Houses from './components/views/Houses';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landlords from './components/views/Landlords';
import Bookings from './components/views/bookings';
import Rooms from './components/views/Rooms';
import Statuses from './components/views/Statuses';
import PhoneNumbers from './components/views/PhoneNumbers';
import LoginUser from './components/views/LoginUser';
import { useEffect, useState } from 'react';
import BookingPage from './components/views/BookingPage';
import NavbarCompByUser from './components/views/users/NavbarUser';
import CompoundImages from './components/views/CompounImages';
import CompoundsComponents from './components/views/users/Compounds';
import UserRooms from './components/views/users/UserRooms';
import BookingApproval from './components/views/users/booked';
import CompoundImg from './components/views/users/CompoundImg';
import AdminNavBar from './components/views/admin/AdminNavbar';
import AdminCompounds from './components/views/admin/AdminCompounds';
import AdminRooms from './components/views/admin/AdminRooms';
import AdminLandlords from './components/views/admin/AdminLandlord';
import AdminBookings from './components/views/admin/AdminBookings';
import AdminPhoneNumbers from './components/views/admin/AdminPhoneNumbers';
import AdminStatuses from './components/views/admin/AdminStatuses';
import AdminImages from './components/views/admin/AdminImages';

function App() {
  const [uid, getUid] = useState("")
  useEffect(()=>{
    let uuid = localStorage.getItem("username")
    let u = JSON.parse(uuid)
    getUid(u)
  },[uid])
  return (
    <div className="App">
      

      <BrowserRouter>
      
        <Routes>
          
            <Route path="/" exact element={<LoginUser/>} />
            <Route path="/login" exact element={<LoginUser/>} />
            <Route path={"/irent/user/components"} exact element={<CompoundsComponents/>} />
            <Route path="/irent/user/rooms" exact element={<UserRooms/>} />
            <Route path="/irent/user/bookings" exact element={<BookingApproval/>} />
            <Route path="/compounds" exact element={<Houses />} />
            <Route path="/admin" exact element={<AdminNavBar/>} />
            <Route path="/admin/compounds" exact element={<AdminCompounds/>} />
            <Route path="/landlords" exact element={<Landlords />}/>
            <Route path="/admin/landlords" exact element={<AdminLandlords/>}/>
            <Route path="/admin/rooms" exact element={<AdminRooms/>}/>
            <Route path="admin/phone-numbers" exact element={<AdminPhoneNumbers/>}/>
            <Route path="/admin/bookings" exact element={<AdminBookings/>}/>
            <Route path="/admin/statuses" exact element={<AdminStatuses/>}/>
            <Route path="/admin/compound-images" exact element={<AdminImages/>}/>
            <Route path="/rooms" exact element={<Rooms/>}/>
            <Route path="/phone-numbers" exact element={<PhoneNumbers/>}/>
            <Route path="/bookings" exact element={<Bookings/>}/>
            <Route path="/statuses" exact element={<Statuses/>}/>
            <Route path="/compound-images" exact element={<CompoundImages/>}/>
            <Route path="/compound-photos" exact element={<CompoundImg/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
