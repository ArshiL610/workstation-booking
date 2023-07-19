import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Paper, TextField, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from './Navbar';

const BookingDetails = () => {   //have to include the recipients in the code for the email triggering
  const location = useLocation();
  const navigate = useNavigate();

  const {
    fromDate,
    fromTime,
    toDate,
    toTime,
    purpose,
    description,
    subLocation,
    repeatOption,
    allDay,
    meetingType,
    name
  } = location.state;

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // const sendEmail = () => {
  //   // Implementing logic to send the email
  //   const bookingDetails = {
  //       email : email,
  //       purpose : purpose,
  //       fromDate : fromDate,
  //       toDate : toDate,
  //       fromTime : allDay ? "" : fromTime,
  //       toTime : allDay ? "" : toTime,
  //       subLocation : subLocation,
  //       meetingType : meetingType,
  //       repeatOption : repeatOption,
  //       description : description,
  //       allDay : allDay
  //   }
    
  //   setLoading(true);

  //   axios.post(`http://localhost:8080/sendmail`, bookingDetails)
  //   .then(response => {
  //       setLoading(false)
  //       toast.success('Email has been sent');
  //       setEmail('')
  //   })
  //   .catch(error => {
  //       setLoading(false);
  //       toast.error('Error sending email', error);
  //       setEmail('');
  //   })
  // };

  return (
    <div>
      <Navbar name={name}/>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        margin:'0 auto',
        maxWidth: 'auto',
        height: '100vh'
      }}
    >
      
      <Paper
        elevation={6}
        sx={{
          padding: '2rem',
          maxWidth: '500px',
          width: '800px',
          height:'320px',
          mt:-6
        }}
      >
        <Typography variant="h4" align="center" sx={{ mt:-2, mb:2 }}>
          <b>Booking Details</b>
        </Typography>
        <Grid container spacing={2} sx={{ ml:6, mt:3}}>
          <Grid item xs={4}>
            <Typography variant="subtitle1"><b>Purpose : </b></Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ml:-4}}>{purpose}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{  ml:6 }}>
          <Grid item xs={4}>
            <Typography variant="subtitle1"><b>From Date : </b></Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ml:-4}}>{fromDate}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{  ml:6 }}>
          <Grid item xs={4}>
            <Typography variant="subtitle1"><b>To Date : </b></Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ml:-4}}>{toDate}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{  ml:6 }}>
          <Grid item xs={4}>
            <Typography variant="subtitle1"><b>Time : </b></Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ml:-4}}>
              {allDay ? 'All Day' : `${fromTime} - ${toTime}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{  ml:6 }}>
          <Grid item xs={4}>
            <Typography variant="subtitle1"><b>Location : </b></Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ml:-4}}>{subLocation}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ ml:6 }}>
          <Grid item xs={4}>
            <Typography variant="subtitle1"><b>Repeat : </b></Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ml:-4}}>{repeatOption}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{  ml:6 }}>
          <Grid item xs={4}>
            <Typography variant="subtitle1"><b>Meeting Mode : </b></Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ml:-4}}>{meetingType}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{  ml:6 }}>
          <Grid item xs={4}>
            <Typography variant="subtitle1"><b>Description : </b></Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" sx={{ml:-4}}>{description}</Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'row' }}>
                 <TextField 
                    autoComplete='off' variant='outlined' 
                     label='Enter email' value={email} onChange={e => setEmail(e.target.value)} 
                     type="text" color='info' required size='small' 
                     sx={{ml:40,mr:3, mt:2.5, width:'23rem'}}
                     disabled={loading}
                 />
                 <Button 
                     variant='contained' size="medium" 
                     color='info' onClick={sendEmail} 
                     disabled={loading}
                     sx={{mr:40,mt:2.5, borderRadius:'30px', color:'white'}}>
                     {loading ? <CircularProgress color='inherit' size={24}/> : 'Send Email'}
                 </Button>
             </div> */}
    </Box>
    </div>
  );
};

export default BookingDetails;
