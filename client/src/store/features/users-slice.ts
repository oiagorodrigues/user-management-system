import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '~/types/user'

export interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
