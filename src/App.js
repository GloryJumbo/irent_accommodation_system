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

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      <NavbarComp />
        <Routes>
          
            <Route path="/" exact element={<Houses />} />
            <Route path="/houses" exact element={<Houses />} />
            <Route path="/landlords" exact element={<Landlords />}/>
            <Route path="/rooms" exact element={<Rooms/>}/>
            <Route path="/phone-numbers" exact element={<PhoneNumbers/>}/>
            <Route path="/bookings" exact element={<Bookings/>}/>
            <Route path="/statuses" exact element={<Statuses/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
