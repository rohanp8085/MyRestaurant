import React from 'react'
import contact from '../assets/contact/contact.jpg'
import { Box, Button, Collapse, List, TextField, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationCityIcon from '@mui/icons-material/LocationCity';


const Contact = () => {
  return (
   <>

   <Box  padding={10}>
   <Box id='contact-sec'  height={"60vh"} display={"flex"} alignItems={"center"} justifyContent={"center"} >

    <Box id='contactpage' boxShadow={"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}  width={"70%"} display={"flex"}  flexDirection={"column"} justifyContent={"space-evenly"} pl={20} py={4}  height={"80vh"} >
    <form action='https://formspree.io/f/mpzenjaa' method='post' style={{height:"80vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
    <Typography id='contactus' mr={8} variant='h3' fontWeight={"bold"}>Contact Us</Typography>
      <Typography  color={"gray"}>Feel free to contact us any time.we will get <br/>back to you as soon as we can</Typography>
      <TextField name='name'   label="Name" sx={{width:310}} variant="standard" />
      <TextField name='email'  label="Email"  sx={{width:310}} variant="standard" />
      <TextField name='message' label="Message"  sx={{width:310}} variant="standard" />
      <Button type='submit' sx={{width:300,bgcolor:"black",borderRadius:0,fontSize:10,height:40,mr:2,mt:3}} variant="contained">s e n d</Button>
    </form>
    </Box>
    <Box id='yellowsec' boxShadow={"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"} position={"relative"} height={"80vh"} width={"17%"}  bgcolor={"rgb(245, 220, 55)"}>
      <Box p={5} color={"#c8cacc"} fontWeight={"bold"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} bgcolor={"black"} height={320} width={350} position={"absolute"} right={0} top={100}>
        <Typography variant='h5' color={"rgb(237, 238, 238)"} letterSpacing={.5}  fontWeight={"bold"}>Info</Typography>
         <Box  fontSize={10} component={"span"} display={"flex"} alignItems={"center"}>  <MailOutlineIcon sx={{mr:2}} /> Rohanprajapati3739@gmail.com</Box>
         <Box fontSize={10} component={"span"} display={"flex"}alignItems={"center"}> <CallIcon sx={{mr:2}}/> +91-8085020978</Box>
         <Box fontSize={10} component={"span"} display={"flex"}alignItems={"center"}> <LocationCityIcon sx={{mr:2}} /> vijay nagar , indore , Madhya pradesh </Box>

        <Box bgcolor={" rgb(245, 220, 55)"} width={"35px"} height={"35px"} position={"absolute"} left={-20} top={-20}></Box>
      </Box>
    </Box>
   </Box>
   </Box>
   </>
  )
}

export default Contact
