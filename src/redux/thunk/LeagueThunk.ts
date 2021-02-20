import { createAsyncThunk } from '@reduxjs/toolkit'
import { leaguesAPI } from './api'

interface x {
  id: number
  season: string
  dateFrom: Date
  dateTo: Date
}
export const fetchLeagueMatches: any = createAsyncThunk(
  'league/fetchLeagueMatches',
  async ({ id, season, dateFrom, dateTo }: x) => {
    const response = await leaguesAPI.fetchMatchesById(id, season, dateFrom, dateTo)
    return response.data
  }
)
