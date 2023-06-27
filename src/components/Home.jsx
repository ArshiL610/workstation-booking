import React from 'react'
import "./Home.css"
import Container from '@mui/material/Container';
import { Box,Button,Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    }

    return(
        <div className='image'>
            <Container maxWidth="xl">
                <Container maxWidth="md" sx={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '9s00px',
                            margin: '0 auto',
                            marginTop:0,
                            color:'black',
                        height:'100vh'}}
                    >
                        <Typography variant="h3" align="center" gutterBottom><br/>
                            <strong>WELCOME TO WORKSTATION BOOKING</strong>
                        </Typography>
                        <Button  variant='outlined' onClick={handleClick}  sx={{marginTop:10, marginBottom:10, backgroundColor:'lightgrey', color:'black', fontSize:25}}>Login</Button>
                        <Typography variant="h4" align="center" gutterBottom>
                            <strong><i>MANAGE AND OPTIMIZE YOUR</i><br/><i>WORKSPACE UTILIZATION</i></strong>
                        </Typography>
                        
                    </Box>
                </Container>
            </Container>
        </div>
    );
};

export default Home;