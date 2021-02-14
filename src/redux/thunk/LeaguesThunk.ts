import { createAsyncThunk } from '@reduxjs/toolkit'
import { leaguesAPI } from './api'

export const fetchAllLeagues: any = createAsyncThunk('leagues/fetchAll', async ({ plan }: any) => {
  const response = await leaguesAPI.fetchAll(plan)
  return response.data
})
