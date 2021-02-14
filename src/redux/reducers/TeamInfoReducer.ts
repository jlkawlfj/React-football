import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTeamInfo } from '../thunk/TeamInfoThunk'

const initialState: any = {
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
  extraReducers: {
    [fetchTeamInfo.pending]: (state) => {
      state.isFetching = true
      state.errorMessage = null
      state.error = null
    },
    [fetchTeamInfo.fulfilled]: (state, { payload }: PayloadAction<any>) => {
      state.infoAboutTeam = payload
      state.isTryFetching = true
      state.isFetching = false
      state.isRejected = false
    },
    [fetchTeamInfo.rejected]: (state, action: PayloadAction<any>) => {
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

// export const fetchProducts = createAction<IFiltersState>(`${productSlice.name}/fetchProducts`)
// createAsyncThunk()
// export const { setLoading, setTeams } = productSlice.actions

export const teamInfoReducer = teamInfoSlice.reducer
