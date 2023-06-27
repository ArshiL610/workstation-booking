import React, { useState } from 'react'
import { Button} from '@mui/material'
import {Link, useLocation} from 'react-router-dom'


const Level2 = () => {

    const location = useLocation();

    const [selectedSeat, setSelectedSeat] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('Level 2');

    const handleSeatSelection = (seatNumber) => {
        setSelectedSeat(seatNumber);
        setSelectedLocation('Level 2');
    }
    const isSeatAvailable = (seatNumber) => {
        const occupiedSeats = ['Boardroom 2', 'Boardroom 4'];

        return !occupiedSeats.includes(seatNumber);
    }

    const formattedDate1 = location.state.fromDate;
    const formattedDate2 = location.state.toDate;
    const formattedTime1 = location.state.fromTime;
    const formattedTime2 = location.state.toTime;
    const bookingPurpose = location.state.purpose;
    const bookingDescription = location.state.description;
    

    const renderBigRoomButton = (seatNumber, capacity) => (
        <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`} >
        <Button
            key={seatNumber}
            
            sx = {{
                marginTop: '2.75rem',
                marginRight:'2rem',
                width:'30rem',
                height:'12rem',
                backgroundColor: selectedSeat === seatNumber ? 'skyblue' : isSeatAvailable(seatNumber) ? 'springgreen' : 'lightgray',
                color:'black',
                fontSize:'18px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center'
                }}
            disabled={!isSeatAvailable(seatNumber)}
            onClick={() => handleSeatSelection(seatNumber)}
        >
            <strong>{seatNumber}</strong>
            <b style={{fontSize:'10px'}}>Capacity : {capacity}</b>
        </Button>
        </Link>
    )

    const renderMediumRoomButton = (seatNumber, capacity) => (
        <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`} >
        <Button
            key={seatNumber}
            
            sx = {{
                marginTop: '5.2rem',
                marginRight:'2rem',
                width:'30rem',
                height:'10rem',
                backgroundColor: selectedSeat === seatNumber ? 'skyblue' : isSeatAvailable(seatNumber) ? 'springgreen' : 'lightgray',
                color:'black',
                fontSize:'18px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center'
                }}
            disabled={!isSeatAvailable(seatNumber)}
            onClick={() => handleSeatSelection(seatNumber)}
        >
            <strong>{seatNumber}</strong>
            <b style={{fontSize:'10px'}}>Capacity : {capacity}</b>
        </Button>
        </Link>
    )

    //1,2,3
    const renderSmallRoomButton = (seatNumber, capacity) => (
        <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`} >
        <Button
            key={seatNumber}
            sx = {{
                marginTop: '8px',
                marginRight:'1.5rem',
                width:'9rem',
                height:'12rem',
                backgroundColor: selectedSeat === seatNumber ? 'skyblue' : isSeatAvailable(seatNumber) ? 'springgreen' : 'lightgray',
                color:'black',
                fontSize:'14px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center'
                }}
            disabled={!isSeatAvailable(seatNumber)}
            onClick={() => handleSeatSelection(seatNumber)}
        >
            <strong>{seatNumber}</strong>
            <b style={{fontSize:'10px'}}>Capacity : {capacity}</b>
        </Button>
        </Link>
    )

    return(
        <div
            style={{height:'100vh', width:'100vw', backgroundColor:'white', overflowY:'auto'}}
        >
            <h2 align='center' style={{marginLeft:28}}><b><i>Level 2</i></b></h2>
            {/* <span>
                <Button variant='contained'  sx={{mt:'4rem', ml:'4rem', height:'8rem', width:'20rem', justifyContent:'center'}}>
                    Mozilla Board Room
                </Button>

            </span> */}
            <section style={{marginLeft:'-22.5px'}}>
                <div style={{marginLeft:105, display:'flex', flexDirection:'row'}}>
                    {renderSmallRoomButton('Boardroom 1', '4')}
                    <span style={{borderLeft: '8px inset black',
                                    height: '140px',
                                    position:'fixed',
                                    left: '730px'}}>   
                    </span>
                    <span style={{borderLeft: '8px inset black',
                                  height:'220px',
                                  position:'fixed',
                                  left:'570px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'68px inset black',
                                  height:'8px',
                                  position:'fixed',
                                  left:'510px',
                                  top:'350px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'520px inset black',
                                  height:'8px',
                                  position:'fixed',
                                  left:'730px',
                                  top:'135px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'8px inset black',
                                  height:'218px',
                                  position:'fixed',
                                  right:'30px',
                                  top:'136px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'8px inset black',
                                  height:'240px',
                                  position:'fixed',
                                  right:'30px',
                                  bottom:'0px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'520px inset black',
                                  height:'8px',
                                  position:'fixed',
                                  left:'730px',
                                  bottom:'0px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'516px inset black',
                                  height:'6px',
                                  position:'fixed',
                                  left:'62px',
                                  bottom:'0px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'120px inset black',
                                  height:'8px',
                                  position:'fixed',
                                  left:'345px',
                                  top:'350px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'135px inset black',
                                  height:'8px',
                                  position:'fixed',
                                  left:'164px',
                                  top:'350px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'60px inset black',
                                  height:'8px',
                                  position:'fixed',
                                  left:'62px',
                                  top:'350px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'8px inset black',
                                  height:'460px',
                                  position:'fixed',
                                  left:'62px',
                                  top:'135px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'516px inset black',
                                  height:'6px',
                                  position:'fixed',
                                  left:'62px',
                                  top:'135px'
                                  }}>
                    </span>
                    <span>{renderSmallRoomButton('Boardroom 2', '4')}</span>
                    
                    <span style={{borderLeft: '8px inset black',
                                    height: '170px',
                                    position:'fixed',
                                    left: '730px',
                                    bottom:'100px'}}>   
                    </span>
                    <span style={{borderLeft: '520px inset black',
                                  height:'10px',
                                  position:'fixed',
                                  left:'730px',
                                  bottom:'240px'
                                  }}>
                    </span>
                    <span style={{borderLeft: '6px inset black',
                                  height:'220px',
                                  position:'fixed',
                                  left:'235px',
                                  bottom:'240px'
                                  }}>
                    </span>
                    <span style={{borderLeft: '6px inset black',
                                  height:'220px',
                                  position:'fixed',
                                  left:'406px',
                                  bottom:'240px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'8px inset black',
                                  height:'180px',
                                  position:'fixed',
                                  left:'570px',
                                  bottom:'1px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'150px inset black',
                                  height:'8px',
                                  position:'fixed',
                                  left:'428px',
                                  bottom:'176px'
                                  }}>
                    </span>
                    <span style={{
                                  borderLeft:'320px inset black',
                                  height:'8px',
                                  position:'fixed',
                                  left:'62px',
                                  bottom:'176px'
                                  }}>
                    </span>
                    {renderSmallRoomButton('Boardroom 3', '6')}
                    <span style={{
                        borderLeft : '8px inset black', 
                        height:'50px',
                        position:'fixed',
                        left:'730px',
                        bottom:'1px',
                    }}>
                    </span>
                    <span style={{
                        position:'fixed',
                        right:'160px',
                        bottom:'88px',  
                        fontSize:'50px',
                        fontStyle:'italic',
                        color:'gray'
                    }}>
                        <b>CAFETERIA</b>
                    </span>
                </div>
                <div style={{marginLeft:102}}>{renderMediumRoomButton('Boardroom 4', '10')}</div>
                <div style={{marginLeft:774, marginTop:-481}}>
                        {renderBigRoomButton('Boardroom 5', '16')}
                </div>
            </section>
            
        </div>
    )

}

export default Level2;