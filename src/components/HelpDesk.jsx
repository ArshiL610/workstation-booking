import React, {useState} from 'react';
import { TextField, IconButton, Button, Stack, Snackbar } from '@mui/material';
import { Link } from "react-router-dom"
import Alert from '@mui/material/Alert';
import Navbar from './Navbar';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
import { useNavigate } from 'react-router-dom';

 
const HelpDesk = () => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [issue, setIssue] = useState('')
    const [empid, setEmpId] = useState('')

    const [open, setOpen] = useState(false);
    const [alertmsg, setAlertMsg] = useState('');
    const [severity, setSeverity] = useState('warning');

    const navigate = useNavigate();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!firstName) {
            setOpen(true);
            setAlertMsg('Please Enter Your Firstname');
            setSeverity('warning');
        }
        else if(!lastName) {
            setOpen(true);
            setAlertMsg('Please Enter Your Lastname');
            setSeverity('warning');
        }
        else if(!email) {
            setOpen(true);
            setAlertMsg('Please Enter Your Email Id');
            setSeverity('warning');
        }
        else if(!empid){
            setOpen(true);
            setAlertMsg('Please Enter Your Employee Id');
            setSeverity('warning');
        }
        else if (!issue) {
            setOpen(true);
            setAlertMsg('Your issue is important to us!');
            setSeverity('warning');
        }
        else {
            setOpen(true);
            setAlertMsg('Our IT support will get back to you soon');
            setSeverity('success');
            console.log(`Firstname : ${firstName}\nLastname : ${lastName}\nEmail : ${email}\nEmployee Id : ${empid}\nIssue : ${issue}`)
            //reset the form
            setFirstName('');
            setLastName('');
            setEmail('');
            setEmpId('');
            setIssue('');
        } 
    }
 
    //for the alert msgs
    const handleClose = () => {
        setOpen(false);
    };


    const handleBackwardNavigation = () => {
        navigate(`/login`);
      }


    return (
        <React.Fragment>
            <Navbar />
            <IconButton variant='contained' size='large' sx={{color:'black', mt:3, ml:3}} onClick={handleBackwardNavigation}>
                <ForwardRoundedIcon style={{fontSize:'40px', transform: 'rotate(-180deg)'}} />
            </IconButton>
            <h1 style={{marginLeft:"40%", marginTop:-67}}>Enter Your Details</h1>
            <form onSubmit={handleSubmit} action={<Link to="/login" />} style={{marginLeft:'40px'}}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        sx={{ml:23,width: 400}}
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        sx={{width: 400}}
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                    sx={{ml: 50, mb: 4, width: 400}}
                /><br/>
                <TextField
                    type='text'
                    variant='outlined'
                    color='secondary'
                    label='Employee Id'
                    onChange={e => setEmpId(e.target.value)}
                    value={empid}
                    required
                    sx={{ml:50, mb: 4, width:400}}
                /><br/>
                <TextField
                    type='text'
                    variant='outlined'
                    color='secondary'
                    label='What issue are you facing?'
                    onChange={e => setIssue(e.target.value)}
                    value={issue}
                    required
                    // InputLabelProps={{ shrink: true }}
                    sx={{ml:40, mb: 4, width: 550}}
                />
                <Button sx={{ml:64, mb: 2, width: 150}} variant="outlined" color='success' type="submit" onClick={handleSubmit}>
                    Request Help
                </Button>
            </form>
            <small style={{marginLeft:"43%"}}>Want to login again? <Link to="/login">Login</Link></small>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: 275 }}>
                    {alertmsg}
                </Alert>
            </Snackbar>
     
        </React.Fragment>
    )
}
 
export default HelpDesk;