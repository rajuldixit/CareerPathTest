import { Box, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

const Home = () => {
  const navigate = useNavigate(),
  [username, setUsername] = useState(''),
  showDashboard = () => {
    if(username) {
      navigate({
        pathname: "/dashboard",
        search: `?user=${username}`, // inject code value into template
      })
    }
  }  
  return (
    <Stack spacing={4} p={4} m={4} boxSizing={'border-box'}>
      <Typography textAlign={'center'} variant='h4' fontWeight={'bold'}>Hi, Lets get started with your Career Path Test</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <OutlinedInput
          id="username"
          placeholder='please enter your name'
          onChange={(event) => setUsername(event.target.value)}
          endAdornment={<InputAdornment position="end" sx={{cursor:username ? 'pointer': ''}}><ArrowForwardIcon onClick={showDashboard} /></InputAdornment>}
          aria-describedby="username-helper-text"
          inputProps={{
              'aria-label': 'username',
          }}
          sx={{width: '300px', margin: '0 auto'}}
        />
      </Box>
    </Stack>
  )
}

export default Home