import { createSlice } from "@reduxjs/toolkit"

type Answers = {
    questionId: string
    answer: number
}

type InitialAnswersState = {
    loading: boolean
    answers: Answers[],
    error: string
}

const initialState: InitialAnswersState = {
    loading: false,
    answers: [],
    error: ''
}

const answersSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {}
  })

export default answersSlice.reducer