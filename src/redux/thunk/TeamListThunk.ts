import { createAsyncThunk } from '@reduxjs/toolkit'
import { teamsAPI } from './api'
import { IRejectValue } from './interface'

interface IFetchMatches {
  filters: any
  matches: Array<any>
  count: number
}

export interface IFetchMatchesArg {
  id: number | null | undefined
  dateFrom: string
  dateTo: string
}

export const fetchMatches = createAsyncThunk<
  IFetchMatches,
  IFetchMatchesArg,
  {
    rejectValue: IRejectValue
  }
>('teamList/fetchAll', async ({ id, dateFrom, dateTo }, thunkApi) => {
  try {
    const response = await teamsAPI.fetchMatchesById({ id, dateFrom, dateTo })
    return response.data
  } catch (e) {
    const { status, data } = e.response
    return thunkApi.rejectWithValue({ status, message: data.message })
  }
})
