import { combineReducers } from '@reduxjs/toolkit'
import { routerReducer } from 'react-router-redux'
import { teamsReducer } from './TeamsReducer'
import { leaguesReducer } from './LeaguesReducer'
import { leagueReducer } from './LeagueReducer'
import { teamListReducer } from './TeamListReducer'
import { teamInfoReducer } from './TeamInfoReducer'
import { appReducer } from './AppReducer'

const rootReducer = combineReducers<any>({
  teams: teamsReducer,
  leagues: leaguesReducer,
  teamList: teamListReducer,
  league: leagueReducer,
  teamInfo: teamInfoReducer,
  appReducer: appReducer,
  routerReducer
})

export default rootReducer
