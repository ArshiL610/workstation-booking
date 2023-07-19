import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Switch, MenuItem, InputLabel, Select, Chip} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Navbar from './Navbar';
import axios from 'axios';



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
  const [subLocation, setSubLocation] = useState("");
  const [isOnlineMeeting, setIsOnlineMeeting] = useState(false);
  const [repeatOption, setRepeatOption] = useState("Does Not Repeat");
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedAttendees, setSelectedAttendees] = useState([]);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');
  const [filteredUserEmails, setFilteredUserEmails] = useState([]);
  const [selectedAttendeesEmails, setSelectedAttendeesEmails] = useState([]);

  useEffect( () => {
    const fetchRooms = async () => {
      try{
        const response = await axios.get(`http://localhost:8080/api/rooms/get`);
        setRooms(response.data);
      }
      catch(error){
        console.error('Error fetching data..', error);
      }
    }

    const fetchUsers = async () => {
      try{
        const response = await axios.get(`http://localhost:8080/api/users/get`);
        const filteredUsers = response.data.filter((user) => user.email !== loggedInUserEmail);
        setUsers(filteredUsers);

        // const filteredUserEmails = filteredUsers.map((user) => user.email);
        const filteredUserEmails = filteredUsers.map((user) => ({
          name: user.name,
          email: user.email,
        }));
        setFilteredUserEmails(filteredUserEmails);
        // console.log(filteredUserEmails);
      }
      catch(error){
        console.error('Error fetching user data..', error);
      }
    }
    //current loggedIn User Email fetching
    const fetchLoggedInUser = async () => {
      try{
        const response = await axios.get(`http://localhost:8080/api/users/get/${name}`);
        setLoggedInUserEmail(response.data.email);
        // console.log(loggedInUserEmail);
      }
      catch(error){
        console.error("Error fetching logged-in user email..", error);
      }
    }

    fetchRooms();
    fetchUsers();
    fetchLoggedInUser();

    console.log(selectedAttendees)
    // console.log(selectedAttendeesEmails)
  },[fromDate, toDate, fromTime, toTime, name, loggedInUserEmail, selectedAttendees]);

  const getRoomStatus = (roomName) => {
    const room = rooms.find((room) => room.roomname === roomName);

    if(!room?.roomname){
      return <b style={{color:'green'}}>Free</b>
      // return 'Free'
    }

    const existingFromDate = dayjs(room.fromDate).format('DD/MM/YYYY');
    const existingToDate = dayjs(room.toDate).format('DD/MM/YYYY');
    const existingFromTime = dayjs(room.fromTime).format('h:mm a');
    const existingToTime = dayjs(room.toTime).format('h:mm a');

    const requestedFromDate = dayjs(fromDate).format('DD/MM/YYYY');
    const requestedToDate = dayjs(toDate).format('DD/MM/YYYY');

    if(allDay) {

      if (requestedFromDate >= existingFromDate && requestedToDate <= existingToDate){
        return <b style={{color:'red'}}>Busy</b>
      }
      else{
        return <b style={{color:'green'}}>Free</b>
      }
    }

    else if(existingFromDate && existingFromTime && existingToDate && existingToTime){ 
      //logic issue resolved
      const isOverLap =
          (
            (requestedFromDate <= existingToDate) && (requestedToDate >= existingFromDate)
              &&
            (fromTime < room.toTime) && (toTime > room.fromTime)
          )          

      if(isOverLap){
        console.log('we are on track..');
        return <b style={{color:'red'}}>Busy</b>
      }
    }

    
    return <b style={{color:'green'}}>Free</b>
  };
  
  //to handle attendee selection
  const handleAttendeeSelection = (e) => {
    const selectedNames = e.target.value;
    setSelectedAttendees(selectedNames);

    const selectedEmails = selectedNames.map((name) => {
      const user = filteredUserEmails.find((user) => user.name === name);
      return user ? user.email : "";
    });
    setSelectedAttendeesEmails(selectedEmails);
    

  }

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
      const [hours, minutes, period] = selectedTime.split(/[: ]/);
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
    else {
      setToTime(null); // Set to null when either selectedTime or fromDate is null
    }
  };
  

  const handleToTimeChange = (e) => {
    setToTime(e.target.value);
  };
  

  const generateTimeOptions = () => {
    const options = [];
    const startTime = new Date();
    startTime.setSeconds(0, 0);    // Setting initial time-interval to the nearest minute
    
    if (dayjs(startTime).isSame(fromDate, 'day')) {
      // Adjust the start time to the nearest time interval
      const currentMinutes = startTime.getMinutes();
      const roundedMinutes = Math.ceil(currentMinutes / 30) * 30;
      startTime.setMinutes(roundedMinutes);
    } else {
      startTime.setHours(0, 0, 0, 0); // Setting initial time to 12:00 AM as default time
    }
    
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

  const handleClick = async () => {

    if(fromDate && toDate && purpose && description){
      const formattedDate1 = dayjs(fromDate).format('DD/MM/YYYY');
      const formattedDate2 = dayjs(toDate).format('DD/MM/YYYY');

      const meetingType = isOnlineMeeting ? 'Online Meeting' : 'Offline Meeting';
      const bookingData = {
        roomname: subLocation,
        fromDate : formattedDate1,
        toDate : formattedDate2,
        fromTime : allDay ? null : fromTime,
        toTime : allDay ? null : toTime,
      };

      const bookingDetails ={
        recipients : [loggedInUserEmail, ...selectedAttendeesEmails],
        purpose : purpose,
        fromDate : formattedDate1,  //changed
        toDate : formattedDate2,    //changed
        fromTime : allDay ? "" : fromTime,
        toTime : allDay ? "" : toTime,
        subLocation : subLocation,
        meetingType : meetingType,
        repeatOption : repeatOption,
        description : description,
        allDay : allDay
      }

      try{
        //post req
        await axios.post(`http://localhost:8080/api/rooms/post`, bookingData);
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
        toast.success('Booked!');
        console.log(`${formattedDate1} ${formattedDate2}`)  //to check the format in which it is going to the backend
        console.log(loggedInUserEmail);  //checking purpose
        console.log(selectedAttendeesEmails);   //checking purpose

        // to send booking details via email to multiple recipients
        await axios.post(`http://localhost:8080/sendmail`, bookingDetails)
        .then(response => {
          toast.success('Booking Details sent via email');
        })
        .catch(error => {
          toast.error('Error sending email', error);
        })


      }
      catch(error){
        console.error('Error booking the room:', error);
        toast.error('Failed to book the room. Please try again.');
      }
    }
    else{
      toast.warning('Please fill all the required details');
    }
  };

  


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
            slotProps={{ textField: { variant: 'outlined', size:'small', color:'info' } }}
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
          <span>          
            {/* for required attendees feature */}
            <TextField
                select
                label="Required Attendees"
                value={selectedAttendees}
                onChange={handleAttendeeSelection}
                sx={{width:'55.6%', mt:'22px', ml:'30px'}}
                SelectProps={{
                  multiple: true,
                  renderValue: (selected) => (
                    
                      <Box  maxHeight='80px' sx={{ display: 'flex', flexWrap: 'wrap' }}>
                          {selected.map((value) => (
                            <Chip key={value} size='small' label={value} style={{ marginRight: '5px',mt:'5px', height:'20px'}} />
                          ))}
                      </Box>
                    

                  ),
                }}
                variant="outlined"
                size='small'
              >
                {users.map((user) => (
                  <MenuItem key={user.email} value={user.name}>
                    {user.name}
                  </MenuItem>
                ))}
          </TextField>
        </span>
          
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
                sx={{ width: '35%', marginLeft: -1}}
                // InputLabelProps={{ shrink: true }}
              >
                
                <MenuItem value="Level 1 - Workstation 1 (Seats 5)" >
                  <b style={{marginRight:4}}>
                    {getRoomStatus("Level 1 - Workstation 1 (Seats 5)")}
                  </b>
                  Level 1 - Workstation 1 (Seats 5)
                </MenuItem>
                <MenuItem value="Level 1 - Workstation 2 (Seats 4)" >
                  <b style={{marginRight:4}}>
                    {getRoomStatus("Level 1 - Workstation 2 (Seats 4)")}
                  </b>
                  Level 1 - Workstation 2 (Seats 4)
                </MenuItem>
                <MenuItem value="Level 1 - Workstation 3 (Seats 7)" >
                <b style={{marginRight:4}}>
                  {getRoomStatus("Level 1 - Workstation 3 (Seats 6)")} 
                </b>
                  Level 1 - Workstation 3 (Seats 6)
                </MenuItem>
                <MenuItem value="Level 1 - Workstation 4 (Seats 8)" >
                <b style={{marginRight:4}}>
                  {getRoomStatus("Level 1 - Workstation 4 (Seats 5)")}
                </b>
                  Level 1 - Workstation 4 (Seats 5)
                </MenuItem>
                <MenuItem value="Level 1 - Workstation 5 (Seats 8)">
                <b style={{marginRight:4}}>
                  {getRoomStatus("Level 1 - Workstation 5 (Seats 4)")}
                </b>
                  Level 1 - Workstation 5 (Seats 4)
                </MenuItem>
                <MenuItem value="Level 1 - Workstation 6 (Seats 5)">
                <b style={{ marginRight:4}}>
                  {getRoomStatus("Level 1 - Workstation 6 (Seats 6)")}
                </b>
                  Level 1 - Workstation 6 (Seats 6)
                </MenuItem>
                <MenuItem value="Level 1 - Workstation 7 (Seats 10)">
                <b style={{marginRight:4}}>
                  {getRoomStatus("Level 1 - Workstation 7 (Seats 6)")}
                </b>
                  Level 1 - Workstation 7 (Seats 6)
                </MenuItem>
              </Select>
            )}
            {location === 'level2' && (
              <Select
                label="Sub Location"
                value={subLocation}
                onChange={handleSubLocationChange}
                variant="standard"
                size="small"
                sx={{ width: '35%', marginLeft: -1}}
                // InputLabelProps={{ shrink: true }}
              >
                <MenuItem value="Level 2 - Boardroom 1 (Seats 10)">
                <b style={{marginRight:4}}>
                  {getRoomStatus("Level 2 - Boardroom 1 (Seats 10)")}
                </b>
                  Level 2 - Boardroom 1 (Seats 10)
                </MenuItem>
                <MenuItem value="Level 2 - Boardroom 2 (Seats 6)" >
                <b style={{marginRight:4}}>
                  {getRoomStatus("Level 2 - Boardroom 2 (Seats 6)")}
                </b>
                  Level 2 - Boardroom 2 (Seats 6)
                </MenuItem>
                <MenuItem value="Level 2 - Boardroom 3 (Seats 5)" >
                <b style={{ marginRight:4}}>
                  {getRoomStatus("Level 2 - Boardroom 3 (Seats 5)")}
                </b>
                  Level 2 - Boardroom 3 (Seats 5)
                </MenuItem> 
                <MenuItem value="Level 2 - Boardroom 4 (Seats 10)">
                <b style={{marginRight:4}}>
                  {getRoomStatus("Level 2 - Boardroom 4 (Seats 10)")}
                </b>
                  Level 2 - Boardroom 4 (Seats 10)
                </MenuItem>
                <MenuItem value="Level 2 - Boardroom 5 (Seats 8)">
                <b style={{marginRight:4}}>
                  {getRoomStatus("Level 2 - Boardroom 5 (Seats 8)")}
                </b>
                  Level 2 - Boardroom 5 (Seats 8)
                </MenuItem>
              </Select>
            )}
            {location === 'cabins' && (
              <Select
                label="Sub Location"
                value={subLocation}
                onChange={handleSubLocationChange}
                variant="standard"
                size="small"
                sx={{ width: '30%', marginLeft: -1 }}
                // InputLabelProps={{ shrink: true }}
              >
                <MenuItem value="Cabins - Seat 1" sx={{ml:1}}>
                <b style={{marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 1")}
                </b>
                  Cabins - Seat 1
                </MenuItem>
                <MenuItem value="Cabins - Seat 2" sx={{ml:1}}>
                <b style={{marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 2")} 
                </b>
                  Cabins - Seat 2
                </MenuItem>
                <MenuItem value="Cabins - Seat 3" sx={{ml:1}}>
                <b style={{ marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 3")}
                </b>
                  Cabins - Seat 3
                </MenuItem>
                <MenuItem value="Cabins - Seat 4" sx={{ml:1}}>
                <b style={{ marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 4")}
                </b>
                  Cabins - Seat 4
                </MenuItem>
                <MenuItem value="Cabins - Seat 5" sx={{ml:1}}>
                  <b style={{marginRight:10}}>
                    {getRoomStatus("Cabins - Seat 5")}
                  </b>
                  Cabins - Seat 5
                </MenuItem>
                <MenuItem value="Cabins - Seat 6" sx={{ml:1}}>
                <b style={{ marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 6")}
                </b>
                  Cabins - Seat 6
                </MenuItem>
                <MenuItem value="Cabins - Seat 7" sx={{ml:1}}>
                <b style={{marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 7")}
                </b>
                  Cabins - Seat 7
                </MenuItem>
                <MenuItem value="Cabins - Seat 8" sx={{ml:1}}>
                <b style={{ marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 8")} 
                </b>
                  Cabins - Seat 8
                </MenuItem>
                <MenuItem value="Cabins - Seat 9" sx={{ml:1}}>
                <b style={{marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 9")} 
                </b>
                  Cabins - Seat 9
                </MenuItem>
                <MenuItem value="Cabins - Seat 10" sx={{ml:1}}>
                <b style={{marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 10")}
                </b>
                  Cabins - Seat 10
                </MenuItem>
                <MenuItem value="Cabins - Seat 11" sx={{ml:1}}>
                <b style={{marginRight:10}}>
                  {getRoomStatus("Cabins - Seat 11")}
                </b>
                  Cabins - Seat 11
                </MenuItem>
              </Select>
            )}

            <Box sx={{display:'flex',alignItems:'center', ml:69.8, mt:-3.75, width:'21%', height:'30px', borderRadius:'3px'}}>
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

          <Button variant="contained" color="success" onClick={handleClick} sx={{ mt: 2, ml:52 }}>
            Book
          </Button>
        </Box>
      </div>
    </LocalizationProvider>
  );
 };

export default ProfilePage;