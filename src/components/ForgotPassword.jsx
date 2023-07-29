import { Box, Button, TextField, Typography, IconButton, CircularProgress} from '@mui/material';
import axios from 'axios';
import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import Navbar from './Navbar';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    //for otp
    // const [otp, setOtp] = useState('');

    //for loading and redirecting to login page
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = async (event) => {
        event.preventDefault();
        
        setLoading(true);

        await axios.post(`http://localhost:8080/send-otp`, {email})
        .then(response => {
            setLoading(false);
            toast.success('OTP sent');
            setEmail('');
            navigate(`/resetverify/${email}`);
        })
        .catch(error => {
            setLoading(false);
            toast.error('Failed to send OTP');
        })
    };

    const handleBackwardNavigation = () => {
        navigate(`/login`);
      }

    return(
         
        <form autoComplete='off' onSubmit={handleClick}>
            <Navbar />
            <IconButton variant='contained' size='large' sx={{color:'black', mt:3, ml:4}} onClick={handleBackwardNavigation}>
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
                <Typography variant="h4" align="center" gutterBottom sx={{mt:-9}}>
                    <br/>
                    <strong>Password Reset</strong>
                </Typography>
                <TextField
                    sx={{marginTop:10}}
                    required
                    type='email'
                    label='Email'
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin='normal'
                    InputLabelProps={{
                        shrink: true
                    }}
                    disabled={loading}
                />
                
                {/* Button to send otp */}
                <Button
                    size='large'
                    type="submit"
                    variant="contained"
                    color='inherit'
                    sx={{ marginTop: '50px', width:150 }}
                    disabled={loading}
                    >
                    {loading ? <CircularProgress color='inherit' size={24}/> : 'Send OTP'} 
                </Button>

            </Box>
        </form>
        
    )

}

export default ForgotPassword;