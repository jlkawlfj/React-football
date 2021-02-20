import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import { history } from '../redux/store'
import { QueryParamProvider } from 'use-query-params'
import Preloader from '../components/common/Preloader'
import { useSelector } from 'react-redux'
import classnames from 'classnames'

const LeaguesPage = React.lazy(() => import('../pages/LeaguesPage'))
const TeamsPage = React.lazy(() => import('../pages/TeamsPage'))
const LeagueCalendar = React.lazy(() => import('../pages/LeagueCalendar'))
const TeamCalendar = React.lazy(() => import('../pages/TeamCalendar'))

const MainRouter = () => {
  const isDarkTheme = useSelector(({appReducer}: any) => appReducer.isDarkTheme)

  return (
    <Router history={history} >
      <QueryParamProvider ReactRouterRoute={Route}>
        <div className={classnames('main', {'main-dark': isDarkTheme})}>
          <Header />
          <div className='wrapper'>
            <React.Suspense fallback={<Preloader/>}>
              <Switch>
                <Route path='/leagues_page' component={LeaguesPage} />
                <Route path='/teams_page' component={TeamsPage} />
                <Route path='/league_calendar' component={LeagueCalendar} />
                <Route path='/team_calendar' component={TeamCalendar} />
                <Redirect from='/' to='/leagues_page' />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </QueryParamProvider>
    </Router>
  )
}

export default MainRouter
