import React from 'react';
import { AppBar, Avatar, Divider, Toolbar, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { useNavigate, useParams, useLocation} from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';


const Navbar = ({name}) => {

  // const {name} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    setAnchorEl(null);
    navigate("/");
  }
  const handleAbout = () => {
    setAnchorEl(null);
    navigate("/about");
  }
  const handleLogOut = () => {
    // setIsAuth(false);
    setAnchorEl(null);
    navigate("/login");
  }

  const excludeLogOutRoutes = ['/', '/login', '/about', '/signup', '/emailverification',
                               '/forgot-password', '/resetverify/:email', '/resetpassword/:email',
                               '/helpdesk'];
  const shouldRenderLogOut = !excludeLogOutRoutes.includes(location.pathname);



  return (
    <AppBar position='sticky' color='transparent' style={{backgroundColor:'black'}}>
      <Toolbar>
        {/* for the Title of the website */}
        <Typography align='justify' fontFamily={'monospace'} color="white" fontSize={35} component='div' variant="h3" sx={{ flexGrow: 1 }}>
          <strong style={{color:'red'}}>WORKSTATION</strong> <strong> BOOKING</strong>
        </Typography>
      
        {/* for the right handside account icon dropdown button */}
        <Tooltip title={name}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
        <Avatar  sx={{color:'white'}}/> </IconButton>
        </Tooltip>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleHome} title='Home' >
          <ListItemIcon>
            <HomeIcon fontSize="medium" /> 
          </ListItemIcon>
          Home
        </MenuItem>
        <Divider />
      
        <MenuItem onClick={handleAbout} title='About'>
          <ListItemIcon>
            <InfoIcon fontSize="medium" />
          </ListItemIcon>
          About
        </MenuItem>
        
        {shouldRenderLogOut && (
          <div>
          <Divider />
          <MenuItem sx={{mt:1}} onClick={handleLogOut} title='Log Out'>
            <ListItemIcon >
              <Logout fontSize='medium'/>
            </ListItemIcon>
            LogOut
          </MenuItem>
          </div>
        )}

      </Menu>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;