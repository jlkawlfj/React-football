import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import { history } from '../redux/store'
import { QueryParamProvider } from 'use-query-params'
import Preloader from '../components/common/Preloader'

const LeaguesPage = React.lazy(() => import('../pages/LeaguesPage'))
const TeamsPage = React.lazy(() => import('../pages/TeamsPage'))
const LeagueCalendar = React.lazy(() => import('../pages/LeagueCalendar'))
const TeamCalendar = React.lazy(() => import('../pages/TeamCalendar'))

const MainRouter = () => {
  return (
    <Router history={history}>
      <QueryParamProvider ReactRouterRoute={Route}>
        <div className='main'>
          <Header />
          <div className='wrapper'>
            <React.Suspense fallback={<Preloader/>}>
              <Switch>
                <Route exact path='/leagues_page' component={LeaguesPage} />
                <Route exact path='/teams_page' component={TeamsPage} />
                <Route exact path='/league_calendar' component={LeagueCalendar} />
                <Route exact path='/team_calendar' component={TeamCalendar} />
                <Redirect exact from='/' to='/leagues_page' />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </QueryParamProvider>
    </Router>
  )
}

export default MainRouter
