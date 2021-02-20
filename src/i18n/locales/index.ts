import leagueCalendarEn from './pages/LeagueCalendar/default.en.json'
import leagueCalendarRu from './pages/LeagueCalendar/default.json'
import leaguesEn from './pages/Leagues/default.en.json'
import leaguesRu from './pages/Leagues/default.json'
import teamsEn from './pages/Teams/default.en.json'
import teamsRu from './pages/Teams/default.json'
import teamCalendarEn from './pages/TeamCalendar/default.en.json'
import teamCalendarRu from './pages/TeamCalendar/default.json'

let en = {
  leagueCalendar: leagueCalendarEn['en'],
  teams: teamsEn['en'],
  teamCalendar: teamCalendarEn['en'],
  leagues: leaguesEn['en'],
}
let ru = {
  leagueCalendar: leagueCalendarRu['ru'],
  teams: teamsRu['ru'],
  teamCalendar: teamCalendarRu['ru'],
  leagues: leaguesRu['ru'],
}

export { ru, en }
