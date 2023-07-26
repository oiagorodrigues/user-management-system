import { configureStore } from '@reduxjs/toolkit'

import { usersSlice } from './features/users-slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
