import { createSlice } from '@reduxjs/toolkit'
import { fetchAllLeagues, ILeague } from '../thunk/LeaguesThunk'

export interface ILeagues {
  leagues: Array<ILeague>
  count: number
  filters: any
  isTryFetching: boolean
  isFetching: boolean
  isRejected: boolean
  error: number | null
  errorMessage: string | null
}

const initialState: ILeagues = {
  leagues: [],
  count: 0,
  filters: {},
  isTryFetching: false,
  isFetching: false,
  isRejected: false,
  error: null,
  errorMessage: null,
}

const leaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllLeagues.pending, (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    })
    builder.addCase(fetchAllLeagues.fulfilled, (state, { payload }) => {
      state.leagues = payload.competitions
      state.filters = payload.filters
      state.count = payload.count
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    })
    builder.addCase(fetchAllLeagues.rejected, (state, { payload }) => {
      state.error = payload!.status
      state.errorMessage = payload!.message
      state.isFetching = false
      state.isRejected = true
    })
  },
})

export const leaguesReducer = leaguesSlice.reducer
