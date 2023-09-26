import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { HeroBannerHeading, HeroBannerSubHeading } from '../utils/constants'

const HeroBanner = () => {
  return (
    <>
      <Stack m={2} sx={{position:'relative', boxSizing: 'border-box', background:'aliceblue'}}>
        <Box>
          <img src='https://fhc-frontend.onrender.com/assets/discover-journey-maze.svg' style={{objectFit: 'cover', height: '40vh', float: 'right'}} />
        </Box>  
        <Typography variant='h5' sx={{position: 'absolute', top: '70%', left: '2%'}}>{HeroBannerHeading}</Typography>
        <Typography variant='h6' sx={{position: 'absolute', top: '80%', left: '2%'}}>{HeroBannerSubHeading}</Typography>
      </Stack>
    </>
  )
}

export default HeroBanner