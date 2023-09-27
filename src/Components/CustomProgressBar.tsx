import { Box, LinearProgress, LinearProgressProps, Typography } from '@mui/material';
import React from 'react'

const CustomProgressBar = (props: LinearProgressProps & { value: number }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
     <Box sx={{ minWidth: 35 }}>
        <Typography variant="h6" fontWeight={'bold'} color="text.secondary">Your progress - {`${Math.round(
            props.value,
        )}%`}</Typography>
      </Box>   
      <Box sx={{ width: '30%', ml: 1}}>
        <LinearProgress sx={{height: '16px', borderRadius: '8px'}} variant="determinate" {...props} />
      </Box>
      
    </Box>
  );
}

export default CustomProgressBar