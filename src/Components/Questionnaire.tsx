import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import { QuestionnaireInfoText } from '../utils/constants';
import { useAppDispatch, useAppSelector } from '../AppState/hooks';
import { fetchQuestions } from '../AppState/questionaireSlice';
import CustomProgressBar from './CustomProgressBar';
import CustomScale from './CustomScale';
import { submitAnswers } from '../AppState/answersSlice';

type Question = {
  id: string,
  text: string
}
type Answer = {
  questionId: string, 
  answer: number
}
const Questionnaire = (props: {username: string}) => {
  const dispatch = useAppDispatch(),
  questions = useAppSelector(state => state.question.questions),
  [answers, setAnswers] = useState<Answer[]>([]),
  [progress, setProgress] = useState(0),
  [selectedQuestionIdx, setSelectedQuestionIdx] = useState(0),
  { username } = props,
  handleBack = () => {
    setSelectedQuestionIdx(prev => prev-1)
  },
  handleFinish = () => {
    dispatch(submitAnswers({username: username, answers: answers}))
  },
  handleOptionSelection = (option: string) => {
    setAnswers([...answers, {questionId: questions[selectedQuestionIdx].id, answer: parseInt(option)}])
    
    setTimeout(() => {
      if(selectedQuestionIdx < questions.length) {
        setSelectedQuestionIdx(prev => prev+1)
      }
    }, 1000)
  };
  let isRan = false

  useEffect(() => {
    if(username && !isRan) {
      dispatch(fetchQuestions(username))
    }
    isRan = true
    return
  }, [username])

  useEffect(() => {
    console.log(selectedQuestionIdx)
    if(selectedQuestionIdx < questions.length) {
      setProgress((selectedQuestionIdx/questions.length)*100)
    }
  }, [selectedQuestionIdx])
 
  return (
    <Stack p={4} m={4} spacing={2} sx={{boxSizing: 'border-box'}}>
      <Typography variant='body1'>{QuestionnaireInfoText.first}</Typography> 
      <Typography variant='body1'>{QuestionnaireInfoText.second}</Typography> 
      {
        (questions && questions.length > 0 ) ? <Box>
          <Stack>
            <CustomProgressBar value={progress} />
            <hr />
            <Stack >
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography>Q{selectedQuestionIdx+1}/{questions.length}</Typography>
              <Stack>
                <Typography>In a job, I would be motivated by</Typography>
                <Typography>{questions[selectedQuestionIdx].text}</Typography>
                <CustomScale handleOptionSelection={handleOptionSelection} idx={selectedQuestionIdx} />
                <Button onClick={handleFinish}>Finish</Button>
                {selectedQuestionIdx === questions.length-1 && <Button onClick={handleFinish}>Finish</Button>}
                <Box>
                  {(selectedQuestionIdx > 0 && selectedQuestionIdx < questions.length) && <Button onClick={handleBack}>Back</Button>}
                </Box>
              </Stack>
            </Box>
            </Stack>
            
          </Stack>
        </Box> : <></>
      } 
    </Stack>
  )
}

export default Questionnaire