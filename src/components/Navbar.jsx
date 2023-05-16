import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Fastfood } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {  Button, TextField, ThemeProvider } from '@mui/material';





const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



 

 
  

  
 
  return (

     <Box >
      
      <AppBar id='navbar' position="static" sx={{ boxShadow:0, bgcolor: "white" ,color:"black", px:5,py:1 }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Fastfood sx={{ color:'orangered', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            
           
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'orangered',
              textDecoration: 'none',
            
            }}
          >
            My Restaurant
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{

                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>

                <Link to={'/'}> Home</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={'/about'}>About</Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={'/menu'}> Menu</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}  >
                <Link to={'/contact'} >Contact</Link>
              </MenuItem>



            </Menu>
          </Box>
          < Fastfood sx={{ color: "black", display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 4,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            My Restaurant
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link to={"/"}> <Button id='cool-link' onClick={handleCloseNavMenu} sx={{  my: 3 ,mx:2, color: 'black', display: 'block',fontWeight: 500,borderRadius:"30px",p:0 }}>
              Home
            </Button></Link>

            <Link to={"/About"}><Button id='cool-link' onClick={handleCloseNavMenu} sx={{ my: 3,mx:2, color: 'black', display: 'block',fontWeight: 500 ,borderRadius:"30px",p:0}}>
              About
            </Button></Link>

            <Link to={"/menu"}><Button id='cool-link' onClick={handleCloseNavMenu} sx={{  my: 3,mx:2, color: 'black', display: 'block',fontWeight: 500 ,borderRadius:"30px",p:0 }}>
              Menu
            </Button></Link>

            <Link to={"/contact"}>
              <Button id='cool-link' onClick={handleCloseNavMenu} sx={{  my: 3,mx:2, color: 'black', display: 'block',fontWeight: 500 ,borderRadius:"30px",p:0,width:"90px" }}>
                Contact
              </Button>
            </Link>


          </Box>
          
          
  


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'black' }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

   
       
     </Box>
 

  )
}

export default Navbar
