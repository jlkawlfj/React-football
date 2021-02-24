import axios from '../../../utils/axios'
import { IFetchAllLeaguesArg } from '../LeaguesThunk'
import { IFetchLeagueMatchesArg } from '../LeagueThunk'
import { IFetchTeamInfoArg } from '../TeamInfoThunk'
import { IFetchMatchesArg } from '../TeamListThunk'
import { ILeagueTeamsArg } from '../TeamsThunk'

export const leaguesAPI = {
  fetchAll({ plan }: IFetchAllLeaguesArg) {
    return axios.get('/competitions', {
      params: {
        plan,
      },
    })
  },
  fetchMatchesById({ id, season, dateFrom, dateTo }: IFetchLeagueMatchesArg) {
    return axios.get(`/competitions/${id}/matches`, {
      params: {
        season,
        dateFrom,
        dateTo,
      },
    })
  },
}

export const teamsAPI = {
  fetchTeamsByLeague({ id, season }: ILeagueTeamsArg) {
    return axios.get(`/competitions/${id}/teams`, {
      params: {
        season,
      },
    })
  },
  fetchMatchesById({ id, dateFrom, dateTo }: IFetchMatchesArg) {
    return axios.get(`/teams/${id}/matches`, {
      params: {
        dateFrom,
        dateTo,
      },
    })
  },
  fetchTeamInfo({ id }: IFetchTeamInfoArg) {
    return axios.get(`/teams/${id}`)
  },
}
