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
  [showFinishButton, setShowFinishButton] = useState(false),
  [progress, setProgress] = useState(0),
  [selectedQuestionIdx, setSelectedQuestionIdx] = useState(0),
  { username } = props,
  handleBack = () => {
    setSelectedQuestionIdx(prev => prev-1)
    selectedQuestionIdx === questions.length - 1 ? setShowFinishButton(true) : setShowFinishButton(false)
  },
  handleFinish = () => {
    dispatch(submitAnswers({username: username, answers: answers}))
  },
  handleOptionSelection = (option: string) => {
    setAnswers([...answers, {questionId: questions[selectedQuestionIdx].id, answer: parseInt(option)}])
    selectedQuestionIdx === questions.length - 1 ? setShowFinishButton(true) : setShowFinishButton(false)

    if(selectedQuestionIdx < questions.length - 1) {
      setTimeout(() => {
        setSelectedQuestionIdx(prev => prev+1)
      }, 1000)
    } else if (selectedQuestionIdx === questions.length - 1) {
      setProgress(100)
    }
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
    if(selectedQuestionIdx < questions.length ) {
      setProgress((selectedQuestionIdx/questions.length)*100)
    } 
  }, [selectedQuestionIdx])
 
  return (
    <Stack spacing={2} p={6} m={6} sx={{boxSizing: 'border-box'}}>
      <Typography variant='body1'>{QuestionnaireInfoText.first}</Typography> 
      <Typography variant='body1'>{QuestionnaireInfoText.second}</Typography> 
      {
        (questions && questions.length > 0 && selectedQuestionIdx < questions.length ) ? <Box>

          <Stack sx={ContainerStyle}>
            <CustomProgressBar value={progress} />
            <hr style={{width: '100%'}}/>
            <Box>
              {(selectedQuestionIdx > 0 && selectedQuestionIdx < questions.length) && <Button variant='outlined' onClick={handleBack}>Back</Button>}
            </Box>
            <Stack sx={{marginTop: '8px', alignItems: 'center'}}>
              
            <Box sx={{display: 'flex', maxWidth: '700px', justifyContent: 'center'}}>
              <Typography variant='h6' pr={1} color='orange'>Q{selectedQuestionIdx+1}/{questions.length}</Typography>
              <Stack spacing={2}>
                <Typography variant='subtitle1'>In a job, I would be motivated by</Typography>
                <Typography variant='h5' fontWeight={'bold'}>{questions[selectedQuestionIdx]?.title}</Typography>
                <CustomScale handleOptionSelection={handleOptionSelection} idx={selectedQuestionIdx} />
                {showFinishButton && 
                  <Stack direction={'row'} justifyContent={'center'}><Button sx={{width: '200px'}} onClick={handleFinish} variant='contained' color="warning">Finish</Button></Stack>
                }
                
              </Stack>
            </Box>
            </Stack>
            
          </Stack>
        </Box> : <></>
      } 
    </Stack>
  )
}

const ContainerStyle = {
  WebkitBoxShadow: '1px 5px 5px 4px rgba(224,213,224,1)',
  MozBoxShadow: '1px 5px 5px 4px rgba(224,213,224,1)',
  boxShadow: '1px 5px 5px 4px rgba(224,213,224,1)',
  padding: '5%',
  borderRadius: '8px',
  boxSizing: 'border-box'
}

export default Questionnaire