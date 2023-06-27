import React, {useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import './Cabins.css';
import { Button } from '@mui/material';

const Cabins = () => {
    
    const location = useLocation();
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('Cabins');
    
    
    const handleSeatSelection = (seatNumber) => {
        setSelectedSeat(seatNumber);
        setSelectedLocation('Cabins');
      }


    const isSeatAvailable = (seatNumber) => {
        const occupiedSeats = ['C4','C6', 'C12', 'C14'];
        return !occupiedSeats.includes(seatNumber);
  };

    const formattedDate1 = location.state.fromDate;
    const formattedDate2 = location.state.toDate;
    const formattedTime1 = location.state.fromTime;
    const formattedTime2 = location.state.toTime;
    const bookingPurpose = location.state.purpose;
    const bookingDescription = location.state.description;
    

    const renderSeatButton = (seatNumber) => (
      <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`}>
          <Button
            key={seatNumber}
            sx={{
              marginTop: '25.5px',
              marginRight: '8px',
              width: 120,
              height: 60,
              backgroundColor:
                        selectedSeat === seatNumber
                          ? 'skyblue'
                          : isSeatAvailable(seatNumber)
                          ? 'springgreen'
                          : 'lightgray',
                          transform: 'rotate(0deg)',
            }}
            disabled={!isSeatAvailable(seatNumber)}
            onClick={() => handleSeatSelection(seatNumber)}
          >
            <strong>{seatNumber}</strong>
          </Button>
          </Link>
    );

    const renderSeatButton2 = (seatNumber) => (
      <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`}>
        <Button
          key={seatNumber}
          sx={{
            marginTop: '45px',
            marginRight: '8px',
            width: 100,
            height: 60,
            backgroundColor:
                      selectedSeat === seatNumber
                        ? 'skyblue'
                        : isSeatAvailable(seatNumber)
                        ? 'springgreen'
                        : 'lightgray',
                        transform: 'rotate(90deg)',
          }}
          disabled={!isSeatAvailable(seatNumber)}
          onClick={() => handleSeatSelection(seatNumber)}
        >
          <strong>{seatNumber}</strong>
        </Button>
        </Link>
  );

    const renderSeatAngledButton1 = (seatNumber) => (
      <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`}>
        <Button
          key={seatNumber}
          sx={{
            marginTop: '65px',
            marginRight: '8px',
            width: 90,
            height: 45,
            backgroundColor:
                      selectedSeat === seatNumber
                        ? 'skyblue'
                        : isSeatAvailable(seatNumber)
                        ? 'springgreen'
                        : 'lightgray',
                        transform: 'rotate(-45deg)',
          }}
          disabled={!isSeatAvailable(seatNumber)}
          onClick={() => handleSeatSelection(seatNumber)}
        >
          <strong>{seatNumber}</strong>
        </Button>
        </Link>
  );

  const renderSeatAngledButton2 = (seatNumber) => (
    <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`}>
    <Button
      key={seatNumber}
      sx={{
        marginTop: '67px',
        marginRight: '8px',
        width: 90,
        height: 45,
        backgroundColor:
                  selectedSeat === seatNumber
                    ? 'skyblue'
                    : isSeatAvailable(seatNumber)
                    ? 'springgreen'
                    : 'lightgray',
                    transform: 'rotate(45deg)',
      }}
      disabled={!isSeatAvailable(seatNumber)}
      onClick={() => handleSeatSelection(seatNumber)}
    >
      <strong>{seatNumber}</strong>
    </Button>
    </Link>
);

const renderSeatAngledButton3 = (seatNumber) => (
  <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`}>
    <Button
      key={seatNumber}
      sx={{
        marginTop: '61px',
        marginRight: '8px',
        width: 90,
        height: 45,
        backgroundColor:
                  selectedSeat === seatNumber
                    ? 'skyblue'
                    : isSeatAvailable(seatNumber)
                    ? 'springgreen'
                    : 'lightgray',
                    transform: 'rotate(45deg)',
      }}
      disabled={!isSeatAvailable(seatNumber)}
      onClick={() => handleSeatSelection(seatNumber)}
    >
      <strong>{seatNumber}</strong>
    </Button>
    </Link>
);

const renderSeatAngledButton4 = (seatNumber) => (
  <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`}>
    <Button
      key={seatNumber}
      sx={{
        marginTop: '-616px',
        marginRight: '8px',
        width: 70,
        height: 40,
        backgroundColor:
                  selectedSeat === seatNumber
                    ? 'skyblue'
                    : isSeatAvailable(seatNumber)
                    ? 'springgreen'
                    : 'lightgray',
                    transform: 'rotate(45deg)',
      }}
      disabled={!isSeatAvailable(seatNumber)}
      onClick={() => handleSeatSelection(seatNumber)}
    >
      <strong>{seatNumber}</strong>
    </Button>
    </Link>
);



