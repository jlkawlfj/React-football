import { createAsyncThunk } from '@reduxjs/toolkit'
import { ITeam } from '../reducers/TeamsReducer'
import { teamsAPI } from './api'
import { IRejectValue } from './interface'

interface ILeagueTeams {
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
  teams: Array<ITeam>
}

export interface ILeagueTeamsArg {
  id: number | null | undefined
  season: number | null | undefined
}

export const fetchTeamsByLeague = createAsyncThunk<
  ILeagueTeams,
  ILeagueTeamsArg,
  {
    rejectValue: IRejectValue
  }
>('teams/fetchAll', async ({ id, season }, thunkApi) => {
  try {
    const response = await teamsAPI.fetchTeamsByLeague({ id, season })
    return response.data
  } catch (e) {
    const { status, data } = e.response
    return thunkApi.rejectWithValue({ status, message: data.message })
  }
})
