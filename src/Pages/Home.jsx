import React from 'react'
import banner from '../assets/phonefruit2.png'
import bike from '../assets/delivery.png'
import { Box ,Card,CardMedia,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import salad from '../assets/salad.png'
import burger2 from '../assets/burger2.png'
import kadai from '../assets/kadai.png'
import cooked from '../assets/cooked.png'
import { CheckBox, Fastfood } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';



const Home = () => {




 
  return (
    <>
   
        <Box    height={"100vh"} id="home" sx={{display:"flex",alignItems:"center",justifyContent:"space-between" ,padding:"20px" }} >
          
          <Box p={5} mb={5} className="container " >
          <button className='bikebtn'> Bike Delivery<img className='bikedelivery'  src={bike} alt="" /></button>
          <Typography id='food-text' variant='h3'my={2} fontWeight={"bold"}>The Fastest <br/>Delivery in <span className='city-text' > 
          <Typewriter options={{autoStart: true,
            loop:true,
            delay : 60,
            typeSpeed : 90,
            deleteSpeed : 80,
            strings : [
              "Your City",
              "Your Home",
              "Your Office"
            ]
            }}/>
            </span></Typography>
           <Typography>Grocen atssures fresh grocery every morning <br/>to your family without getting out in this pandemic.</Typography>
             <Link to={"/menu"}>
             <button className='orderbtn' >ORDER NOW</button>
             </Link>
             </Box>
              <Box mr={2} mb={-1}>
              <img  className='hero-image animated '  src={banner} alt="" />

              </Box>
                
        </Box>
             

        <Box id='dish-sec' width={"100%"} height={"100vh"} sx={{display:"flex" ,alignItems:"center" , justifyContent:"space-between" ,flexDirection :"column"}}>
           <Box>
           <Typography variant='h4' fontSize={40} fontWeight={"bold"}>Our Special Dish</Typography>
            <Typography textAlign={"center"} m={1} sx={{color:"gray"}}>Mode with premium ingredients.</Typography>
            <hr style={{width:"100%", marginBottom:20}}  ></hr>
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
         
        <Box  sx={{height:"100vh",display:"flex" , alignItems:"center", justifyContent:"center"}}>
             <Box id='cooked-sec' sx={{ width:"90%" ,display:"flex", alignItems:"center", justifyContent:"space-between"}}>
             <Box  id='cookedtext' sx={{height:"380px",p:1}}>
                <Typography id='h3' variant='h3'mb={3}  fontWeight={"bold"}>Cooked by the <br/> Best Chefs in the<br/> World</Typography>
                <Typography sx={{color:"gray",fontSize:13, my:2}}>We present the best chefs to cook your food to make <br/> the food taste extraordinary</Typography>
                <Box variant='span' sx={{display:"flex" , alignItems:"center" ,my:2}} >
                  <CheckBox sx={{color:"green" }}/>
                  <Typography mx={2}>A guaranteed delicious meal</Typography>
                </Box>

                <Box variant='span' sx={{display:"flex" , alignItems:"center" ,my:2}} >
                  <CheckBox sx={{color:"green" }}/>
                  <Typography mx={2}>A guaranteed delicious meal</Typography>
                </Box>

                <Box variant='span' sx={{display:"flex" , alignItems:"center" ,my:2}} >
                  <CheckBox sx={{color:"green" }}/>
                  <Typography mx={2}>A guaranteed delicious meal</Typography>
                </Box>
                
             </Box>
             <Box>
              <Box mx={-6} >
              <img  id='cooked-img' height={"450px"}  width={"450px"} src={cooked} alt="" />
              </Box>
             </Box>
             </Box>
       </Box>

       <Box sx={{height:"70vh" ,display:"flex", alignItems:"center",justifyContent:"center" }}>
        <Box className='footer' sx={{width:"82%",height:"60vh" ,bgcolor:"",p:4 , display:"flex",alignItems:"center" , justifyContent:"space-between"}}>
          
          <Box p={5} >
          <Box variant='span' sx={{display:"flex",alignItems:"center", my:2}}>
            <Fastfood sx={{ color: 'green', display: { xs: 'none', md: 'flex' ,fontSize:"35px"}, mr: 1 }} />
            <Typography variant='h6' textAlign={"center"} sx={{color:"green" , fontWeight:"bold"}}>My Restaurant</Typography>
            </Box>
            <Typography color={"gray"}>janata colony,patanipura<br/> nanda nagar Indore<br/> madhya pradesh<br/> Contact -: 8085020978 <br/>Rohan prajapati </Typography>
            <button id='icon-sec'><a href=""><InstagramIcon sx={{color:"black"}}/></a></button>
           <button id='icon-sec'><a href=""><FacebookIcon sx={{color:"black"}}/></a></button>
          <button id='icon-sec'> <a href=""><TwitterIcon sx={{color:"black"}}/></a></button>
        
          </Box>
        <Box id='ul' sx={{display:"flex",alignItems:"center", justifyContent:"space-evenly", width:"60%"}}>
        <Typography variant='ul'sx={{height:"180px", color:"gray", display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}>
         <Typography color={"black"} fontWeight={"bold"} fontSize={"13px"}>Information</Typography>
            <p>About Us</p>
            <p>More Search</p>
            <p>Testimanials</p>
            <p>Events</p>
         </Typography>

         <Typography variant='ul'sx={{height:"180px", color:"gray", display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}>
         <Typography color={"black"} fontWeight={"bold"} fontSize={"13px"}>Helpful Links</Typography>
            <p>Service</p>
            <p>Support</p>
            <p>Term & Condition</p>
            <p>Privacy</p>
         </Typography>

         <Typography variant='ul'sx={{height:"150px", color:"gray", display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
         <Typography color={"black"} fontWeight={"bold"} fontSize={"13px"}>Our Menu</Typography>
           
           <p>Special</p>
            <p>Popular</p>
            <p>Categories</p>
           
            
         </Typography>
         
        
        </Box>
        </Box>
       </Box>
       
   
   
    
    
    </>
  )
}

export default Home
