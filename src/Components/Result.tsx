import { Stack, Box, Typography, Button } from '@mui/material'
import React from 'react'
import { ResultAckMessage } from '../utils/constants'

const Result = (props: {completionDate: string}) => {
  const { completionDate } = props

  return (
    <Stack sx={Wrap}>
      <Box sx={ImageWrap}>
        <img src={'https://fhc-frontend.onrender.com/assets/graduation.svg'} style={{borderRadius: '16px'}} alt='' />
      </Box>
      <Stack sx={TextWrap} spacing={2}>
        <Typography variant='h6' fontWeight={'bold'} lineHeight={2}>Completed on {completionDate}</Typography>
        <Typography variant='body1' lineHeight={2}>{ResultAckMessage}</Typography>
        <Button variant='contained' color='warning' sx={{width: '200px', marginBottom: '20px'}}>See your results</Button>
      </Stack>
    </Stack>
  )
}

const Wrap = {
  position: 'relative', 
  boxSizing: 'border-box', 
  borderRadius: '16px',
  '-webkit-box-shadow': '1px 5px 5px 4px rgba(224,213,224,1)',
  '-moz-box-shadow': '1px 5px 5px 4px rgba(224,213,224,1)',
  boxShadow: '1px 5px 5px 4px rgba(224,213,224,1)',
  paddingBottom: '20px',
  width: '80%',
  margin: '16px auto'
};
const TextWrap = {
  position: 'absolute', 
  width: '100%', 
  height: '40%', 
  top: '60%', 
  background:'white', 
  borderRadius: '0 0 16px 16px',
  padding: '16px 20px',
  boxSizing: 'border-box'
};
const ImageWrap = {
  background: '#ed6c02',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '16px'
}

export default Result