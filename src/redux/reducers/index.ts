import { combineReducers } from '@reduxjs/toolkit'
import { teamsReducer, ITeamsState } from './TeamsReducer'
import { leaguesReducer, ILeagues } from './LeaguesReducer'
import { ILeagueState, leagueReducer } from './LeagueReducer'
import { teamListReducer, ITeamListState } from './TeamListReducer'
import { teamInfoReducer, ITeamInfoState } from './TeamInfoReducer'
import { appReducer, IAppState } from './AppReducer'

export interface RootState {
  teamsState: ITeamsState
  leaguesState: ILeagues
  teamListState: ITeamListState
  leagueState: ILeagueState
  teamInfoState: ITeamInfoState
  appState: IAppState
}

const rootReducer = combineReducers({
  teamsState: teamsReducer,
  leaguesState: leaguesReducer,
  teamListState: teamListReducer,
  leagueState: leagueReducer,
  teamInfoState: teamInfoReducer,
  appState: appReducer,
})

export default rootReducer
