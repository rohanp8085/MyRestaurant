import React, { useState } from 'react'
import coco from '../assets/drinks/cococola.png'
import DrinkItem from './DrinkItem'
import pepsi from '../assets/drinks/pepsi.png'
import sprite from '../assets/drinks/sprite.png'
import fanta from '../assets/drinks/fanta.png'
import Mountain from '../assets/drinks/Mountain.png'
import sevanup from '../assets/drinks/7-up.png'
import apple from '../assets/drinks/apple.png'
import fizz from '../assets/drinks/fizz.png'
import rootbeer from '../assets/drinks/rootbeer.png'
import orange from '../assets/drinks/orange.png'

const DrinkContainer = () => {

    const [Drink] = useState( [
        { 
          id : crypto.randomUUID(),
         title : "Coca Cola ",
         price : 50,
         Quantity : 1,
         image : coco
        
        },
        { 
            id : crypto.randomUUID(),
           title : "Pepsi ",
           price : 40,
           Quantity : 1,
           image : pepsi
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Sprite ",
           price : 40,
           Quantity : 1,
           image : sprite
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Fanta ",
           price : 45,
           Quantity : 1,
           image : fanta
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Mountain Dew",
           price : 55,
           Quantity : 1,
           image : Mountain
          
          },
          { 
            id : crypto.randomUUID(),
           title : "7-Up",
           price : 30,
           Quantity : 1,
           image : sevanup
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Root Beer",
           price : 55,
           Quantity : 1,
           image : rootbeer
          
          },
          { 
            id : crypto.randomUUID(),
           title : "fizz",
           price : 60,
           Quantity : 1,
           image : fizz
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Apple Juice",
           price : 30,
           Quantity : 1,
           image : apple
          
          },
          { 
            id : crypto.randomUUID(),
           title : "Orange Juice",
           price : 30,
           Quantity : 1,
           image : orange
          
          },
          
    ])

  return (
   <>
    {
        Drink.map((drinks => <DrinkItem key={drinks} drinks={drinks}/>))
    }
   </>
  )
}

export default DrinkContainer
