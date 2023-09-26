import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getApi } from "../DataService/API"

const userDetailsEndpoint = 'submissions?user='

type InitialUserState = {
    loading: boolean
    user: string,
    error: string
}

const initialState: InitialUserState = {
    loading: false,
    user: '',
    error: ''
}

export const fetchUser = createAsyncThunk(userDetailsEndpoint, (username: string) => {
    return getApi(`${userDetailsEndpoint}${username}`)   
})

const userSlice = createSlice({
    name: 'question',
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
            state.user = action.payload
            state.error = ''
          }
        )
        builder.addCase(fetchUser.rejected, (state, action) => {
          state.loading = false
          state.user = ''
          state.error = action.error.message || 'Something went wrong'
        })
      }
  })

export default userSlice.reducer