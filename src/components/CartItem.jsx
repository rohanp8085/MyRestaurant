import { Box,  CardMedia, Typography } from '@mui/material'
import React, { useContext }  from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import CartContext from '../Context/CartContext';


const CartItem = ({cartitem}) => {
        
const {decrement,increment,handleRemove} = useContext(CartContext)

const {image, title , price,Quantity,id} = cartitem

  return (
    <>
    
     <Box id='updatecart' sx={{width:270,height:90,borderRadius:2,p:1,display:"flex",alignItems:"center",justifyContent:"space-between",mb:4,cursor:"pointer"}}>
         <CardMedia className='image-sec'sx={{ height: 60 ,width: 75 ,mb:1}}image={image}/>
         
         
       <Box sx={{height:"70px" ,display:"flex",alignItems:"spa",justifyContent:"flex-start",mr:"20px",mt:"10px",flexDirection:"column"}}>
       <Typography variant='h7' fontWeight={"bold"} color={"white"} fontSize={12}>{title}</Typography>

       <Box sx={{height:"20px" ,display:"flex",alignItems:"center",justifyContent:"flex-start",mt:"0px"}}>
         <button style={{backgroundColor:"gray",color:"white",height:"12px",width:"12px",borderRadius:15,border:"none"}}> 
        <CurrencyRupeeIcon sx={{fontSize:8,mb:"4px",fontWeight:'bold',color:"white"}}/>
        </button>
       <Typography  variant='h7'fontWeight={"bold"} color={"gray"} margin={"5px "} fontSize={"10px"} >{price}.00 </Typography>
       </Box>
       </Box>
       
       
       <Box  width={70} height={80}  display={"flex"} alignItems={"center"} justifyContent={"space-between"}  color={"white"} flexDirection={"column"}>
            <button style={{borderRadius:"15px" , display:"flex",alignItems:"center", justifyContent:"center", border:"none",marginLeft:40,height:"30px",width:"30px",backgroundColor:"transparent"}}onClick={() => handleRemove(id)} ><RemoveCircleSharpIcon sx={{color:"red",fontSize:'23px'}}/></button>
        <Box  width={85} padding={"2px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}  color={"white"}>
               <button style={{backgroundColor:"black",color:"white",border:"none",display:"flex" , alignItems:"center", padding:"2px",borderRadius:"5px"}} onClick={()=>decrement(id)}><RemoveIcon sx={{fontSize:15,cursor:"pointer"}}/></button>
               <Typography fontSize={14}>{Quantity}</Typography>
               <button style={{backgroundColor:"black",color:"white",border:"none",display:"flex" , alignItems:"center", padding:"2px",borderRadius:"5px"}}onClick={()=>increment(id)} ><AddIcon sx={{fontSize:15,cursor:"pointer"}}/></button>
        </Box>
        </Box>
        </Box>
        
    </>
  )
}

export default CartItem
