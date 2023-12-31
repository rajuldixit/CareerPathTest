import React, { useEffect, useState } from 'react'
import { InfoQuestionCard, InfoAdviceCard, InfoInsightCard } from '../utils/constants'
import { Box, Stack, Typography } from '@mui/material'

export type Card = {
    id: string,
    title: string, 
    description: string,
    icon: string
}

const BorderColors = ['orange', 'purple', 'yellow']
const CareerInfoCards = (props: { handleCardClick: (cardId: string) => void}) => {
  const [infoCards, setInfoCards] = useState<Array<Card>>(new Array()),
  {handleCardClick} = props;

  let isUseEffectRan = false

  useEffect(() => {
    if(!isUseEffectRan)
    setInfoCards(prev => [...prev, InfoQuestionCard, InfoInsightCard, InfoAdviceCard])
    
    isUseEffectRan = true
    return;
  }, [])
  return (
    <>
      {
        (infoCards && infoCards.length > 0) ? <Stack direction={'row'} justifyContent={'center'} spacing={6} p={4} m={4} sx={{boxSizing: 'border-box'}}>
          {
            infoCards.map((card: Card, index: number) => {
              return <Box sx={BoxStyle} key={index} onClick={() => handleCardClick(card.id)}>
                <Box sx={[{border: `2px solid ${BorderColors[index]}`},IconCircle]}>
                   <img src={card.icon} alt='icon' /> 
                </Box>
                <Typography variant='h6' sx={{position:'absolute', left: '40px', top: '30px', fontWeight: 'bold'}}>{card.title}</Typography>
                <Typography variant='body2' sx={{position:'absolute', left: '40px', top: '70px'}}>{card.description}</Typography>
              </Box>  
            })
          }
        </Stack> : <></>
      }  
    </>
  )
}

const BoxStyle = {
    WebkitBoxShadow: '1px 5px 5px 4px rgba(224,213,224,1)',
    MozBoxShadow: '1px 5px 5px 4px rgba(224,213,224,1)',
    boxShadow: '1px 5px 5px 4px rgba(224,213,224,1)',
    borderRadius: '16px',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    minWidth: '25%',
    minHeight: '200px',
    cursor: 'pointer'
};
const IconCircle = {
    borderRadius: '50%',
    padding: '14px',
    display: 'flex',
    justifyContent: 'center',
    width: '22px',
    position: 'absolute',
    left: '-28px',
    top: '32%',
    background: 'white'
}


export default CareerInfoCards