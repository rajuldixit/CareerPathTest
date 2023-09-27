import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const answerSubmitEndpoint = 'submissions?user='
const { REACT_APP_API_BASEURL } = process.env

type Answer = {
    questionId: string
    answer: number
}

type SubmissionResponse = {
    ok: boolean,
    user: string,
    submissionDate: string
}

type InitialAnswersState = {
    loading: boolean
    submitResponse: SubmissionResponse,
    error: string
}
const initialState: InitialAnswersState = {
    loading: false,
    submitResponse: {ok: false, user: '', submissionDate: ''},
    error: ''
}

export const submitAnswers = createAsyncThunk(answerSubmitEndpoint, (params: {username: string, answers: Answer[]}) => {
    return axios.post(`${REACT_APP_API_BASEURL}/${answerSubmitEndpoint}${params.username}`, {answers: params.answers})
    .then(response => {console.log(response.data); return response.data})
    .catch(error => error) 
  })

const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(submitAnswers.pending, state => {
          state.loading = true
        })
        builder.addCase(
          submitAnswers.fulfilled,
          (state, action: PayloadAction<SubmissionResponse>) => {
            console.log(action.payload)
            state.loading = false
            state.submitResponse = action.payload
            state.error = ''
          }
        )
        builder.addCase(submitAnswers.rejected, (state, action) => {
          state.loading = false
          state.submitResponse = {ok: false, user: '', submissionDate: ''}
          state.error = action.error.message || 'Something went wrong'
        })
      }
  })

export default answersSlice.reducer