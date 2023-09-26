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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch