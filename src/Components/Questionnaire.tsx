import React, { useEffect } from 'react'
import { Stack, Typography } from '@mui/material';
import { QuestionnaireInfoText } from '../utils/constants';
import { useAppDispatch, useAppSelector } from '../AppState/hooks';
import { fetchQuestions } from '../AppState/questionaireSlice';

const Questionnaire = (props: {username: string}) => {
  const dispatch = useAppDispatch(),
  questions = useAppSelector(state => state.question.questions),
  { username } = props;
  let isRan = false

  useEffect(() => {
    if(username && !isRan) {
      dispatch(fetchQuestions(username))
    }
    isRan = true
    return
  }, [username])
 
  return (
    <Stack p={4} m={4} spacing={2} sx={{boxSizing: 'border-box'}}>
      <Typography variant='body1'>{QuestionnaireInfoText.first}</Typography> 
      <Typography variant='body1'>{QuestionnaireInfoText.second}</Typography> 
      {
        (questions && questions.length > 0 ) ? 'hi' : 'no'
      } 
    </Stack>
  )
}

export default Questionnaire