import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

const questionsEndpoint = 'questions?user='
const { REACT_APP_API_BASEURL } = process.env

type Question = {
  id: string,
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
  return axios.get(`${REACT_APP_API_BASEURL}/${questionsEndpoint}${username}`)
  .then(response => response.data)
  .catch(error => error) 
})


const questionaireSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchQuestions.pending, state => {
        state.loading = true
      })
      builder.addCase(
        fetchQuestions.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false
          state.questions = action.payload?.questions
          state.error = ''
        }
      )
      builder.addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false
        state.questions = []
        state.error = action.error.message || 'Something went wrong'
      })
    }
  })

export default questionaireSlice.reducer


