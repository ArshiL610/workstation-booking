import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Switch, MenuItem, ListItemText, Menu, InputLabel, Select} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Navbar from './Navbar';


import './ProfilePage.css';
import dayjs from 'dayjs';

const ProfilePage = () => {

  const {name} = useParams();
  const navigate = useNavigate();

  const [purpose, setPurpose] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [fromTime, setFromTime] = useState('');
  const [toDate, setToDate] = useState(null);
  const [toTime, setToTime] = useState('');
  const [allDay, setAllDay] = useState(false);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState("");
  const [subLocation, setSubLocation] = useState('');
  const [isOnlineMeeting, setIsOnlineMeeting] = useState(false);
  const [repeatOption, setRepeatOption] = useState("Does Not Repeat");

  
  
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setSubLocation('');
  }

  const handleSubLocationChange = (e) => {
    setSubLocation(e.target.value);
  }

  const handleFromTimeChange = (e) => {
    const selectedTime = e.target.value;
    setFromTime(selectedTime);
  
    if (selectedTime && fromDate) {
      const [hours, minutes, period] = selectedTime.split(/:| /);
      let hoursToAdd = Number(hours);
      let minutesToAdd = Number(minutes) + 30;
  
      if (period === 'PM' && hours !== '12') {
        hoursToAdd += 12;
      }
  
      if (minutesToAdd >= 60) {
        hoursToAdd += Math.floor(minutesToAdd / 60);
        minutesToAdd = minutesToAdd % 60;
      }
  
      const nextTime = new Date(fromDate);
      nextTime.setHours(hoursToAdd, minutesToAdd);
  
      const formattedTime = nextTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
  
      setToTime(formattedTime);
    }
  };
  

  const handleToTimeChange = (e) => {
    setToTime(e.target.value);
  };
  

  //for time dropdown
  const generateTimeOptions = () => {
    const options = [];
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0); // Setting initial time to 12:00 AM
    while (startTime.getHours() !== 23 || startTime.getMinutes() !== 30) {
      const formattedTime = startTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      options.push({ label: formattedTime, value: formattedTime });

      startTime.setMinutes(startTime.getMinutes() + 30); // Incrementing time by 30 minutes
    }

    return options;
  };

  //to check if All Day switch is checked or not
  const isAllDay = () => {
    return allDay;
  };
  
  const handleRepeatOptionChange = (e) => {
    setRepeatOption(e.target.value);
  }

  const handleClick = () => {
    if(fromDate && toDate && purpose && description){
      const formattedDate1 = dayjs(fromDate).format('DD-MM-YYYY');
      const formattedDate2 = dayjs(toDate).format('DD-MM-YYYY');

      const meetingType = isOnlineMeeting ? 'Online Meeting' : 'Offline Meeting';

      navigate("/bookingdetails",{
        state : {
          fromDate: formattedDate1,
          fromTime: allDay ? 'All day' : fromTime,
          toDate: formattedDate2,
          toTime: allDay ? 'All day' : toTime,
          allDay,
          purpose,
          description,
          subLocation, 
          repeatOption, 
          meetingType,
          name
        }
      });
      toast.success('Scheduled!');
    }
    else{
      toast.warning('Please fill all the required details');
    }
  }
  


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} > 
    <Navbar name={name} />
      <div className="profile-page" style={{overFlowY:'auto', marginTop:'-35px'}} >
        <Box className="container">
          <Typography variant="h4" component="h1" align="center" sx={{ marginBottom: 3 }}>
            New Booking
          </Typography>

          <TextField 
            size='small'
            variant='filled' 
            color='info' 
            sx={{width:'100%', mb:'15px'}} 
            label="Title" 
            autoComplete='off' 
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required   
          />

          <div>
          <DatePicker
            label="From Date"
            value={fromDate}
            onChange={(date) => setFromDate(date)}
            slotProps={{ textField: { variant: 'outlined', size:'small' } }}
            required
          />
          <span>

          {!isAllDay() && (
          <TextField
            size='small'
            select
            label="From Time"
            value={fromTime}
            onChange={handleFromTimeChange}
            variant="outlined"
            required
            SelectProps={{
              native: true,
            }}
            sx={{ ml: 2 }}
            InputLabelProps={{ shrink: true }}
          >
            {generateTimeOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          )}

          <DatePicker
            sx={{ml:2}}
            label="To Date"
            value={toDate}
            onChange={(date) => setToDate(date)}
            slotProps={{ textField: { variant: 'outlined', size:'small' } }}
            required
          />

          {!isAllDay() && (
          <TextField
            select
            label="To Time"
            value={toTime}
            onChange={handleToTimeChange}
            variant="outlined"
            required
            size='small'
            SelectProps={{
              native: true,
            }}
            sx={{ ml: 2 }}
            InputLabelProps={{ shrink: true }}
          >
            {generateTimeOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          )}
          
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 101, mt:-5 }}>
            <Typography variant="body1" sx={{ mr:-0.64 }}>
              All day
            </Typography>
            <Switch
            sx={{ml:1}}
              checked={allDay}
              onChange={(e) => setAllDay(e.target.checked)}
              color="info"
            />
          </Box>

          </span>
          </div>
         

          <TextField
            required
            select
            label="Repeat Option"
            value={repeatOption}
            onChange={handleRepeatOptionChange}
            variant="standard"
            size='small'
            color="info"
            sx={{ width: '40%', marginRight: 1, mt:2 }}
            // InputLabelProps={{ shrink: true }}
          >
            <MenuItem value="Does Not Repeat">Does not repeat</MenuItem>
            <MenuItem value="Every Weekday">Every Weekday(Mon - Fri)</MenuItem>
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </TextField>
          
          <div>
          <InputLabel size='normal' sx={{mt:1}} id="location-label">Location*</InputLabel>
            <Select
              required
              labelId="location-label"
              id="location"
              value={location}
              onChange={handleLocationChange}
              variant="standard"
              size='small'
              color='info'
              IconComponent={ArrowRightIcon}
              sx={{ width: '25%', marginRight: 1 }}
            >
              <MenuItem value="level1">Level 1</MenuItem >        
              <MenuItem value="level2">Level 2</MenuItem>
              <MenuItem value="cabins">Cabins</MenuItem>
            </Select>
            
            {location === 'level1' && (
              <Select
                label="Sub Location"
                value={subLocation}
                onChange={handleSubLocationChange}
                variant="standard"
                size="small"
                sx={{ width: '30%', marginLeft: -1}}
                // InputLabelProps={{ shrink: true }}
              >
                <MenuItem value="Level 1 - Workstation 1 (Seats 5)" sx={{ml:2}}>Level 1 - Workstation 1 (Seats 5)</MenuItem>
                <MenuItem value="Level 1 - Workstation 2 (Seats 4)" sx={{ml:2}}>Level 1 - Workstation 2 (Seats 4)</MenuItem>
                <MenuItem value="Level 1 - Workstation 3 (Seats 7)" sx={{ml:2}}>Level 1 - Workstation 3 (Seats 6)</MenuItem>
                <MenuItem value="Level 1 - Workstation 4 (Seats 8)" sx={{ml:2}}>Level 1 - Workstation 4 (Seats 5)</MenuItem>
                <MenuItem value="Level 1 - Workstation 5 (Seats 8)" sx={{ml:2}}>Level 1 - Workstation 5 (Seats 4)</MenuItem>
                <MenuItem value="Level 1 - Workstation 6 (Seats 5)" sx={{ml:2}}>Level 1 - Workstation 6 (Seats 6)</MenuItem>
                <MenuItem value="Level 1 - Workstation 7 (Seats 10)" sx={{ml:2}}>Level 1 - Workstation 7 (Seats 6)</MenuItem>
              </Select>
            )}
            {location === 'level2' && (
              <Select
                label="Sub Location"
                value={subLocation}
                onChange={handleSubLocationChange}
                variant="standard"
                size="small"
                sx={{ width: '30%', marginLeft: -1}}
                // InputLabelProps={{ shrink: true }}
              >
                <MenuItem value="Level 2 - Boardroom 1 (Seats 10)" sx={{ml:2}}>Level 2 - Boardroom 1 (Seats 10)</MenuItem>
                <MenuItem value="Level 2 - Boardroom 2 (Seats 6)" sx={{ml:2}}>Level 2 - Boardroom 2 (Seats 6)</MenuItem>
                <MenuItem value="Level 2 - Boardroom 3 (Seats 5)" sx={{ml:2}}>Level 2 - Boardroom 3 (Seats 5)</MenuItem>
                <MenuItem value="Level 2 - Boardroom 4 (Seats 10)" sx={{ml:2}}>Level 2 - Boardroom 4 (Seats 10)</MenuItem>
                <MenuItem value="Level 2 - Boardroom 5 (Seats 8)" sx={{ml:2}}>Level 2 - Boardroom 5 (Seats 8)</MenuItem>
              </Select>
            )}
            {location === 'cabins' && (
              <Select
                label="Sub Location"
                value={subLocation}
                onChange={handleSubLocationChange}
                variant="standard"
                size="small"
                sx={{ width: '25%', marginLeft: -1 }}
                // InputLabelProps={{ shrink: true }}
              >
                <MenuItem value="Cabins - Seat 1" sx={{ml:2}}>Cabins - Seat 1</MenuItem>
                <MenuItem value="Cabins - Seat 2" sx={{ml:2}}>Cabins - Seat 2</MenuItem>
                <MenuItem value="Cabins - Seat 3" sx={{ml:2}}>Cabins - Seat 3</MenuItem>
                <MenuItem value="Cabins - Seat 4" sx={{ml:2}}>Cabins - Seat 4</MenuItem>
                <MenuItem value="Cabins - Seat 5" sx={{ml:2}}>Cabins - Seat 5</MenuItem>
                <MenuItem value="Cabins - Seat 6" sx={{ml:2}}>Cabins - Seat 6</MenuItem>
                <MenuItem value="Cabins - Seat 7" sx={{ml:2}}>Cabins - Seat 7</MenuItem>
                <MenuItem value="Cabins - Seat 8" sx={{ml:2}}>Cabins - Seat 8</MenuItem>
                <MenuItem value="Cabins - Seat 9" sx={{ml:2}}>Cabins - Seat 9</MenuItem>
                <MenuItem value="Cabins - Seat 10" sx={{ml:2}}>Cabins - Seat 10</MenuItem>
                <MenuItem value="Cabins - Seat 11" sx={{ml:2}}>Cabins - Seat 11</MenuItem>
              </Select>
            )}

            <Box sx={{display:'flex',alignItems:'center', ml:65.8, mt:-3.75, width:'21%', height:'30px', borderRadius:'3px'}}>
            <Typography variant="body1" alignItems='center' sx={{ ml:3 }}>
              Online Meeting
            </Typography>
            <Switch
              checked={isOnlineMeeting}
              onChange={(e) => setIsOnlineMeeting(e.target.checked)}
              color="info"
            /></Box>
            </div>
            
          

          <TextField
            sx={{mt:2}}
            className="text-field"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            multiline
            rows={4}
          />

          <Button variant="contained" color="success" onClick={handleClick} sx={{ mt: 2, ml:50 }}>
            Schedule
          </Button>
        </Box>
      </div>
    </LocalizationProvider>
  );
};

export default ProfilePage;