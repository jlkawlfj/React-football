import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import format from 'date-fns/format'
import { useQueryParam, NumberParam } from 'use-query-params'
import { fetchMatches } from '../redux/thunk/TeamListThunk'
import { fetchTeamInfo } from '../redux/thunk/TeamInfoThunk'

import DateRange from '../components/DateRange'
import Preloader from '../components/common/Preloader'
import ErrorBanner from '../components/common/ErrorBanner'
import NoFound from '../components/common/NoFound'
import MatchCard from '../components/MatchCard'
import TeamCard from '../components/TeamCard'

const TeamCalendar: React.FC = () => {
  const [dateFrom, setDateFrom] = React.useState(new Date('2020/04/08'))
  const [dateTo, setDateTo] = React.useState(new Date('2021/02/10'))
  const [id] = useQueryParam('id', NumberParam)

  const dispatch = useDispatch()
  const { matches, count, isTryFetching, isFetching, isRejected, error, errorMessage } = useSelector(({ teamList }: any) => teamList)
  const  isFetchingInfo = useSelector(({ teamInfo }: any) => teamInfo.isFetching)
  const { infoAboutTeam } = useSelector(({ teamInfo }: any) => teamInfo)

  React.useEffect(() => {
    dispatch(
      fetchTeamInfo({id})
    )
  }, [dispatch, id])


  React.useEffect(() => {
    dispatch(
      fetchMatches({
        id,
        dateFrom: format(dateFrom, 'yyyy-MM-dd'),
        dateTo: format(dateTo, 'yyyy-MM-dd'),
      })
    )
  }, [id, dateFrom, dateTo, dispatch])
  
  return (
    <div className='team-calendar'>
      <div className='team-calendar__header'>
        <h1>TeamCalendar</h1>
        {!isFetchingInfo ? <TeamCard team={infoAboutTeam} /> : <Preloader />}
        Teams match: {count}
      </div>
      <div className='search-tool'>
        <div>Select date</div>
        <DateRange
          dateFrom={dateFrom}
          dateTo={dateTo}
          setDateFrom={setDateFrom}
          setDateTo={setDateTo}
        />
      </div>
      {isTryFetching && !count && <NoFound type={'matches'} />}
      {!isRejected ? (
        <div>
          {!isFetching ? (
            matches.map((match: any) => {
              return <MatchCard key={match.id} match={match} />
            })
          ) : (
            <Preloader />
          )}
        </div>
      ) : (
        <ErrorBanner error={error} message={errorMessage} />
      )}
    </div>
  )
}

export default TeamCalendar