const renderSeatAngledButton5 = (seatNumber) => (
  <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`}>
    <Button
      key={seatNumber}
      sx={{
        marginTop: '-752px',
        marginRight: '8px',
        width: 65,
        height: 35,
        backgroundColor:
                  selectedSeat === seatNumber
                    ? 'skyblue'
                    : isSeatAvailable(seatNumber)
                    ? 'springgreen'
                    : 'lightgray',
                    transform: 'rotate(45deg)',
      }}
      disabled={!isSeatAvailable(seatNumber)}
      onClick={() => handleSeatSelection(seatNumber)}
    >
      <strong>{seatNumber}</strong>
    </Button>
    </Link>
);

const renderSeatAngledButton6 = (seatNumber) => (
  <Link to={`/bookingdetails?date1=${formattedDate1}&date2=${formattedDate2}&time1=${formattedTime1}&time2=${formattedTime2}&seat=${seatNumber}&purpose=${bookingPurpose}&description=${bookingDescription}&location=${selectedLocation}`}>
    <Button
      key={seatNumber}
      sx={{
        marginTop: '-654px',
        marginRight: '8px',
        width: 65,
        height: 35,
        backgroundColor:
                  selectedSeat === seatNumber
                    ? 'skyblue'
                    : isSeatAvailable(seatNumber)
                    ? 'springgreen'
                    : 'lightgray',
                    transform: 'rotate(-45deg)',
      }}
      disabled={!isSeatAvailable(seatNumber)}
      onClick={() => handleSeatSelection(seatNumber)}
    >
      <strong>{seatNumber}</strong>
    </Button>
    </Link>
);


    return(
        <div
            style={{height:"100vh", width:"100vw", backgroundColor:"white", overflow:'auto'}} 
        >
            <h2 align="center"><b><i>{selectedLocation}</i></b></h2>

            <section style={{marginTop:'10px'}}>
                <div style={{
                    borderLeft:'8px inset black',
                    height:'458px',
                    position:'fixed',
                    left:'30px'
                }}>
                    
                    <span style={{
                    borderLeft:'8px inset black',
                    height:'458px',
                    position:'fixed',
                    right:'30px'
                }}/>
                <span style={{
                    borderLeft:'450px inset black',
                    height:'8px',
                    position:'fixed',

                }}/>
                <span style={{
                    borderLeft:'457px inset black',
                    height:'8px',
                    position:'fixed',
                    right:'30px'
                }}/>
                <span style={{
                    borderLeft:'8px inset black',
                    height:'80px',
                    position:'fixed',
                    left:'480px',
                    top:'140px'
                }} />
                <span style={{
                    borderLeft:'8px inset black',
                    height:'80px',
                    position:'fixed',
                    left:'480px',
                    top:'280px'
                }} />
                
                <span style={{
                    borderLeft:'450px inset black',
                    height:'8px',
                    position:'fixed',
                    left:'30px',
                    top:'352px'
                }} />
                <span style={{
                    borderLeft:'95.3vw inset black',
                    height:'8px',
                    position:'fixed',
                    left:'30px',
                    bottom:'0px'
                }} />
                <span style={{
                    borderLeft:'390px inset black',
                    height:'3px',
                    position:'fixed',
                    left:'60px',
                    top:'340px'
                }} />
                <span className='diagleft'/>
                <span className='diagright'/>
                <span style={{marginLeft:'35px'}}>{renderSeatButton('C1')}</span>
                <span style={{
                    borderLeft:'390px inset black',
                    height:'3px',
                    position:'fixed',
                    left:'60px',
                    top:'155px'
                }} />
                <span style={{
                    borderLeft:'3px inset black',
                    height:'70px',
                    position:'fixed',
                    left:'450px',
                    top:'155px'
                }}/>
                <span style={{
                    borderLeft:'3px inset black',
                    height:'70px',
                    position:'fixed',
                    left:'60px',
                    top:'155px'
                }}/>
                <span style={{
                    borderLeft:'3px inset black',
                    height:'70px',
                    position:'fixed',
                    left:'60px',
                    top:'270px'
                }}/>
                <span style={{
                    borderLeft:'3px inset black',
                    height:'70px',
                    position:'fixed',
                    left:'450px',
                    top:'273px'
                }}/>
                <span style={{marginLeft:'118px'}}>{renderSeatButton('C2')}</span>
                <span className='diagupright' />
                <div style={{marginLeft:'35px', marginTop:'20px'}}>{renderSeatButton('C3')}
                <span style={{marginLeft:'118px'}}>{renderSeatButton('C4')}</span>
                </div>
                
                <span style={{
                    borderLeft:'8px inset black',
                    height:'385px',
                    position:'fixed',
                    right:'480px',
                    top:'206px'
                }} />
                <span style={{
                    borderLeft:'180px inset black',
                    height:'8px',
                    position:'fixed',
                    right:'30px',
                    top:'300px'
                }} />
                <span style={{
                    borderLeft:'190px inset black',
                    height:'8px',
                    position:'fixed',
                    right:'298px',
                    top:'300px'
                }} />
                <span style={{
                    borderLeft:'180px inset black',
                    height:'8px',
                    position:'fixed',
                    right:'30px',
                    bottom:'130px'
                }} />
                <span style={{
                    borderLeft:'190px inset black',
                    height:'8px',
                    position:'fixed',
                    right:'298px',
                    bottom:'130px'
                }} />
                <span className='diagdeskrightup' />
                
                <span className='diagdeskdownleft' />
                <span className='diagdeskdownright' />
                <span className='diagdeskdownright' style={{top:'410px'}} />
                <span className='diagdeskdownleft' style={{top:'410px'}} />
                <span className='diagdeskrightup' style={{top:'313px'}} />
                <span className='diagdeskleftup' />
                <span style={{
                    borderLeft:'3px inset black',
                    height:'85px',
                    position:'fixed',
                    right:'55px',
                    bottom:'20px'
                }} />
                <span style={{
                    borderLeft:'3px inset black',
                    height:'85px',
                    position:'fixed',
                    right:'465px',
                    bottom:'20px'
                }} />
                <span style={{
                    borderLeft:'8px inset black',
                    height:'180px',
                    position:'fixed',
                    left:'480px',
                    bottom:'56px'
                }} />
                <span className='diagdeskleftup' style={{top:'430px', left:'45px', borderLeft:'90px inset black'}} />
                <span style={{marginLeft:'12.5px'}}>{renderSeatAngledButton1('C5')}</span>
                <span className='diagdeskdownleft' style={{top:'513px', left:'45px', borderLeft:'90px inset black'}} />
                <span style={{marginLeft:'227px'}}>{renderSeatAngledButton2('C6')}</span>
                <span style={{
                  borderLeft:'30px double gray',
                  height:'452px',
                  left:'630px',
                  top:'135px',
                  position:'fixed',
                }} />
                <span className='diagdeskrightup' style={{top:'368px', left:'408px', borderLeft:'90px inset black'}} />
                <div style={{marginLeft:'15px'}}>{renderSeatAngledButton3('C7')}</div>
                <span style={{marginLeft:'772px'}}>{renderSeatAngledButton4('C8')}</span>
                <span style={{marginLeft:'278px'}}>{renderSeatAngledButton5('C9')}</span>
                <div style={{marginLeft:'1127px'}}>{renderSeatAngledButton6('C10')}</div>
                <div style={{marginTop:'68px', marginLeft:'771px'}}>{renderSeatAngledButton6('C11')}</div>
                <div style={{marginTop:'28px', marginLeft:'1128px'}}>{renderSeatAngledButton5('C12')}</div>
                <div style={{marginTop:'47px', marginLeft:'770px'}}>{renderSeatAngledButton5('C13')}</div>
                <div style={{marginLeft:'1130px', marginTop:'-70px'}}>{renderSeatAngledButton6('C14')}</div>
                <div style={{marginLeft:'765px', marginTop:'-295px'}}>{renderSeatButton2('C15')}
                    <span style={{marginLeft:'225px'}}>{renderSeatButton2('C16')}</span>
                </div>
                
                </div>
            </section>
        </div>
    )
}

export default Cabins;