import { Box, Typography } from '@mui/material'
import React from 'react'
import Container from '@mui/material/Container';




const About = () => {

return(
    <Container maxWidth="lg" sx={{backgroundColor:'brightgray',  overflowY: 'auto', maxHeight: '90vh' }}>
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                marginTop:0,
        
              }}
        >
        <Typography variant="h4" align="center" gutterBottom><br/>
          <strong>About This Application</strong>
        </Typography>
        <Typography variant="h6" align='justify' gutterBottom>
        Welcome to our <strong>Workstation Booking App</strong>, the ultimate solution for managing and optimizing your workspace utilization.
        Our app is designed to streamline the process of reserving and managing workstations efficiently.
        At our core, we understand the importance of a productive and flexible work environment. 
        With the rise of remote work and the growing need for shared workspaces, our app aims to provide a seamless experience for users seeking to book, track, and utilize workstations effectively.
        <br/><br/>Some of the features are: <br/><br/>
        <strong style={{fontSize:'small'}}>O  </strong> <strong><i>Easy Workstation Booking: </i></strong> Our app offers a user-friendly interface that allows you to effortlessly browse and reserve workstations based on your specific requirements. 
        Whether you need a private desk, a meeting room, or a collaborative workspace, our intuitive booking system ensures a hassle-free experience.
        <br/>
        <strong style={{fontSize:'small'}}>O  </strong> <strong><i>Seamless Integration: </i></strong> Our app seamlessly integrates with your existing calendar, making it effortless to sync your reservations and schedule.
        With a centralized platform, you can avoid double bookings and maintain a clear overview of your workspace usage.
        <br/>
        <strong style={{fontSize:'small'}}>O  </strong> <strong><i>Mobile Accessibility: </i></strong> With our mobile-friendly design, you can access the application anytime, anywhere.
        Whether you're in the office or on the go, you can conveniently book a workstation using your smartphone or tablet.
        <br/>
        <strong style={{fontSize:'small'}}>O  </strong> <strong><i>Security: </i></strong> We also have a feature while logging in, an email with an OTP will be sent
        to the user who is logging-in, to verify if the user is legit or not.
        <br/>
        <strong style={{fontSize:'small'}}>O  </strong> <strong><i>IT Support: </i></strong> If a user has difficulty while logging in, he/she can reach out
        to the helpdesk, by filling the details and submitting the form. Our IT support team is always available to guide you through any issues if facing.
        <br/><br/>
        At our Workstation Booking Application, we believe that a well-organized workspace enhances productivity, collaboration, and employee satisfaction.
        By simplifying the process of reserving workstations, we empower individuals and organizations to optimize their workspace utilization,
        reduce administrative overhead, and foster a productive work environment.
        <br/><br/>
        Experience the convenience and efficiency of our Workstation Booking Application today and unlock the full potential of your workspace. 
        Say goodbye to the hassle of finding an available workstation and embrace a streamlined booking process that caters to your unique needs.
        <p align='center' style={{fontSize:30}}>
        <strong><i>PLEASE BOOK YOUR WORKSTATION BEFORE COMING TO OFFICE ON THIS PORTAL</i></strong>
        </p>
        </Typography> 
        </Box>
    </Container>
)
};


export default About;