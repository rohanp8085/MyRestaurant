import React, {  useState } from 'react'
import VegItem from './VegItem'
import aloo from '../assets/paratha/aloo.png'
import chees from '../assets/paratha/chees.png'
import gobi from '../assets/paratha/gobi.png'
import keema from '../assets/paratha/keema.png'
import matar from '../assets/paratha/matar.png'
import methi from '../assets/paratha/methi.png'
import mooli from '../assets/paratha/mooli.png'
import palak from '../assets/paratha/palak.png'
import paneer from '../assets/paratha/paneer.png'
import pyaaz from '../assets/paratha/pyaaz.png'

const VegContainer = () => {

    const [veg , setVeg] = useState( [
        { 
          id : crypto.randomUUID(),
         title : "Aloo paratha",
         price : 25,
         Quantity : 1,
         image : aloo
        
        },
        { 
            id : crypto.randomUUID(),
          title : "Methi paratha",
          price : 30,
          Quantity : 1,
          image : methi
         
         }, { 
            id : crypto.randomUUID(),
          title : "Gobi paratha",
          price : 40,
          Quantity : 1,
          image : gobi   
         },
         { 
          id : crypto.randomUUID(),
        title : "Paneer paratha",
        price : 40,
        Quantity : 1,
        image : paneer
       
       },
       { 
        id : crypto.randomUUID(),
      title : "Mooli paratha",
      price : 30,
      Quantity : 1,
      image :mooli
     },
     { 
      id : crypto.randomUUID(),
    title : "Pyaaz paratha",
    price : 25,
    Quantity : 1,
    image : pyaaz
   },
   { 
    id : crypto.randomUUID(),
  title : "Palak paratha",
  price : 20,
  Quantity : 1,
  image : palak
 },
 { 
  id : crypto.randomUUID(),
title : "Matar paratha",
price : 30,
Quantity : 1,
image : matar
},
{ 
  id : crypto.randomUUID(),
title : "Cheese paratha",
price : 40,
Quantity : 1,
image : chees
},
{ 
  id : crypto.randomUUID(),
title : "Keema paratha",
price : 35,
Quantity : 1,
image : keema
},



 
 
     
       
      ])

    
    
  

    if(!veg || veg.length === 0){
        return(
            <div class="square-circle-10"></div>
        )
    }
  return (
    <>
   {
    veg.map((vegitems =><VegItem key={vegitems.id} vegitems={vegitems}/>))
   }
    
    </>
  )
}

export default VegContainer
