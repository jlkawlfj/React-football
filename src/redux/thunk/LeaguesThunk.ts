import { createAsyncThunk } from '@reduxjs/toolkit'
import { leaguesAPI } from './api'
import { IRejectValue } from './interface'

export interface ILeague {
  id: number
  name: string
  code: string
  emblemUrl: null | string
  plan: string
  numberOfAvailableSeasons: number
  lastUpdated: string
  currentSeason: any
  area: any
}

interface IFetchAllLeagues {
  competitions: Array<ILeague>
  count: number
  competition: {
    name: string
  }
  filters: any
}

export interface IFetchAllLeaguesArg {
  plan: string
}

export const fetchAllLeagues = createAsyncThunk<
  IFetchAllLeagues,
  IFetchAllLeaguesArg,
  {
    rejectValue: IRejectValue
  }
>('leagues/fetchAll', async ({ plan }, thunkApi) => {
  try {
    const response = await leaguesAPI.fetchAll({plan})
    return response.data
  } catch (e) {
    const { status, data } = e.response
    return thunkApi.rejectWithValue({ status, message: data.message })
  }
})
