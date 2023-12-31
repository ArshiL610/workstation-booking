import React, { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast} from 'react-toastify';
import Navbar from './Navbar';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';



const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  //for cursor loading
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // for empty fields
  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    if(!name && !email && !password){
        toast.warning('Please Enter Your Details');
    }
    else if (!name){
        toast.warning('Please Enter Your Name');
    }
    else if(!email){
        toast.warning('Please Enter Your Email');
    }
    else if(!password){
        toast.warning('Please Enter Your Password');
    }
    else{
      try{
        //send otp mail
        await axios.post(`http://localhost:8080/send-otp`, {email});
        setLoading(false);
        toast.success('OTP sent!');
        //save values to db
        saveCredsToDatabase(name, email, password);
        //save values to users table
        saveUserDetails(name, email);
        // Reset the form
        setName('');
        setEmail('');
        setPassword('');

        //navigation to email verification page with email as parameter
        navigate(`/emailverification/${email}`);
      }
      catch(error) {
        console.log(error);
        setLoading(false);
        toast.error('Sign Up Failed');
      }
    }
  };

  const saveCredsToDatabase = (name, email, password) => {
    //storing values in db
    axios.post(`http://localhost:8080/api/user_registration/signup`, {name, email, password})
    .then((response) =>{
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    
  }

  const saveUserDetails = (name, email) => {
    //storing values in users table
    axios.post(`http://localhost:8080/api/users/saveDetails`, {email, name})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  const handleBackwardNavigation = () => {
    navigate(`/login`);
  }


  return (
    <form autoComplete='off' onSubmit={handleSignUp}>
      <Navbar />
      <IconButton variant='contained' size='large' sx={{color:'black', mt:3, ml:3}} onClick={handleBackwardNavigation}>
          <ForwardRoundedIcon style={{fontSize:'40px', transform: 'rotate(-180deg)'}} />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <Typography sx={{mt:-8}} variant="h4" align="center" gutterBottom><br/>
          Sign Up
        </Typography>
        <TextField
          required
          label="Name"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
          margin="normal"
          disabled={loading}
        />
        <TextField
          required
          label="Email"
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
          margin="normal"
          disabled={loading}
        />

        <TextField
          required
          type='password'
          label="Password"
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
          disabled={loading}
        />

        <Button
          type="submit"
          variant="contained"
          color='inherit'
          fullWidth
          sx={{ marginTop: '16px' }}
          disabled={loading}
        >
        {loading ? <CircularProgress color='inherit' size={24} /> : 'Sign Up'}
        </Button>
        
      </Box>
      
    </form>
    
  );
};

export default SignUp;