import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import salad from '../assets/salad.png'
import burger2 from '../assets/burger2.png'
import kadai from '../assets/kadai.png'

const SpecialDish = () => {
  return (
    <Box id='dish-sec' width={"100%"} height={"100vh"} sx={{display:"flex" ,alignItems:"center" , justifyContent:"space-between" ,flexDirection :"column"}}>
           <Box>
           <Typography variant='h4' fontSize={40} fontWeight={"bold"}>Our Special Dish</Typography>
            <Typography textAlign={"center"} m={1} sx={{color:"gray"}}>Mode with premium ingredients.</Typography>
            <hr style={{width:"100%"}}  ></hr>
           </Box>
           <Box className='special-sec animated' sx={{ width :"90%", display:"flex" ,alignItems:"center" , justifyContent:"space-between" }}>
           <Card  id='cardtwo' sx={{height:"350px", width:"250px" , p :1, borderRadius: 4,display:"flex" , alignItems:"center" , justifyContent:"space-evenly", flexDirection:"column"}}>
           <CardMedia   sx={{ height: 170 ,width: "100%" }}image={salad}/>
           <Typography variant='h4' fontWeight={550} fontSize={26}>Green Salad</Typography>
           <Typography variant='p' fontWeight={550} fontSize={14} textAlign={"center"}>A green salad filled with cabbage,<br/> mustrad greens, and added chicken <br/>pieces for a more delicious,</Typography>
           </Card>

           <Card id='cardtwo' sx={{height:"350px", width:"250px" , p :1, borderRadius: 4,display:"flex" , alignItems:"center" , justifyContent:"space-evenly", flexDirection:"column"}}>
           <CardMedia   sx={{ height: 170 ,width: "100%" }}image={burger2}/>
           <Typography variant='h4' fontWeight={550} fontSize={26}>Burger</Typography>
           <Typography variant='p' fontWeight={550} fontSize={14} textAlign={"center"}>Burgers are a type of sandwich made with a ground meat patty  on a bun with various toppings such as lettuce </Typography>
           </Card>

           <Card id='cardtwo' sx={{height:"350px", width:"250px" , p :1, borderRadius: 4,display:"flex" , alignItems:"center" , justifyContent:"space-evenly", flexDirection:"column"}}>
           <CardMedia   sx={{ height: 170 ,width: "100%" }}image={kadai}/>
           <Typography variant='h4' fontWeight={550} fontSize={26}>Vegetables</Typography>
           <Typography variant='p' fontWeight={550} fontSize={14} textAlign={"center"}>"Fuel Your Body with the Power of Plants: Embrace the Colorful World of Vegetables!"</Typography>
           </Card>
           
           </Box>
        </Box>
  )
}

export default SpecialDish
