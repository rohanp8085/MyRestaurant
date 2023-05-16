import React, { useState } from 'react'
import image2 from '../assets/f2.png'
import image3 from '../assets/f3.png'
import image5 from '../assets/f5.png'
import image8 from '../assets/f8.png'
import image9 from '../assets/f9.png'
import image10 from '../assets/f10.png'
import image6 from '../assets/f6.png'
import image7 from '../assets/f7.png'
import CardItem from './CardItem'


const CardContainer = () => {

  const [Fruits, setFruits] = useState([

    {
      id: crypto.randomUUID(),
      image: image2,
      title: "Pine Apple",
      Calories: "2.3",
      price: 25,
      Quantity: 1
    },

    {
      id: crypto.randomUUID(),
      image: image3,
      title: "Blue Berries",
      Calories: "3.1",
      price: 500,
      Quantity: 1
    },
    {
      id: crypto.randomUUID(),
      image: image5,
      title: "StrawBerries",
      Calories: "4.1",
      Quantity: 1,
      price: 100
    },

    {
      id: crypto.randomUUID(),
      image: image6,
      title: "Pomegranate",
      Calories: "2.4",
      Quantity: 1,
      price: 160
    },

    {
      id: crypto.randomUUID(),
      image: image7,
      title: "Rasperry",
      Calories: "3.1",
      Quantity: 1,
      price: 80
    },

    {
      id: crypto.randomUUID(),
      image: image8,
      title: " Cherry",
      Calories: "3.1",
      Quantity: 1,
      price: 390
    },

    {
      id: crypto.randomUUID(),
      image: image9,
      title: "Banana",
      Calories: "4",
      Quantity: 1,
      price: 48
    },

    {
      id: crypto.randomUUID(),
      image: image10,
      title: "watermelon",
      Quantity: 1,
      Calories: "3",
      price: 12
    },

    {
      id: crypto.randomUUID(),
      image: "https://freepngimg.com/thumb/orange/34-orange-png-image-download-thumb.png",
      title: "Orange",
      Calories: "4",
      Quantity: 1,
      price: 30
    },

    {
      id: crypto.randomUUID(),
      image: "https://freepngimg.com/thumb/mango/9-2-mango-transparent-thumb.png",
      title: "Mango",
      Calories: "5",
      Quantity: 1,
      price: 50
    },


  ])

  if (!Fruits || Fruits.length === 0) {
    return (
      <div class="square-circle-10"></div>
    )
  }
  return (
    <>
      {
        Fruits.map(fruit => <CardItem key={fruit.id} fruit={fruit} />)
      }
    </>
  )
}

export default CardContainer
