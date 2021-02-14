import axios from '../../../utils/axios'

export const leaguesAPI = {
  fetchAll(plan: any) {
    return axios.get('/competitions', {
      params: {
        plan,
      },
    })
  },
  fetchMatchesById(id: any, season: any, dateFrom: any, dateTo: any) {
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
  fetchTeamsByLeague(id: any, season: any) {
    return axios.get(`/competitions/${id}/teams`, {
      params: {
        season,
      },
    })
  },
  fetchById(id: any) {
    return axios.get(`/teams/${id}`)
  },
  fetchMatchesById(id: any, dateFrom: any, dateTo: any) {
    return axios.get(`/teams/${id}/matches`, {
      params: {
        dateFrom,
        dateTo,
      },
    })
  },
  fetchTeamInfo(id: number) {
    return axios.get(`/teams/${id}`)
  },
}
