import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchLeagueMatches } from '../thunk/LeagueThunk'

const initialState: any = {
  matches: [],
  count: 0,
  name: '',
  filters: {},
  isTryFetching: false,
  isFetching: false,
  isRejected: false,
  error: null,
  errorMessage: null,
}

const leagueSlice: any = createSlice({
  name: 'league',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLeagueMatches.pending]: (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    },
    [fetchLeagueMatches.fulfilled]: (state, { payload }: PayloadAction<any>) => {
      state.matches = payload.matches
      state.filters = payload.filters
      state.name = payload.competition.name
      state.count = payload.count
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    },
    [fetchLeagueMatches.rejected]: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      //@ts-nocheck
      const tempRequseError = action.error
      const temp = tempRequseError.message.split(' ')
      state.errorMessage = tempRequseError.message
      state.error = parseInt(temp[temp.length - 1], 10)
      state.isFetching = false
      state.isRejected = true
    },
  },
})

export const leagueReducer = leagueSlice.reducer
