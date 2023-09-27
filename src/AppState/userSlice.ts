import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const userDetailsEndpoint = 'submissions?user='
const { REACT_APP_API_BASEURL } = process.env

type InitialUserState = {
    loading: boolean
    userCareerPathResult: {ok: boolean, submissionDate: string, user: string},
    error: string
}

const initialState: InitialUserState = {
    loading: false,
    userCareerPathResult: {ok: false, submissionDate: '', user: 'string'},
    error: ''
}

export const fetchUser = createAsyncThunk(userDetailsEndpoint, (username: string) => {
    return axios.get(`${REACT_APP_API_BASEURL}/${userDetailsEndpoint}${username}`)
    .then(response => response.data)
    .catch(error => error)  
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
          state.loading = true
        })
        builder.addCase(
          fetchUser.fulfilled,
          (state, action: PayloadAction<any>) => {
            state.loading = false
            state.userCareerPathResult = action.payload
            state.error = ''
          }
        )
        builder.addCase(fetchUser.rejected, (state, action) => {
          state.loading = false
          state.userCareerPathResult = {ok: false, submissionDate: '', user: 'string'}
          state.error = action.error.message || 'Something went wrong'
        })
      }
  })

export default userSlice.reducer