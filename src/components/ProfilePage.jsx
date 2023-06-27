import React, {useState} from 'react'
import { Box, CardContent, Typography, Button, Paper, TextField } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import './ProfilePage.css';
import { toast} from 'react-toastify';



const ProfilePage = () => {

    const {name} = useParams();
    const navigate = useNavigate();
    
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);
    const [selectedTime1, setSelectedTime1] = useState(null);
    const [selectedTime2, setSelectedTime2] = useState(null);

    const [purpose, setPurpose] = useState('');
    const [description, setDescription] = useState('');
    

    

    const handleDateChange1 = (date1) => {
        setSelectedDate1(date1);
    }
    const handleDateChange2 = (date2) => {
        setSelectedDate2(date2);
    }
    const handleTimeChange1 = (time1) => {
        setSelectedTime1(time1);        
    }
    const handleTimeChange2 = (time2) => {
        setSelectedTime2(time2);
    }

    const handleClick = () => {
      if(selectedDate1 && selectedDate2 && selectedTime1 && selectedTime2 && purpose && description){  
        const formattedDate1 = dayjs(selectedDate1).format('DD-MM-YYYY');
        const formattedDate2 = dayjs(selectedDate2).format('DD-MM-YYYY');
        const formattedTime1 = dayjs(selectedTime1).format('hh:mm A');
        const formattedTime2 = dayjs(selectedTime2).format('hh:mm A');
        
        navigate("/dropdownlist", {
          state: {
            fromDate: formattedDate1,
            toDate: formattedDate2,
            fromTime: formattedTime1,
            toTime: formattedTime2,
            purpose,
            description
          }
        });
        toast.success('Slot selected!');
        setTimeout(()=>{
          toast.info('Next, choose the location!');
          setTimeout(()=>{
            toast.info('The locations are listed in the dropdown to your left')
          }, 500)
        }, 2000);
        
      }
      else{
        toast.warning('Enter the details!')
      }
    }


    // linear-gradient(to top right, #403b4a, #e7e9bb)
    // linear-gradient(to right, #3e5151, #decba4 60%)

    // linear-gradient(to right bottom, #dad299 , #b0dab9 40%)
    return (
        <div style={{ height: '100vh', background: 'linear-gradient(to left top, #C7BFBF, #B3EAD3)', overflowY:'auto' }}>
          {/* Header */}
          <Box sx={{ mt: 0.5, display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={8} variant="elevation" sx={{ width: 900, backgroundColor: 'inherit', borderBlockWidth: 20, borderBlockColor: 'bisque', borderBlockStyle: 'ridge', borderRadius: '50px' }}>
              <CardContent sx={{ paddingTop: 2, marginBottom: -2 }}>
                <Typography variant="h3" align="center" fontSize={40} color="darkslategray" fontFamily="fantasy" gutterBottom>
                  <strong>Welcome</strong> <strong className='text'>{name}</strong>
                </Typography>
              </CardContent>
            </Paper>
          </Box>

          {/* textfield for purpose */}
          <Box sx={{display:'flex', flexDirection:'row', mt:1.5}}>
              <Paper elevation={10} variant='elevation' sx={{width:832, height:40, ml:27, background:'linear-gradient(to right bottom, #C7BFBF, #B3EAD3)', borderRadius:'5px', boxShadow: '0px 3px 10px rgba(0, 0, 0, 1)'}}>
                <TextField 
                    variant='outlined' 
                    color='info' 
                    sx={{width:832}} 
                    size='small' 
                    label="Title" 
                    autoComplete='off' 
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    required 
                />
              </Paper>
          </Box>


          <Box sx={{ display: 'flex',flexDirection: 'row', mt:-4, justifyContent: 'center' }}>

            {/* Date */}
            <Paper elevation={8} variant="elevation" sx={{ width: 250,height:55, background:'linear-gradient(to right bottom, #C7BFBF, #B3EAD3)', margin: 2, borderRadius: '5px', marginTop:6, boxShadow: '0px 3px 10px rgba(0, 0, 0, 1)' }}>
              <CardContent sx={{height:'40px'}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField format='DD-MM-YYYY' sx={{ width: 250, justifyContent: 'center', mt:-2, ml:-2 }} value={selectedDate1} onChange={handleDateChange1} 
                      slotProps={{
                        textField: {
                          helperText: 'Select from-date',
                        },
                      }}
                    />
                </LocalizationProvider>
              </CardContent>
            </Paper>

            {/* Time */}
            <Paper elevation={8} variant="elevation" sx={{ width: 250,height:55, background: 'linear-gradient(to left bottom, #C7BFBF, #B3EAD3)', margin: 2, borderRadius: '5px', marginTop:6, boxShadow: '0px 3px 10px rgba(0, 0, 0, 1)' }}>
              <CardContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker sx={{width:250, ml:-2, mt:-2}} value={selectedTime1} onChange={handleTimeChange1} 
                    slotProps={{
                      textField: {
                        helperText: 'Select from-time',
                      },
                    }}
                  />
                </LocalizationProvider>
              </CardContent>
            </Paper>
    
            {/* Date */}
            <Paper elevation={8} variant="elevation" sx={{ width: 250,height:55, background: 'linear-gradient(to right bottom, #C7BFBF, #B3EAD3)', margin: 2, borderRadius: '5px', marginTop:6, boxShadow: '0px 3px 10px rgba(0, 0, 0, 1)' }}>
              <CardContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField format='DD-MM-YYYY' sx={{ width: 250, mt:-2, ml:-2 }} value={selectedDate2} onChange={handleDateChange2} 
                      slotProps={{
                        textField: {
                          helperText: 'Select to-date',
                        },
                      }}
                    />
                </LocalizationProvider>
              </CardContent>
            </Paper>
    
            {/* Time */}
            <Paper elevation={8} variant="elevation" sx={{ width: 250, height:55, background: 'linear-gradient(to left bottom, #C7BFBF, #B3EAD3)', margin: 2, borderRadius: '5px', marginTop:6, boxShadow: '0px 3px 10px rgba(0, 0, 0, 1)' }}>
              <CardContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker sx={{width:250, ml:-2, mt:-2}} value={selectedTime2} onChange={handleTimeChange2} 
                    slotProps={{
                      textField: {
                        helperText: 'Select to-time',
                      },
                    }}
                  />
                </LocalizationProvider>
              </CardContent>
            </Paper>
          </Box>
    
          {/* Description */}
          <Paper elevation={8} variant='elevation' sx={{width:700, height:240, ml:11.5,mt:2, borderRadius:'5px'}}>
            <TextField 
                variant='outlined' 
                label="Description" 
                rows={9} 
                sx={{width:700, height:240, background:'linear-gradient(to right top, #C7BFBF, #B3EAD3)', borderRadius:'5px', boxShadow: '0px 3px 10px rgba(0, 0, 0, 1)'}} 
                size='medium' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete='off'
                multiline 
                required
            />
          </Paper>

          {/* button for submit */}
          <Button 
              variant='contained' 
              onClick={handleClick} 
              sx={{position:'inherit',height:35, width:110, borderRadius:1.5 ,color:'black', marginTop: -34, marginLeft:118, fontSize:26, background:'linear-gradient(to right top, #C7BFBF, #B3EAD3)',
              boxShadow: '0px 3px 10px rgba(0, 0, 0, 5)', // Add box shadow
              textTransform: 'uppercase', 
              fontWeight: 'bold', 
              letterSpacing: '2px', 
              transition: 'background 0.1s ease', 
              '&:hover': {
                background: 'linear-gradient(to top left, #B3EAD3, #C7BFBF)', // Change background color on hover
              },
            }} 
              size="medium"
          >
            Next
          </Button>
        </div>
      );
};

export default ProfilePage;