import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../AppState/hooks'
import { fetchUser } from '../../AppState/userSlice'
import Result from '../../Components/Result'
import Questionnaire from '../../Components/Questionnaire'
import HeroBanner from '../../Components/HeroBanner'
import CareerInfoCards from '../../Components/InfoCards'
import { CARD_KEYS } from '../../utils/constants'

const Dashboard = () => {
  const completionDate = useAppSelector(state => state.user.user),
  dispatch = useAppDispatch(),
  [username, setUsername] = useState(''),
  [selectedCard, setSelectedCard] = useState<string>(CARD_KEYS.QUEST),
  handleCardClick = (cardId: string) => {
    setSelectedCard(cardId)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setUsername(params.get('user') || '')

    dispatch(fetchUser(username))
  }, [])

  return (
    <>
      <HeroBanner />
      <CareerInfoCards handleCardClick={ handleCardClick } />
      {
        selectedCard === CARD_KEYS.QUEST ? 
          completionDate ? <Result completionDate={completionDate} /> : <Questionnaire  username={username} />
         : <></>
      }
      
    </>
  )
}

export default Dashboard