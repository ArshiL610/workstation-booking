import React, {useState} from 'react'
import { TextField, Button, CircularProgress} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { toast} from 'react-toastify';
import Navbar from './Navbar';
import { useAuth } from './AuthContext';


const Login = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //for cursor loading
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // to track login status
    const {setIsLoggedIn} = useAuth();

    


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email && !password) {
          toast.warning('Please enter your details');
        } else if (!email) {
          toast.warning('Please enter your email');
        } else if (!password) {
          toast.warning('Please enter your password');
        } else {
            setIsLoggedIn(true);
            saveCredentialsToDatabase(email, password);
            // console.log(`Email: ${email}\nPassword: ${password}`);     
        }
    };

    const saveCredentialsToDatabase = async (email, password) => {
      setLoading(true);
      await axios.post('http://localhost:8080/api/user_registration/login', { email, password })
          .then((response) => {
            setTimeout(() => {
              setLoading(false);
              toast.success('Login Successful');
              navigate(`/homepage/${response.data.name}`);
            }, 1000);
            
          })
          .catch((error) => {
            setLoading(false);
            // console.log(error);
            toast.error('Incorrect details');
          });
          
          setEmail('');
          setPassword('');
    }

    return (
        <React.Fragment>
          <Navbar />
            <div style={{marginLeft:"35%", marginTop:"6%"}}>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <h2>Login Here</h2>
                <TextField 
                    label='Email'
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 4, width: 400}}
                    value={email}
                    disabled={loading}
                /><br/>
                <TextField
                    label='Password'
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant='outlined'
                    color='secondary'
                    type='password'
                    value={password}
                    sx={{mb: 4, width: 400}}
                    disabled={loading}
                />
                <br/>
                <Button variant='contained' color='inherit' type="submit" disabled={loading || !email || !password}>
                    {loading ? <CircularProgress color='inherit' size={24} /> : 'Login'}
                </Button>

            </form>
            <br/>
            <small>Forgot Password? <Link to={`/forgot-password`}>Reset</Link></small>
            <br/>
            <small>Don't have an account? <Link to="/signup">Sign Up</Link></small>
            <br />
            <small>Need help logging in? <Link to="/helpdesk">HelpDesk</Link></small>
            </div>
        </React.Fragment>
    )

}


export default Login;

