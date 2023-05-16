import React, { useState } from 'react'
import FastfoodItem from './FastfoodItem'
import cheese from '../assets/burgers/cheese.png'
import fries from '../assets/burgers/fries.png'
import chicken from '../assets/burgers/chicken.png'
import chicken2 from '../assets/burgers/chicken2.png'
import frychicken from '../assets/burgers/frychicken.png'
import fryrice from '../assets/burgers/fryrice.png'
import hotdog from '../assets/burgers/hotdog.png'
import milkshakes from '../assets/burgers/milkshakes.png'
import pizza from '../assets/burgers/pizza.png'
import sendwich from '../assets/burgers/sendwich.png'
const FastfoodContainer = () => {
    const [fastfood , setFastfood] = useState( [
        { 
          id : crypto.randomUUID(),
         title : "Cheese burger ",
         price : 80,
         Quantity : 1,
         image : cheese
        
        },
        { 
            id : crypto.randomUUID(),
          title : "French fries",
          price : 120,
          Quantity : 1,
          image : fries
         
         }, { 
            id : crypto.randomUUID(),
          title : "Chicken nuggets",
          price : 150,
          Quantity : 1,
          image : chicken  
         },
         { 
          id : crypto.randomUUID(),
        title : "Pizza slices",
        price : 100,
        Quantity : 1,
        image : pizza
       
       },
       { 
        id : crypto.randomUUID(),
      title : "Hot dogs",
      price : 40,
      Quantity : 1,
      image : hotdog
     },
     { 
      id : crypto.randomUUID(),
    title : "Fried chicken",
    price : 90,
    Quantity : 1,
    image : frychicken
   },
   { 
    id : crypto.randomUUID(),
  title : "Fried rice",
  price : 50,
  Quantity : 1,
  image : fryrice
 },
 { 
  id : crypto.randomUUID(),
title : "Sandwiches ",
price : 40,
Quantity : 1,
image : sendwich
},
{ 
  id : crypto.randomUUID(),
title : "Chicken wings",
price : 100,
Quantity : 1,
image : chicken2
},
{ 
  id : crypto.randomUUID(),
title : "Milkshakes",
price : 120,
Quantity : 1,
image : milkshakes
},

 ])
  return (
    <>
    {
        fastfood.map((fastfoods => <FastfoodItem key={fastfoods.id} fastfoods={fastfoods}/>))
    }
    </>
  )
}

export default FastfoodContainer
