
import React, { useContext, useState } from 'react'
import { ShoppingCart } from '@mui/icons-material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CartItem from './CartItem';
import CartContext from '../Context/CartContext';
import { Box, Button, Typography } from '@mui/material';
import emptycart from '../assets/empty_cart.png'

const CartContainer = () => {
    const [sidebar , setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    const {cart,totalAmount,clearCart} = useContext(CartContext)
    
    const Shipingcharges = 40

    

    

    if(cart.length === 0){
        return(
            <>
            <ShoppingCart className='cart' onClick={showSidebar}/><button id='cartbtn' onClick={showSidebar}>{cart.length} </button>
             <Box
     zIndex={1} id={sidebar ? 'cartsidebar' :  '  active'}
       bgcolor={"white"}
        position={"fixed"}
          right={0} top={0}
           height={"120vh"}
            width={"300px"}  
            
            sx={{transition:"all ease-in-out .4s",display:"flex", flexDirection:"column",alignItems:"center",overflow:"scroll",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} p={0}
    >
        <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-between",bgcolor:"white" ,width:300,minHeight:60,px:2} }>
          <Box>
           <KeyboardBackspaceIcon id='righticon' sx={{color:"black",  fontSize:28}} onClick={showSidebar} />
          </Box>
          <Typography color="black" variant='h7' ml={5}><ShoppingCart/></Typography>
          <Button id='p' color="black" borderRadius={5} width={"80px"} variant='p' display={"flex"} alignItems={"center"} justifyContent={"center"} onClick={() => clearCart()}>clear <ClearAllIcon/> </Button>
        </Box>
        
        <Box  width={270} minHeight={"80vh"} borderRadius={"15px 15px 0px 0px"} color={"white"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <img height={230} width={290} src={emptycart} alt="" />
            <Typography variant='h7'  color={"black"} mt={1}>Add some items to your cart</Typography>
           </Box>
       
       
      
    </Box>
             </>
        )
    }

  return (
    <div>
      <ShoppingCart className='cart' onClick={showSidebar}/><button id='cartbtn' onClick={showSidebar}
             >{cart.length} </button>

<Box
     zIndex={1} id={sidebar ? 'cartsidebar' :  '  active'}
       bgcolor={"black"}
        position={"fixed"}
          right={0} top={0}
           height={"100vh"}
            width={"300px"}  
            
            sx={{transition:"all ease-in-out .4s",display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"space-between",overflow:"scroll",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} p={0}
    >
        <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-between",bgcolor:"white" ,width:"300px",minHeight:70,px:2} }>
          <Box>
           <KeyboardBackspaceIcon id='righticon' sx={{color:"black",  fontSize:28}} onClick={showSidebar} />
          </Box>
          <Typography color="black" variant='h7' ml={5}><ShoppingCart/></Typography>
          <Button id='p' color="black" borderRadius={5} width={"80px"} variant='p' display={"flex"} alignItems={"center"} justifyContent={"center"} onClick={() => clearCart()}>clear <ClearAllIcon/> </Button>
        </Box>
        <Box 
        sx={{bgcolor:"transparent",
        
        borderRadius:"20px",
        
        width:270,
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        py:5,
        
        flexDirection:"column",
        
        }}>
          
         {
          cart.map(cartitem =><CartItem key={cartitem.id} cartitem={cartitem}/> )
         }
         
         
        
          
          
          
          

        </Box>
        <Box  width={270} minHeight={"40vh"} borderRadius={"15px 15px 0px 0px"} color={"white"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-evenly"}>
            <Box color={"gray"} width={250} display={"flex"} justifyContent={"space-between"}><Typography>Subtotal</Typography> <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}><CurrencyRupeeIcon sx={{fontSize:15,fontWeight:"bold"}}/> <Typography> {totalAmount}</Typography></span> </Box>
            <Box color={"gray"} width={250} display={"flex"} justifyContent={"space-between"}><Typography>Shiping Charges</Typography> <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}><CurrencyRupeeIcon sx={{fontSize:15,fontWeight:"bold"}}/> <Typography> {Shipingcharges}</Typography></span> </Box>
             <hr color='gray' style={{width:250}}/>
            
             <Box width={245} display={"flex"} justifyContent={"space-between"}><Typography>Order Total</Typography> <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}><CurrencyRupeeIcon sx={{fontSize:15,fontWeight:"bold"}}/> <Typography> {totalAmount + Shipingcharges}</Typography></span> </Box>

            
            <Button id='pay-btn' sx={{bgcolor:"orange", color:"white", fontWeight:"bold",width:"250px",borderRadius:10}}>Pay Now</Button>

           </Box>
       
       
      
    </Box>
    </div>
  )
}

export default CartContainer
