import React, { useContext } from 'react'
import { Box,  Card, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import  ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CartContext from '../Context/CartContext';


const DrinkItem = ({drinks}) => {

const {image , price , title } = drinks

const {dispatch} = useContext(CartContext)

const handleAdd = (drinks) =>{
        dispatch({
          type : "ADD_CART",
          payload : drinks
        }) 
}

  return (
    <Card id='card' sx={{  height:120  , my:2 ,display:"flex" ,alignItems:"flex-start" ,justifyContent:"space-between",position:"relative"}}>
    <CardMedia  className='image-sec'
      sx={{ height: 65 ,width: 100 }}
      image={image}/>
      <button id='cart-btn' style={{position:"absolute",bottom:10,left:20,color:"white",border:"none",fontSize:12,padding:"1px 15px",borderRadius:10}}onClick={()=>handleAdd(drinks)} >Buy</button>

  <CardContent sx={{display:"flex" , alignItems:"center",flexDirection:"column", justifyContent:"space-between",height:"120px"}} >
    {/* <Box sx={{display:"flex " , alignItems:"flex-start",justifyContent:"flex-end",width:100}}> */}
   <button style={{backgroundColor:"red",border:"none",padding:"1px 4px",borderRadius:20,marginLeft:"70px"}} sx={{bgcolor:"red" , borderRadius:10  }}><ShoppingBasketIcon sx={{color:"white" ,fontSize:15,mt:"2px"}}/></button>
    

      <Box sx={{display:"flex " , alignItems:"center",justifyContent:"space-between",height:"40px",flexDirection:"column",pl:"45px"}}>
      <Typography variant='h7' fontWeight={"bold"} fontSize={13}>{title}</Typography>

     <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}> <button style={{backgroundColor:"red",color:"white",height:"13px",width:"13px",borderRadius:15,border:"none",margin:"5px"}}> <CurrencyRupeeIcon sx={{fontSize:10,mb:"3px",fontWeight:'bold'}}/></button>
       <Typography  variant='h7'fontWeight={"bold"} color={"red"} >   {price}.00 </Typography></span>
      </Box>
    </CardContent>
    

  </Card>
  )
}

export default DrinkItem
