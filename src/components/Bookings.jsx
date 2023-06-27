import React from 'react'
import {  Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Bookings = () => {

    const Location = useLocation();

    const { date1, date2, time1, time2, seat, purpose, description, location } = Location.state;


    return(
        <Box sx={{display:'flex',background:'linear-gradient(to left top, #005aa7, #fffde4)', minHeight:'100vh', overflowY:'auto'}} >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '100vw' }}>
                <Card  elevation={10} variant='elevation' sx={{width:'350px', mt:'50px', ml:'20px', backgroundColor:'black', borderRadius:'30px', height:'350px'}}>
                <CardActionArea color='inherit' >
                <CardContent>
                    <Typography align="center" color='red' sx={{fontSize:'20px', backgroundColor:'white', borderRadius:'20px'}} gutterBottom>
                        <b>1</b>
                    </Typography>
                </CardContent>
                <CardContent sx={{mt:-1}}>
                    <Typography color="white" align='left'>
                        <b><i>Purpose :</i></b><span style={{marginLeft:'2rem'}}>{purpose}</span><br/>
                        <b><i>From :</i></b><span style={{marginLeft:'3.5rem'}}>{date1}</span><br/>
                        <b><i>To :</i></b> <span style={{marginLeft:'4.5rem'}}>{date2}</span><br/>
                        <b><i>From :</i></b> <span style={{marginLeft:'3rem'}}>{time1}</span><br/>
                        <b><i>To :</i></b> <span style={{marginLeft:'4.5rem'}}>{time2}</span><br/>
                        <b><i>Location :</i></b> <span style={{marginLeft:'1.5rem'}}>{location}</span><br/>
                        <b><i>Seat :</i></b> <span style={{marginLeft:'3.5rem'}}>{seat}</span><br/>
                        <b><i>Description :</i></b> <span style={{marginLeft:'0rem'}}>{description}</span><br/>
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    </Box>
    );
};


export default Bookings;