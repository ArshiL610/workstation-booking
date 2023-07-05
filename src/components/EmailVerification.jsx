import React, {useState} from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, CircularProgress} from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import Navbar from './Navbar';


const EmailVerification = () => {

    const [otp, setOtp] = useState('');
    //for loading and redirecting to login page as well as cursor loading
    const [loading, setLoading] = useState(false);
    const {email} = useParams();
    const navigate = useNavigate();


    //verify otp
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post(`http://localhost:8080/verify-otp?otp=${otp}`)
        .then(response => {
            setTimeout(() => {
                setLoading(false);
                toast.success('OTP Verified!');
                setOtp('');
                navigate(`/login`);
                setTimeout(() => {
                    toast.success('Sign Up Successful!');
                }, 1000);
            }, 3000);
        })
        .catch(error => {
            setLoading(false);
            toast.error('Failed to verify OTP.');
        });
    };


    const handleResendOtp = async () => {
        setLoading(true);
        try{
            await axios.post(`http://localhost:8080/resend-otp`, {email})
            setLoading(false);
            toast.info('OTP resent!');
        }
        catch(error) {
            setLoading(false);
            console.error(error);
            toast.error('Failed to resend OTP');
        }
    }


    return (
        <form autoComplete='off' >
            <Navbar />
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '400px',
                margin: '0 auto',
                }}
            >
            <Typography variant="h4" align="center" gutterBottom><br/>
                <strong>Email Verification</strong>
            </Typography>
            
            <TextField
                type='text'
                label='Enter OTP'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
                sx={{mt:'80px'}}
                disabled={loading}
            />           

            <Button
                variant="contained"
                color="inherit"
                size="small"
                onClick={handleResendOtp}
                sx={{ mt: '20px' }}
                disabled={loading}
            >
                {loading ? <CircularProgress color='inherit'size={24} /> : 'Resend OTP'}    
            </Button>
       
            <Button
            // type="submit"
            variant="contained"
            color="inherit"
            size="large"
            onClick={handleVerifyOtp}
            sx={{ mt: '60px' }}
            disabled={loading || !otp}
            >
                {loading ? <CircularProgress color='inherit' size={24} /> : 'Verify'}
            </Button>

            </Box>
        </form>
    )
}

export default EmailVerification;