import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAllLeagues } from '../thunk/LeaguesThunk'

const initialState: any = {
  leagues: [],
  count: 0,
  filters: {},
  isTryFetching: false,
  isFetching: false,
  isRejected: false,
  error: null,
  errorMessage: null,
}

const leaguesSlice: any = createSlice({
  name: 'leagues',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllLeagues.pending]: (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    },
    [fetchAllLeagues.fulfilled]: (state, { payload }: PayloadAction<any>) => {
      state.leagues = payload.competitions
      state.filters = payload.filters
      state.count = payload.count
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    },
    [fetchAllLeagues.rejected]: (state, action: PayloadAction<any>) => {
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

export const leaguesReducer = leaguesSlice.reducer
