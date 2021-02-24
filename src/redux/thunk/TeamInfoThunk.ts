import { createAsyncThunk } from '@reduxjs/toolkit'
import { teamsAPI } from './api'
import { IRejectValue } from './interface'

interface player {
  id: number
  name: string
  position: string
  dateOfBirth: Date
  nationality: string
  role: string
}

export interface IFetchTeamInfo {
  crestUrl: string
  team: string
  area: {
    name: string
  }
  clubColors: string
  founded: any
  venue: string
  website: string
  squad: Array<player>
}

export interface IFetchTeamInfoArg {
  id: number
}

export const fetchTeamInfo = createAsyncThunk<
  IFetchTeamInfo,
  IFetchTeamInfoArg,
  {
    rejectValue: IRejectValue
  }
>('teamInfo/fetchAll', async ({ id }, thunkApi) => {
  try {
    const response = await teamsAPI.fetchTeamInfo({ id })
    return response.data
  } catch (e) {
    const { status, data } = e.response
    return thunkApi.rejectWithValue({ status, message: data.message })
  }
})
