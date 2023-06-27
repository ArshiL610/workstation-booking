import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';

const ResetPassword = () => {

    const {email} = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (password === confirmPassword) {
            const request = {
                email: email,
                password: password
            };

            setLoading(true);
            axios.put(`http://localhost:8080/api/user_registration/update-password`, request)
            .then(response => {
                setLoading(false);
                console.log(response.data);
                toast.success('Password Updated')
                setPassword('');
                setConfirmPassword('');
                navigate(`/login`);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                toast.error('Falied to reset')
                setPassword('');
                setConfirmPassword('');
            })
            
            }
            else{
                setLoading(false);
                toast.warning('Enter the correct password !!')
                console.log("Passwords do not match");
                
            }
        };

    return(
        <form autoComplete='off'>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '400px',
                    margin: '0 auto',
                }}
            >
                <Typography variant='h4' align='center' gutterBottom><br/>
                    <strong>Reset Your Password</strong>
                </Typography>
                <TextField
                    sx={{marginTop:6}}
                    required
                    type='password'
                    label='Password'
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin='normal'
                    InputLabelProps={{
                        shrink: true,
                      }}
                    disabled={loading}
                />
                <TextField
                    sx={{marginTop:5}}
                    required
                    type='password'
                    label='Confirm Password'
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    margin='normal'
                    InputLabelProps={{
                        shrink: true,
                      }}
                    disabled={loading}
                />
                <Button 
                    sx={{marginTop:5}}
                    variant='contained'
                    color='info'
                    disabled={!confirmPassword || loading}
                    onClick={handleClick}
                >
                {loading ? <CircularProgress color='inherit' size={24} /> : 'Reset'}
                </Button>
                
            </Box>
        </form>
    )
};

export default ResetPassword;