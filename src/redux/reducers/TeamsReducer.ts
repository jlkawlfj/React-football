import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTeamsByLeague } from '../thunk/TeamsThunk'

const initialState: any = {
  teams: [],
  count: 0,
  name: '',
  filters: {},
  isTryFetching: false,
  isFetching: false,
  isRejected: false,
  error: null,
  errorMessage: null,
}

const teamsSlice: any = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeamsByLeague.pending]: (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    },
    [fetchTeamsByLeague.fulfilled]: (state, { payload }: PayloadAction<any>) => {
      state.teams = payload.teams
      state.filters = payload.filters
      state.name = payload.competition.name
      state.count = payload.count
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    },
    [fetchTeamsByLeague.rejected]: (state, action: PayloadAction<any>) => {
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

export const teamsReducer = teamsSlice.reducer
