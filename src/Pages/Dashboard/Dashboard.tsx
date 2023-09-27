import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../AppState/hooks'
import { fetchUser } from '../../AppState/userSlice'
import Result from '../../Components/Result'
import Questionnaire from '../../Components/Questionnaire'
import HeroBanner from '../../Components/HeroBanner'
import CareerInfoCards from '../../Components/InfoCards'
import { CARD_KEYS } from '../../utils/constants'

const Dashboard = () => {
  const careerPathResult = useAppSelector(state => state.user.userCareerPathResult),
  dispatch = useAppDispatch(),
  [username, setUsername] = useState(''),
  [selectedCard, setSelectedCard] = useState<string>(CARD_KEYS.QUEST),
  handleCardClick = (cardId: string) => {
    setSelectedCard(cardId)
  };
  let isRan = false

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setUsername(params.get('user') || '')
    if(username  && !isRan) {
      dispatch(fetchUser(username))
    }
    isRan = true
    return
  }, [])

  return (
    <>
      <HeroBanner />
      <CareerInfoCards handleCardClick={ handleCardClick } />
      {
        selectedCard === CARD_KEYS.QUEST ? 
          careerPathResult.ok ? <Result submissionDate={careerPathResult.submissionDate} /> : <Questionnaire  username={username} />
         : <></>
      }
      
    </>
  )
}

export default Dashboard