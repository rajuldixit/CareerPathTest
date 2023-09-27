import { Box, FormControlLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ScaleUnits } from '../utils/constants'

const CustomScale = (props: {idx: number, handleOptionSelection: (option: string) => void}) => {
  const [value, setValue] = useState('-1'),
  {handleOptionSelection, idx} = props,
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
    handleOptionSelection((event.target as HTMLInputElement).value)
  };
  useEffect(() => {
    setValue('-1')
  },[idx])

  return (
    <Stack>
      <Box sx={{width: '500px'}}>
      <RadioGroup
          aria-labelledby="scale"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          row
          sx={{justifyContent: 'space-between'}}
      >
          <FormControlLabel value="0" control={<Radio />} label="" />
          <FormControlLabel value="1" control={<Radio />} label="" />
          <FormControlLabel value="2" control={<Radio />} label="" />
          <FormControlLabel value="3" control={<Radio />} label="" />
          <FormControlLabel value="4" control={<Radio />} label="" />
          <FormControlLabel value="5" control={<Radio />} label="" />
          <FormControlLabel value="6" control={<Radio />} label="" />
          <FormControlLabel value="7" control={<Radio />} label="" />
      </RadioGroup>  
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', width: '475px'}}>
        <Typography variant='caption' gutterBottom>{ScaleUnits.STRONGLY_DISAGREE}</Typography>
        <Typography variant='caption' gutterBottom>{ScaleUnits.STRONGLY_AGREE}</Typography>
      </Box>
    </Stack>
  )
}

export default CustomScale