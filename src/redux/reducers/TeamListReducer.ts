import { createSlice } from '@reduxjs/toolkit'
import { fetchMatches } from '../thunk/TeamListThunk'

export interface ITeamListState {
  matches: Array<any>
  count: number
  filters: any
  isTryFetching: boolean
  isFetching: boolean
  isRejected: boolean
  error: number | null
  errorMessage: string | null
}

const initialState: ITeamListState = {
  matches: [],
  count: 0,
  filters: {},
  isTryFetching: false,
  isFetching: false,
  isRejected: false,
  error: null,
  errorMessage: null,
}

const teamListSlice = createSlice({
  name: 'teamsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMatches.pending, (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    })
    builder.addCase(fetchMatches.fulfilled, (state, { payload }) => {
      state.matches = payload.matches
      state.filters = payload.filters
      state.count = payload.count
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    })
    builder.addCase(fetchMatches.rejected, (state, { payload }) => {
      state.error = payload!.status
      state.errorMessage = payload!.message
      state.isFetching = false
      state.isRejected = true
    })
  },
})

export const teamListReducer = teamListSlice.reducer
