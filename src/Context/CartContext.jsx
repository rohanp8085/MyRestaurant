import {  createContext, useEffect, useReducer } from "react"
import CartReducer from "./CartReducer"


const CartContext = createContext() 

export const CartProvider = ({children}) => {

    const intialState = {
      cart : [],
      totalAmount : "",
     
    }
    
    const [state , dispatch] = useReducer(CartReducer , intialState)
   


    const handleRemove = (id) =>{
         return dispatch({
          type : "DELETE",
          payload : id ,
         })
    }

    const decrement = (id) =>{
      return dispatch({
        type : "DECREMENT",
        payload : id,
      })
    }

    const increment = (id) =>{
      return dispatch({
         type : "INCREMENT",
         payload : id ,

        })
    }
    const clearCart = ()=>{
      return dispatch({
        type : "CLEAR_CART"
      })
    }

    useEffect(() => {

      dispatch({type : "TOTAL_PRICE"})
    
   }, [state.cart])
   

    
      return(
        <CartContext.Provider value={{
          ...state,
          dispatch,
          decrement,
          increment,
          handleRemove,
          clearCart,
        }}>
           {children}
        </CartContext.Provider>
      )
}
export default CartContext