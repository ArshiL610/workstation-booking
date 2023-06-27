import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Routes, Route, useNavigate, useLocation, Navigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import HelpDesk from './components/HelpDesk';
import SeatSelection from './components/SeatSelection';
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
import Bookings from './components/Bookings';
import Level2 from './components/Level2';
import Cabins from './components/Cabins';
import DropDownList from './components/DropDownList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SessionTimeout from './components/SessionTimeout';


function App() {

  // const navigate = useNavigate();
  // const location = useLocation();

  //to track authentication
  const [isAuth, setIsAuth] = useState(false);
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


  useEffect(() => {
    const isLoggedIn = isAuth;
    console.log('isLoggedIn', isLoggedIn);
  })


  return (
    <>
      {/* <SessionTimeout timeoutInMinutes={0.2} onTimeout={handleSessionTimeout} /> */}
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <ToastContainer />
      
      <Routes>
        <Route path='/' element={<Home />} />
        {console.log('effect',isAuth)}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/emailverification/:email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetverify/:email" element={<ResetVerify />} />
        <Route path="/resetpassword/:email" element={<ResetPassword />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />

        {isAuth ? 
        (
          <>
            <Route path="/profilepage/:name" element={<ProfilePage />} />
            <Route path="/dropdownlist" element={<DropDownList />} />
            <Route path="/seatselection" element={<SeatSelection />} />
            <Route path="/level2" element={<Level2 />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/bookingdetails" element={<BookingDetails />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/about" element={<About />} />
          </>
        ):(null)
        }
      </Routes>
      



      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/emailverification/:email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetverify/:email" element={<ResetVerify />} />
        <Route path="/resetpassword/:email" element={<ResetPassword />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/profilepage/:name" element={<ProfilePage />} />
        <Route path="/dropdownlist" element={<DropDownList />} />
        <Route path="/seatselection" element={<SeatSelection />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes> */}
      
      
    
    </>
  );
}

export default App;
