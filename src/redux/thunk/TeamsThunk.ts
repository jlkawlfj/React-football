import { createAsyncThunk } from '@reduxjs/toolkit'
import { teamsAPI } from './api'

export const fetchTeamsByLeague: any = createAsyncThunk(
  'teams/fetchAll',
  async ({ id, season }: any) => {
    const response = await teamsAPI.fetchTeamsByLeague(id, season)
    return response.data
  }
)
