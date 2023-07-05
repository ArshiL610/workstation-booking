import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast} from 'react-toastify';
import Navbar from './Navbar';


const ResetVerify = () => {

    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const {email} = useParams();
    const navigate = useNavigate(); 

    // to verify otp
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
    
        setLoading(true);

        await axios.post(`http://localhost:8080/verify-otp?otp=${otp}`)
        .then(response => {
            setLoading(false);
            toast.success('OTP verified!');
            setOtp('');
            navigate(`/resetpassword/${email}`);
        })
        .catch(error => {
            setLoading(false);
            toast.error('Failed to verify OTP.');
            setOtp('');
        })
    };

    //to resend otp
    const handleResendOtp = async () => {
        
        setLoading(true);
        await axios.post(`http://localhost:8080/resend-otp`, {email})
        .then(response => {
            setLoading(false);
            toast.success('OTP resent!');
        })
        .catch(error => {
            setLoading(false);
            console.error(error);
            toast.error('Failed to resend OTP.');
        })
    }


    return(
        <form autoComplete='off'>
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
                    <strong>OTP Verification</strong>
                </Typography>
                
                {/* Input to enter otp */}
                
                <TextField
                type='text'
                label='Enter OTP'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
                sx={{mt:'80px'}}
                disabled={loading}
                />

                {/* Button to resend otp */}

                <Button
                variant="contained"
                color="inherit"
                size="small"
                onClick={handleResendOtp}
                sx={{ mt: '20px' }}
                disabled={loading}
                >
                    {loading ? <CircularProgress color='inherit' size={24} /> : 'Resend OTP'} 
                </Button>

                {/* Button to verify otp */}

                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={handleVerifyOtp}
                    disabled={!otp || loading}
                    sx={{ mt: '60px' }}
                    >
                    {loading ? <CircularProgress color='inherit' size={24} /> : 'Verify'}
                </Button>
            </Box>
        </form>
    )
};

export default ResetVerify;