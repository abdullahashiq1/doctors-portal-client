import './App.css';
import Navber from './Pages/HomePage/Shared/Navber';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/HomePage/About/About';
import Review from './Pages/HomePage/Review/Review';
import Contact from './Pages/HomePage/Contact/Contact';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import Appoint from './Pages/HomePage/Appoint/Appoint';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/LoginPage/RequireAuth';


function App() {
  return (
    <div>
        <Navber></Navber>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="appoint" element={
          <RequireAuth>
            <Appoint />
          </RequireAuth>
        }/>       
        <Route path="review" element={<Review />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="about" element={<About />}/>        
        <Route path="login" element={<LoginPage />}/>
        <Route path="signup" element={<SignUp />}/>        

      </Routes>
    </div>
  );
}

export default App;
