import './App.css';
import Login from './components/Login';
import { Routes, Route} from 'react-router-dom';
import React,{useEffect} from 'react';
import HelpDesk from './components/HelpDesk';
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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage';

import { useAuth } from './components/AuthContext';
import DisableBackwardNavigation from './components/DisableBackwardNavigation';



function App() {

  const {isLoggedIn} = useAuth();
  useEffect(()=> {
    console.log(isLoggedIn)
  })


  return (
    <>
      {/* <SessionTimeout timeoutInMinutes={0.2} onTimeout={handleSessionTimeout} /> */}
      <ToastContainer />
      <DisableBackwardNavigation />
      <Routes>
        
        {isLoggedIn ? (
          <>
            <Route path="/homepage/:name" element={<HomePage />} />
            <Route path="/profilepage/:name" element={<ProfilePage />} />
            <Route path="/bookingdetails" element={<BookingDetails />} />
          </>
        ) : (
          <>
            <Route path='/' element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/emailverification/:email" element={<EmailVerification />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/resetverify/:email" element={<ResetVerify />} />
            <Route path="/resetpassword/:email" element={<ResetPassword />} />
            <Route path="/helpdesk" element={<HelpDesk />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </>
        )}       
      </Routes>
    </>
  );

  
}

export default App;