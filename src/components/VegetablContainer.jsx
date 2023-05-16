import React, { useState } from 'react'
import VegetableItem from './VegetableItem'
import aloogobi from '../assets/vegitables/aloogobi.png'
import baingan from '../assets/vegitables/baingan.png'
import palakpaneer from '../assets/vegitables/palakpaneer.png'
import bhindi from '../assets/vegitables/bhindi.png'
import chanamasala from '../assets/vegitables/chanamasala.png'
import malaikofta from '../assets/vegitables/malaikofta.png'
import matarpaneer from '../assets/vegitables/matarpaneer.png'
import methialoo from '../assets/vegitables/methialoo.png'
import mixveg from '../assets/vegitables/mixveg.png'
import sahipaneer from '../assets/vegitables/sahipaneer.png'

const VegetablContainer = () => {

    const [vegetable ] = useState( [
        { 
          id : crypto.randomUUID(),
         title : "Aloo Gobi ",
         price : 70,
         Quantity : 1,
         image : aloogobi
        
        },
        { 
            id : crypto.randomUUID(),
           title : "Baingan Bharta ",
           price : 60,
           Quantity : 1,
           image : baingan
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Palak Paneer ",
           price : 80,
           Quantity : 1,
           image : palakpaneer
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Bhindi Masala ",
           price : 70,
           Quantity : 1,
           image : bhindi
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Malai Kofta ",
           price : 90,
           Quantity : 1,
           image : malaikofta
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Shahi Paneer ",
           price : 140,
           Quantity : 1,
           image : sahipaneer
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Chana Masala ",
           price : 120,
           Quantity : 1,
           image : chanamasala
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Mix Vege Curry ",
           price : 85,
           Quantity : 1,
           image : mixveg
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Methi Aloo",
           price : 75,
           Quantity : 1,
           image : methialoo
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Matar Paneer",
           price : 95,
           Quantity : 1,
           image : matarpaneer
          
          }
    ])
  return (
   <>
   {
    vegetable.map((vegetables =><VegetableItem key={vegetables.id} vegetables={vegetables}/>
    ))
   }
   </>
  )
}

export default VegetablContainer
