import { createSlice } from '@reduxjs/toolkit'
import { fetchTeamInfo, IFetchTeamInfo } from '../thunk/TeamInfoThunk'


export interface ITeamInfoState {
  infoAboutTeam: IFetchTeamInfo
  filters: any
  isTryFetching: boolean
  isFetching: boolean
  isRejected: boolean
  error: number | null
  errorMessage: string | null
}

const initialState: ITeamInfoState = {
  infoAboutTeam: {
    crestUrl: '',
    team: '',
    area: {
      name: '',
    },
    clubColors: '',
    founded: '',
    venue: '',
    website: '',
    squad: [],
  },
  filters: {},
  isTryFetching: false,
  isFetching: false,
  isRejected: false,
  error: null,
  errorMessage: null,
}

const teamInfoSlice: any = createSlice({
  name: 'teamInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeamInfo.pending, (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    })
    builder.addCase(fetchTeamInfo.fulfilled, (state, { payload }) => {
      state.infoAboutTeam = payload
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    })
    builder.addCase(fetchTeamInfo.rejected, (state, { payload }) => {
      state.error = payload!.status
      state.errorMessage = payload!.message
      state.isFetching = false
      state.isRejected = true
    })
  },
})

export const teamInfoReducer = teamInfoSlice.reducer
