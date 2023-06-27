import React from 'react';
import { AppBar, Avatar, Divider, Toolbar, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { useNavigate} from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';


const Navbar = ({isAuth, setIsAuth}) => {

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
    setIsAuth(false);
    setAnchorEl(null);
    navigate("/login");
  }



  return (
    <AppBar position='sticky' color='transparent' style={{backgroundColor:'black'}}>
      <Toolbar>

          
        
        {/* for the Title of the website */}
        <Typography align='justify' fontFamily={'monospace'} color="white" fontSize={35} component='div' variant="h3" sx={{ flexGrow: 1 }}>
          <strong style={{color:'red'}}>WORKSTATION</strong> <strong> BOOKING</strong>
        </Typography>
      
        {/* for the right handside account icon dropdown button */}
        <Tooltip title="Profile">
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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
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
        <Divider />
        <MenuItem onClick={handleLogOut} title='Log Out'>
          <ListItemIcon>
            <Logout fontSize='medium'/>
          </ListItemIcon>
          LogOut
        </MenuItem>
      </Menu>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;