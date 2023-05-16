import React from 'react'
import { Box , Button, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
import CardContainer from '../components/CardContainer';
import VegContainer from '../components/vegContainer';
import FastfoodContainer from '../components/FastfoodContainer';
import VegetablContainer from '../components/VegetablContainer';
import DrinkContainer from '../components/DrinkContainer';


const Menu = () => {
 
  return (
   <>

      <Typography variant='h5' width={350} mx={5}my={4}borderBottom={"2px solid orange"}>
      <Typewriter options={{autoStart: true,
            loop:true,
            delay : 80,
            strings : [
              "Our Fresh & Healthy Fruits",
             
            ]
            }}/> 
         </Typography>
    <Box sx={{Minheight:"50vh",width:"100%" ,px:3 ,display:"flex" ,alignItems:"center" , justifyContent:"space-evenly", flexWrap:"wrap"}}>
      
   <CardContainer/>
   
   
    </Box>
      
      <Typography variant='h5' width={200} mx={5}my={4}borderBottom={"2px solid orange"}>  <Typewriter options={{autoStart: true,
            loop:true,
            delay : 80,
            strings : [
              "Our Paratha's",
             
            ]
            }}/> </Typography>

<Box sx={{minHeight:"50vh",width:"100%" ,px:3 ,display:"flex" ,alignItems:"center" , justifyContent:"space-evenly", flexWrap:"wrap"}}>
 <VegContainer/>
</Box>  
<Typography variant='h5' width={200} mx={5}my={4}borderBottom={"2px solid orange"}>
      <Typewriter options={{autoStart: true,
            loop:true,
            delay : 80,
            strings : [
              " fast food dishes",
             
            ]
            }}/> 
         </Typography>
         <Box sx={{minHeight:"50vh",width:"100%" ,px:3 ,display:"flex" ,alignItems:"center" , justifyContent:"space-evenly", flexWrap:"wrap"}}>
         <FastfoodContainer/>
      </Box> 

      <Typography variant='h5' width={250} mx={5}my={4}borderBottom={"2px solid orange"}>
      <Typewriter options={{autoStart: true,
            loop:true,
            delay : 80,
            strings : [
              " Vegetable dishes",
             
            ]
            }}/> 
         </Typography>
         <Box sx={{minHeight:"50vh",width:"100%" ,px:3 ,display:"flex" ,alignItems:"center" , justifyContent:"space-evenly", flexWrap:"wrap"}}>
         <VegetablContainer/>
      </Box> 

      <Typography variant='h5' width={150} mx={5}my={4}borderBottom={"2px solid orange"}>
      <Typewriter options={{autoStart: true,
            loop:true,
            delay : 80,
            strings : [
              " Soft Drinks",
             
            ]
            }}/> 
         </Typography>
         <Box sx={{minHeight:"50vh",width:"100%" ,px:3 ,display:"flex" ,alignItems:"center" , justifyContent:"space-evenly", flexWrap:"wrap"}}>
         <DrinkContainer/>
      </Box>
      
</>
    
  )
}

export default Menu
