import './App.css';
import Login from './components/Login';
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import HelpDesk from './components/HelpDesk';
// import SeatSelection from './components/SeatSelection';
import SignUp from './components/SignUp';
import EmailVerification from './components/EmailVerification';
import About from './components/About';
import Home from './components/Home';
import './components/Home.css';
import BookingDetails from './components/BookingDetails';
import ForgotPassword from './components/ForgotPassword';
import ProfilePage from './components/ProfilePage';
import ResetVerify from './components/ResetVerfiy';
import ResetPassword from './components/ResetPassword';
// import Bookings from './components/Bookings';
// import Level2 from './components/Level2';
// import Cabins from './components/Cabins';
// import DropDownList from './components/DropDownList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage';
// import SessionTimeout from './components/SessionTimeout';




function App() {

  // const navigate = useNavigate();
  // const location = useLocation();

  //to track authentication
  // const [isAuth, setIsAuth] = useState(false);
  //to track the login status
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleSessionTimeout = () => {
  //   setIsAuth(false);
  //   navigate('/login');
  //   toast.warning('Session TimedOut');
  //   setTimeout(() =>{
  //     toast.info('Please Login Again');
  //   }, 500);
  //   // window.location.href='/login';
  // }

  // useEffect(() => {
  //   const isLoggedIn = isAuth;
  //   const currentPath = location.pathname;
  //   if (!isLoggedIn && currentPath !== '/login') {
  //     setIsAuth(false);
  //     navigate('/login')
  //   }
  // }, [isAuth, location, navigate]);


  

  return (
    <>
      {/* <SessionTimeout timeoutInMinutes={0.2} onTimeout={handleSessionTimeout} /> */}
      {/* <Navbar /> */}
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/emailverification/:email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetverify/:email" element={<ResetVerify />} />
        <Route path="/resetpassword/:email" element={<ResetPassword />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/homepage/:name" element={<HomePage />} />
        <Route path="/profilepage/:name" element={<ProfilePage />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />
        
      </Routes>

      {/* <HomePage /> */}
      
      
    
    </>
  );

  
}


export default App;
