import { createAsyncThunk } from '@reduxjs/toolkit'
import { teamsAPI } from './api'

export const fetchMatches: any = createAsyncThunk(
  'teamList/fetchAll',
  async ({ id, dateFrom, dateTo }: any) => {
    const response = await teamsAPI.fetchMatchesById(id, dateFrom, dateTo)
    return response.data
  }
)
