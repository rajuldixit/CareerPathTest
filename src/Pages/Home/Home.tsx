import { InputAdornment, OutlinedInput, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

const Home = () => {
  const navigate = useNavigate(),
  [username, setUsername] = useState(''),
  showDashboard = () => {
    navigate({
      pathname: "/dashboard",
      search: `?user=${username}`, // inject code value into template
    })
  }  
  return (
    <>
      <Typography>Hi, Lets get started with your Career Path Test</Typography>
      <OutlinedInput
        id="username"
        onChange={(event) => setUsername(event.target.value)}
        endAdornment={<InputAdornment position="end" sx={{cursor:'pointer'}}><ArrowForwardIcon onClick={showDashboard} /></InputAdornment>}
        aria-describedby="username-helper-text"
        inputProps={{
            'aria-label': 'username',
        }}
      />
    </>
  )
}

export default Home