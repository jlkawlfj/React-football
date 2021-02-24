import { createSlice } from '@reduxjs/toolkit'
import { fetchLeagueMatches, ILeagueMatch } from '../thunk/LeagueThunk'

export interface ILeagueState {
  matches: Array<ILeagueMatch>
  count: number
  name: string
  filters: any
  isTryFetching: boolean
  isFetching: boolean
  isRejected: boolean
  error: number | null
  errorMessage: string | null
}

const initialState: ILeagueState = {
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

const leagueSlice = createSlice({
  name: 'league',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLeagueMatches.pending, (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    })
    builder.addCase(fetchLeagueMatches.fulfilled, (state, { payload }) => {
      state.matches = payload.matches
      state.filters = payload.filters
      state.name = payload.competition.name
      state.count = payload.count
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    })
    builder.addCase(fetchLeagueMatches.rejected, (state, { payload }) => {
      state.error = payload!.status
      state.errorMessage = payload!.message
      state.isFetching = false
      state.isRejected = true
    })
  },
})

export const leagueReducer = leagueSlice.reducer
