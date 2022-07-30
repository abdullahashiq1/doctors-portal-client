import './App.css';
import Navber from './Pages/HomePage/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/HomePage/About/About';
import Appointment from './Pages/HomePage/Appointment/Appointment';
import Review from './Pages/HomePage/Review/Review';
import Contact from './Pages/HomePage/Contact/Contact';
import LoginPage from './Pages/Login/LoginPage/LoginPage';


function App() {
  return (
    <div>
        <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>       
        <Route path="/review" element={<Review />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/appoinment" element={<Appointment />}/>
        <Route path="/login" element={<LoginPage />}/>
        
      </Routes>
    </div>
  );
}

export default App;
