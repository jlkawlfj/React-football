import { createAsyncThunk } from '@reduxjs/toolkit'
import { teamsAPI } from './api'

export const fetchTeamInfo: any = createAsyncThunk('teamInfo/fetchAll', async ({ id }: any) => {
  const response = await teamsAPI.fetchTeamInfo(id)
  return response.data
})
