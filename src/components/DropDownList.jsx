import { FormControl, MenuItem, Select } from '@mui/material';
import React, {useState} from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'
import SeatSelection from './SeatSelection';
import Level2 from './Level2';
import Cabins from './Cabins';

const DropDownList = () => {

    // const location = useLocation();
    // const navigate = useNavigate();
    const [selectedLayout, setSelectedLayout] = useState('');

    // const handleLayoutChange = (event) => {
    //     const layout = event.target.value;
    //     setSelectedLayout(layout);
    //     if (layout) {
    //       const formattedDate1 = location.state.fromDate;
    //       const formattedDate2 = location.state.toDate;
    //       const formattedTime1 = location.state.fromTime;
    //       const formattedTime2 = location.state.toTime;
          
    //       navigate(layout, {
    //         state: {
    //           fromDate: formattedDate1,
    //           toDate: formattedDate2,
    //           fromTime: formattedTime1,
    //           toTime: formattedTime2
    //         }
    //       });
    //     }
    //   };

    const handleLayoutChange = (event) => {
        const layout = event.target.value;
        setSelectedLayout(layout);
    }
    const renderSelectedLayout = () => {
        if (selectedLayout === '/seatselection'){
            return <SeatSelection />;
        }
        if (selectedLayout === '/level2'){
            return <Level2 />;
        }
        if (selectedLayout === '/cabins'){
            return <Cabins />;
        }
        return null;
    }
            
   


    return (
        <div style={{marginLeft:'30px', marginTop:'10px', position:'absolute'}}>
            <FormControl sx={{width:'250px'}} variant='outlined'>
                {/* <Typography align='center' sx={{marginBottom:'10px'}}><b>Select Location</b></Typography> */}
                <Select variant='outlined' color='info' sx={{justifyContent:'center', height:'40px'}} value={selectedLayout} onChange={handleLayoutChange} >
                    <MenuItem sx={{justifyContent:'center'}} value="/seatselection" ><b>Level 1</b></MenuItem>
                    <MenuItem sx={{justifyContent:'center'}} value="/level2" ><b>Level 2</b></MenuItem>
                    <MenuItem sx={{justifyContent:'center'}} value="/cabins" ><b>Cabins</b></MenuItem>
                </Select>
            </FormControl>
            {selectedLayout && (
                <div style={{ marginTop: '-45px', marginLeft:'-30px' }}>
                    {renderSelectedLayout()}
                </div>
            )}
        </div>
    );
};

export default DropDownList;