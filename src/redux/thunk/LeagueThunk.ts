import { createAsyncThunk } from '@reduxjs/toolkit'
import { leaguesAPI } from './api'

export const fetchLeagueMatches: any = createAsyncThunk(
  'league/fetchLeagueMatches',
  async ({ id, season, dateFrom, dateTo }: any) => {
    const response = await leaguesAPI.fetchMatchesById(id, season, dateFrom, dateTo)
    return response.data
  }
)
