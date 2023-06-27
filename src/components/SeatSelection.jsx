import React, {useState} from 'react'
import { Button } from '@mui/material'
import {Link, useLocation} from "react-router-dom"
import './SeatSelection.css';

function SeatSelection() {

  const location = useLocation();
  // const navigate = useNavigate();
  
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('Level 1');
  

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeat(seatNumber);
    setSelectedLocation('Level 1');
  }

  const isSeatAvailable = (seatNumber) => {
        const occupiedSeats = ['1','38','3', '40', '43', '44','46', '47', '48', '49', '50', '15',
                               '51', '52', '18','53', '54', '19', '55', '60', '25', '61', '62',
                               , '29', '31', '35', '36'];
        return !occupiedSeats.includes(seatNumber);
  };

  const formattedDate1 = location.state.fromDate;
  const formattedDate2 = location.state.toDate;
  const formattedTime1 = location.state.fromTime;
  const formattedTime2 = location.state.toTime;
  const bookingPurpose = location.state.purpose;
  const bookingDescription = location.state.description;

  const renderSeatButton = (seatNumber) => (
      <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`} >
        <Button
          key={seatNumber}
          sx={{
            marginTop: '10px',
            marginRight: '8px',
            width: 50,
            height: 50,
            backgroundColor:
                      selectedSeat === seatNumber
                        ? 'skyblue'
                        : isSeatAvailable(seatNumber)
                        ? 'springgreen'
                        : 'lightgray',
          }}
          disabled={!isSeatAvailable(seatNumber)}
          onClick={() => handleSeatSelection(seatNumber)}
        >
          <strong>{seatNumber}</strong>
        </Button>
      </Link>
  );

  const renderBoardRoomButton = (seatNumber) => (
    <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`} >
      <Button
        key={seatNumber}
        sx={{
          marginTop: '10px',
          marginRight: '8px',
          width: 135,
          height: 80,
          backgroundColor:
                    selectedSeat === seatNumber
                      ? 'skyblue'
                      : isSeatAvailable(seatNumber)
                      ? 'springgreen'
                      : 'lightgray',
        }}
        disabled={!isSeatAvailable(seatNumber)}
        onClick={() => handleSeatSelection(seatNumber)}
      >
        <strong>{seatNumber}</strong>
      </Button>
    </Link>
);


  // action={<Link to="/emailverification" />}
  return (
    <div >
      <h2 align='center'><b><i>Level 1</i></b></h2>
      <section className='layout'>
        <div style={{marginLeft:100}}>
          {renderSeatButton('1')}
          {renderSeatButton('2')}
          {renderSeatButton('3')}
        </div>
        <div className='marginLeft'>
          {renderSeatButton('4')}
          {renderSeatButton('5')}
          {renderSeatButton('6')}
        </div>
        <div className='marginLeft'>
          {renderSeatButton('7')}
          {renderSeatButton('8')}
          {renderSeatButton('9')}
          <span style={{borderLeft: '8px inset black',
                        height: '320px',
                        position:'fixed',
                        left: '850px', 
                      }}>
          </span>
          <span style={{marginLeft:'70px'}}>
            {renderSeatButton('51')}
            <span style={{height:'27rem', width:'6rem',position:'fixed', borderRadius:'2rem', backgroundColor:'transparent',border:'solid black 3px', right:'12.3rem',marginTop:'1rem' }}>
            </span>
          </span>
          <span style={{marginLeft:'150px'}}>
            {renderSeatButton('52')}
          </span>
        </div>
      </section>
      <section className='layout' style={{marginTop:'-5px'}}>
        <div style={{marginLeft:100}}>
          {renderSeatButton('10')}
          {renderSeatButton('11')}
          {renderSeatButton('12')}
        </div>
        <div className='marginLeft'>
          {renderSeatButton('13')}
          {renderSeatButton('14')}
          {renderSeatButton('15')}
        </div>
        <div className='marginLeft'>
          {renderSeatButton('16')}
          {renderSeatButton('17')}
          {renderSeatButton('20')}
          <span style={{marginLeft:'70px'}}>
            {renderSeatButton('53')}
          </span>
          <span style={{marginLeft:'150px'}}>
            {renderSeatButton('54')}
          </span>
        </div>
      </section>
      <section style={{marginTop:'10px'}}>
        <div style={{marginLeft:100}}>
          <div>{renderSeatButton('21')}{renderSeatButton('24')}
          <span style={{height:'10rem',width:'25rem', position:'fixed', backgroundColor:'transparent', left:'16rem', border:'solid grey', borderRadius:'1rem', marginTop:'2rem'}}>
                    <p style={{justifyContent:'center',fontSize:'3.8rem', color:'grey', marginLeft:'8.5rem', marginTop:'0em', position:'relative'}}>BAY AREA</p>
          </span>
            <span style={{marginLeft:'432px'}}>{renderBoardRoomButton('45')}
                
                <span style={{marginLeft:'70px'}}>
                  {renderSeatButton('55')}
                </span>
                <span style={{marginLeft:'150px'}}>
                  {renderSeatButton('56')}
                </span>
            </span>
          </div>
          <div>{renderSeatButton('22')}{renderSeatButton('25')}
            <span style={{marginLeft:'432px'}}>
              {renderSeatButton('47')}{renderSeatButton('48')}
                
                <span style={{marginLeft:'70px'}} >
                  {renderSeatButton('57')}
                </span>
                <span style={{marginLeft:'150px'}}>
                  {renderSeatButton('58')}
                </span>
            </span>
          </div>
          <div>{renderSeatButton('23')}{renderSeatButton('26')}
            <span style={{marginLeft:'432px'}}>{renderSeatButton('49')}{renderSeatButton('50')}
                <span style={{marginLeft:'70px'}} >
                  {renderSeatButton('59')}
                </span>
                <span style={{marginLeft:'150px'}}>
                  {renderSeatButton('60')}
                </span>
            </span>
          </div>
        </div>
      </section>
      <section className='layout' style={{marginTop:'10px'}}>
        <div style={{marginLeft:100}}>
          {renderSeatButton('27')}
          {renderSeatButton('28')}
          {renderSeatButton('29')}
        </div>
        <div className='marginLeft'>
          {renderSeatButton('30')}
          {renderSeatButton('31')}
          {renderSeatButton('32')}
        </div>
        <div className='marginLeft'>
          {renderSeatButton('33')}
          {renderSeatButton('34')}
          {renderSeatButton('35')}
          <span style={{marginLeft:'70px'}}>
              {renderSeatButton('61')}
          </span>
          <span style={{marginLeft:'150px'}}>
            {renderSeatButton('62')}
          </span>
        </div>
      </section>
      <section className='layout' style={{marginTop:'-5px'}}>
        <div style={{marginLeft:100}}>
          {renderSeatButton('36')}
          {renderSeatButton('37')}
          {renderSeatButton('38')}
        </div>
        <div className='marginLeft'>
          {renderSeatButton('39')}
          {renderSeatButton('40')}
          {renderSeatButton('41')}
        </div>
        <div className='marginLeft'>
          {renderSeatButton('42')}
          {renderSeatButton('43')}
          {renderSeatButton('44')}
          <span style={{borderLeft: '8px inset black',
                        height: '50px',
                        position:'fixed',
                        left: '850px', 
                        marginTop:'1.5rem'
                      }}>
          </span>
          <span style={{marginLeft:'70px'}}>
              {renderSeatButton('63')}
          </span>
          <span style={{marginLeft:'150px'}}>
            {renderSeatButton('64')}
          </span>
        </div>
      </section>
    </div>
  )

};

export default SeatSelection;