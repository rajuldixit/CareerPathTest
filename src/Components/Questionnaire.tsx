import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { QuestionnaireInfoText } from '../utils/constants';
import { useAppDispatch, useAppSelector } from '../AppState/hooks';
import { fetchQuestions } from '../AppState/questionaireSlice';
import CustomProgressBar from './CustomProgressBar';

const Questionnaire = (props: {username: string}) => {
  const dispatch = useAppDispatch(),
  questions = useAppSelector(state => state.question.questions),
  [progress, setProgress] = useState(0),
  { username } = props;
  let isRan = false

  useEffect(() => {
    if(username && !isRan) {
      dispatch(fetchQuestions(username))
    }
    isRan = true
    return
  }, [username])

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    // }, 800);
    return () => {
      // clearInterval(timer);
    };
  }, [])
 
  return (
    <Stack p={4} m={4} spacing={2} sx={{boxSizing: 'border-box'}}>
      <Typography variant='body1'>{QuestionnaireInfoText.first}</Typography> 
      <Typography variant='body1'>{QuestionnaireInfoText.second}</Typography> 
      {
        (questions && questions.length > 0 ) ? <Box>
          <Stack>
            <CustomProgressBar value={progress} />
          </Stack>
        </Box> : <></>
      } 
    </Stack>
  )
}

export default Questionnaire