import { configureStore } from '@reduxjs/toolkit'
import questionaireSlice from './questionaireSlice'
import answersSlice from './answersSlice'
import userSlice from './userSlice'

const store = configureStore({
  reducer: {
    question: questionaireSlice,
    answers: answersSlice,
    user: userSlice
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch