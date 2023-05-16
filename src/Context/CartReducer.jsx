 const CartReducer = (state , action) =>{
 



 switch(action.type){

  

    case "ADD_CART" :

     let {id,Quantity} = action.payload

    let existingProduct = state.cart.find(
      (curElem)=> curElem.id == id
    )
    if(existingProduct){
      let updatedProduct = state.cart.map((curElem)=>{
        if(curElem.id == id){
          let newAmount = curElem.Quantity + Quantity
        
          return{
            ...curElem,
            Quantity : newAmount
            
           }
        } else{
          return curElem  
        }
        
        
      })
      
          return{
            ...state,
            cart : updatedProduct
            
          } 
          
    }else{
      

     return{
        ...state,
         cart : [...state.cart, action.payload]  
            
      }
    }

      case "DELETE":
      
      return{
        ...state,
        cart: state.cart.filter((curElem) => curElem.id !== action.payload)
      }
     
      case "CLEAR_CART" :
        return{
          ...state,
          cart : []
        }
      case "DECREMENT":
        
      const updatedDecrement = state.cart.map((curElem) => {
        if(curElem.id === action.payload){
          return{...curElem, Quantity: curElem.Quantity -1}
        }
        return curElem
      }).filter((curElem) => curElem.Quantity !== 0 )
      return{...state , cart : updatedDecrement}
   

      case "INCREMENT":
        
      const updatedIncrement = state.cart.map((curElem) => {
        if(curElem.id === action.payload){
          return{...curElem, Quantity: curElem.Quantity +1}
        }
        return curElem
      })
      return{...state , cart : updatedIncrement}
      
    case "TOTAL_PRICE":
    
     const total_Price = state.cart.reduce((intialVal,curElem) => {
       const {price , Quantity} = curElem

       intialVal = intialVal + price * Quantity

       return intialVal
     },0)
     return {
      ...state,
      totalAmount : total_Price
     }
    
       
    

    default :
    return state

 }
 
 
 

}
export default CartReducer