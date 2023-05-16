import React from 'react'
import { Box, Typography } from '@mui/material'
import aboutimg from '../assets/about.jpg'

import { styled } from '@mui/material/styles';

import ButtonBase from '@mui/material/ButtonBase';
import { CheckBox } from '@mui/icons-material';
import { px, transform } from 'framer-motion';
import { motion } from 'framer-motion';


const About = () => {
  return (
      <>
              <Box sx={{p:4 , textAlign: "center"}}>
               <h1 
                className='about' variant='h5' animate={{transform:transform}}>About
                </h1>
               <Typography color={"gray"} mt={1} fontSize={14}>"At the heart of our restaurant is a team of dedicated chefs and staff <br/> who are committed to providing exceptional service and unforgettable flavors."</Typography>
             </Box>
             
             <Box id='aboutimg' height={"80vh"} px={4} py={0} display={"flex"} alignItems={"center"}  justifyContent={"space-between"} width={"100%"}>
              <img id='fruitimg' className='animated' src={aboutimg} alt="" />
               <Box mt={4}  id='about-text' display={"flex"} alignItems={"flex-start"}  flexDirection={"column"}>
                <Box  display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"}><CheckBox sx={{color:"green" , mx:1,mt:0.5}}/> <Typography  variant='h6'mb={3} > Experience the flavors of My Restaurant</Typography></Box>
                <Box  display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"}><CheckBox sx={{color:"green" , mx:1,mt:0.5}}/> <Typography  variant='h6'mb={3} > Discover our culinary story</Typography></Box>
                <Box  display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"}><CheckBox sx={{color:"green" , mx:1,mt:0.5}}/> <Typography  variant='h6'mb={3} > Crafted with passion, served with pride</Typography></Box>
                <Box  display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"}><CheckBox sx={{color:"green" , mx:1,mt:0.5}}/> <Typography  variant='h6'mb={3} > Unforgettable food, unforgettable memories</Typography></Box>
                <Box  display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"}><CheckBox sx={{color:"green" , mx:1,mt:0.5}}/> <Typography  variant='h6'mb={3} > Welcome to My Restaurant , where every dish tells a story</Typography></Box>


              
               </Box>
             </Box>
            
             

        </>     

        
    )
}

export default About
