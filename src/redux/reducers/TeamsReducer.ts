import { createSlice } from '@reduxjs/toolkit'
import { fetchTeamsByLeague } from '../thunk/TeamsThunk'

export interface ITeam {
  id: number
  area: {
    id: number
    name: string
  }
  name: string
  shortName: string
  tla: string
  crestUrl: string
  address: string
  phone: string
  webstire: string
  email: string
  founded: number
  clubColors: string
  venue: string
  lastUpdate: string
}

export interface ITeamsState {
  teams: Array<ITeam>
  count: number
  name: string
  filters: any
  isTryFetching: boolean
  isFetching: boolean
  isRejected: boolean
  error: number | null
  errorMessage: string | null
}

const initialState: ITeamsState = {
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

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeamsByLeague.pending, (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    })
    builder.addCase(fetchTeamsByLeague.fulfilled, (state, { payload }) => {
      state.teams = payload.teams
      state.filters = payload.filters
      state.name = payload.competition.name
      state.count = payload.count
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    })
    builder.addCase(fetchTeamsByLeague.rejected, (state, { payload }) => {
      state.error = payload!.status
      state.errorMessage = payload!.message
      state.isFetching = false
      state.isRejected = true
    })
  },
})

export const teamsReducer = teamsSlice.reducer
