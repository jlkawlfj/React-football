import { createAsyncThunk } from '@reduxjs/toolkit'
import { leaguesAPI } from './api'
import { IRejectValue } from './interface'

export interface ILeagueMatch {
  id: number
  utcDate: string
  status: string
  matchday: number
  stage: string
  group: string
  lastUpdated: string
  season: {
    id: number
    startDate: string
    endDate: string
    currentMatchday: number
  }
  odds: {
    msg: string
  }
  score: {
    winner: string
    duration: string
    fullTime: {
      awayTeam: number
      homeTeam: number
    }
    halfTime: {
      awayTeam: number
      homeTeam: number
    }
    extraTime: any
    penalties: any
  }
  homeTeam: {
    id: number
    name: string
  }
  awayTeam: {
    id: number
    name: string
  }
  referees: any
}

interface IFetchLeagueMatches {
  matches: Array<ILeagueMatch>
  count: number
  competition: {
    name: string
  }
  filters: any
}

export interface IFetchLeagueMatchesArg {
  id: number 
  season?: number | null | undefined
  dateFrom?: string
  dateTo?: string
}

export const fetchLeagueMatches = createAsyncThunk<
  IFetchLeagueMatches,
  IFetchLeagueMatchesArg,
  {
    rejectValue: IRejectValue
  }
>('league/fetchLeagueMatches', async ({ id, season, dateFrom, dateTo }, thunkApi) => {
  try {
    const response = await leaguesAPI.fetchMatchesById({id, season, dateFrom, dateTo})
    return response.data
  } catch (e) {
    const { status, data } = e.response
    return thunkApi.rejectWithValue({ status, message: data.message })
  }
})
