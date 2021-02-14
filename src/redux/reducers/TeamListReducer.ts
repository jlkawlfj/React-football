import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchMatches } from '../thunk/TeamListThunk'

const initialState: any = {
  matches: [],
  count: 0,
  filters: {},
  isTryFetching: false,
  isFetching: false,
  isRejected: false,
  error: null,
  errorMessage: null,
}

const teamListSlice: any = createSlice({
  name: 'teamsList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMatches.pending]: (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    },
    [fetchMatches.fulfilled]: (state, { payload }: PayloadAction<any>) => {
      state.matches = payload.matches
      state.filters = payload.filters
      state.count = payload.count
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    },
    [fetchMatches.rejected]: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      const tempRequseError = action.error
      const temp = tempRequseError.message.split(' ')
      state.errorMessage = tempRequseError.message
      state.error = parseInt(temp[temp.length - 1], 10)
      state.isFetching = false
      state.isRejected = true
    },
  },
})

export const teamListReducer = teamListSlice.reducer
