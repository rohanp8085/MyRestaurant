import React from 'react'
import { Box, Typography } from '@mui/material'
import CardContainer from '../components/CardContainer';
import VegContainer from '../components/vegContainer';
import FastfoodContainer from '../components/FastfoodContainer';
import VegetablContainer from '../components/VegetablContainer';
import DrinkContainer from '../components/DrinkContainer';


const Menu = () => {

  return (
    <>

      <Typography variant='h5' width={290} mx={5} my={4} borderBottom={"2px solid orange"}>

        Our Fresh & Healthy Fruits


      </Typography>
      <Box sx={{ Minheight: "50vh", width: "100%", px: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>

        <CardContainer />


      </Box>

      <Typography variant='h5' width={150} mx={5} my={4} borderBottom={"2px solid orange"}>

        Our Paratha's

      </Typography>

      <Box sx={{ minHeight: "50vh", width: "100%", px: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <VegContainer />
      </Box>
      <Typography variant='h5' width={170} mx={5} my={4} borderBottom={"2px solid orange"}>

        fast food dishes


      </Typography>
      <Box sx={{ minHeight: "50vh", width: "100%", px: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <FastfoodContainer />
      </Box>

      <Typography variant='h5' width={200} mx={5} my={4} borderBottom={"2px solid orange"}>

        Vegetable dishes


      </Typography>
      <Box sx={{ minHeight: "50vh", width: "100%", px: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <VegetablContainer />
      </Box>

      <Typography variant='h5' width={130} mx={5} my={4} borderBottom={"2px solid orange"}>

        Soft Drinks


      </Typography>
      <Box sx={{ minHeight: "50vh", width: "100%", px: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <DrinkContainer />
      </Box>

    </>

  )
}

export default Menu
