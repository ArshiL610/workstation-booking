import React,{useEffect, useState} from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



const HomePage = () => {

    const [bookingDetailsList, setBookingDetailsList] = useState([]);
    const navigate = useNavigate();
    const {name} = useParams();
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {

        const fetchUserData = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/api/users/get/${name}`);
                const userMail = response.data.email;
                setUserEmail(userMail);

                const response1 = await axios.get(`http://localhost:8080/api/bookingdetails/get`);
                setBookingDetailsList(response1.data);
            }
            catch(error){
                console.error("Error fetching user data..", error);
            }

        };

        fetchUserData();
    },[name]);

    // Filter the bookings based on the user's email
    const filteredBookings = bookingDetailsList.filter((booking) => booking.email === userEmail);

    const handleDelete = async (bookingId) => {
        try{
            await axios.delete(`http://localhost:8080/api/bookingdetails/delete/${bookingId}`);
            setBookingDetailsList((prevList) => prevList.filter((booking) => booking.id !== bookingId))
        }
        catch(error){
            console.error('Error deleting record..', error);
        }
    };

    const handleProfilePageNavigation = () => {
        navigate(`/profilepage/${name}`)
    }

    const handleForwardNavigation = () => {
        navigate(`/profilepage/${name}`)
    }

return(
    <div>
        <Navbar name={name} />
        {/* forward arrow */}
        <IconButton variant='contained' size='large' sx={{color:'black', ml:'1170px', mt:1}} onClick={handleForwardNavigation}>
            <ForwardRoundedIcon style={{fontSize:'40px'}} />
        </IconButton>
        {/* backward arrow */}
        {/* <span>
            <IconButton variant='contained' size='large' sx={{color:'black', mt:-11, ml:2}}>
                <ForwardRoundedIcon style={{fontSize:'40px', transform: 'rotate(-180deg)'}} />
            </IconButton>
        </span> */}
        <span>
            <Button size='large' variant='contained' color='inherit' sx={{ml:65, mt:-5, fontSize:'25px', alignItems:'center'}} onClick={handleProfilePageNavigation}>
                New Booking
                <SendIcon style={{marginLeft:'10px', fontSize:'25px' }} />
            </Button>
        </span>
        <h2 style={{marginLeft:33, marginTop:10, fontSize:'25px'}}><i>Bookings</i></h2>
        <TableContainer component={Paper} sx={{ml:4,width:1217, mt:-2.5, maxHeight: '373px', overflowY:'auto'}} >
            <Table stickyHeader  sx={{width: 1200 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>No.</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>Purpose</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>From Date</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>From Time</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>To Date</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>To Time</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}} align='left'><strong>Location</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>Repeat</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>Meeting Type</strong></StyledTableCell>
                <StyledTableCell sx={{fontSize:'15px'}}><strong>Action</strong></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody sx={{maxHeight: 'calc(100vh - 400px)', overflow:'auto'}}>
            {filteredBookings.map((booking) => (
                <StyledTableRow key={booking.id}>
                    <StyledTableCell align='left'><strong>{booking.id}</strong></StyledTableCell>
                    <StyledTableCell align='left'><strong>{booking.purpose}</strong></StyledTableCell>
                    <StyledTableCell align='left'><strong>{booking.fromDate}</strong></StyledTableCell>
                    <StyledTableCell align='left'><strong>{booking.fromTime}</strong></StyledTableCell>
                    <StyledTableCell align='left'><strong>{booking.toDate}</strong></StyledTableCell>
                    <StyledTableCell align='left'><strong>{booking.toTime}</strong></StyledTableCell>
                    <StyledTableCell align='left'><strong>{booking.location}</strong></StyledTableCell>
                    <StyledTableCell align='left'><strong>{booking.repeatOption}</strong></StyledTableCell>
                    <StyledTableCell align='left'><strong>{booking.meetingType}</strong></StyledTableCell>
                    <StyledTableCell align='left'>
                        <Button size='small' variant='contained' color='warning' onClick={() => handleDelete(booking.id)}>Delete</Button>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
            </Table>
        </TableContainer>

    </div>
)

}

export default HomePage;