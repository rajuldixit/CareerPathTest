import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getApi } from "../DataService/API"

const questionsEndpoint = 'questions?user='

type Question = {
    id: string
    title: string
}

type InitialState = {
   loading: boolean
   questions: Question[]
   error: string
}

const initialState: InitialState = {
  loading: false,
  questions: [],
  error: ''
}

export const fetchQuestions = createAsyncThunk(questionsEndpoint, (username: string) => {
  return getApi(`${questionsEndpoint}${username}`)   
})


const questionaireSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {}
  })

export default questionaireSlice.reducer


