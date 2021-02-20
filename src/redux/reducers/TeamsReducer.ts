import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTeamsByLeague } from '../thunk/TeamsThunk'
  
interface teamOfListCompetition {
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
    lastUpdate: Date
  }

interface teamsListCompetition {
  count: number
  filters: any
  id: number
  competition: {
    id: number
    area: {
      id: number
      name: string
    }
    name: string
    code: string
    plan: string
    lastUpdated: Date
  }
  season: {
    id: number
    startDate: string
    endDate: string
    currentMatchday: null
    availableStages: Array<string>
  }
  teams: Array<teamOfListCompetition>
}

interface IInitialState {
  teams: Array<teamOfListCompetition>,
  count: number,
  name: string,
  filters: any,
  isTryFetching: boolean,
  isFetching: boolean,
  isRejected: boolean,
  error: number | null,
  errorMessage: string | null,
}

const initialState: IInitialState = {
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
    [fetchTeamsByLeague.fulfilled]: (state, { payload }: PayloadAction<teamsListCompetition>) => {
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
