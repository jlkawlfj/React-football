import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MatchCard from '../components/MatchCard'
import { fetchLeagueMatches } from '../redux/thunk/LeagueThunk'
import DateRange from '../components/DateRange'
import format from 'date-fns/format'
import { useQueryParam, NumberParam } from 'use-query-params'
import Form from 'react-bootstrap/Form'
import Preloader from '../components/common/Preloader'
import ErrorBanner from '../components/common/ErrorBanner'
import NoFound from '../components/common/NoFound'

const LeaguePage = () => {
  const [dateFrom, setDateFrom] = React.useState(new Date('2020/02/08'))
  const [dateTo, setDateTo] = React.useState(new Date('2021/02/10'))

  const [id] = useQueryParam('id', NumberParam)
  const [season, setSeason] = useQueryParam('season', NumberParam)
  const dispatch = useDispatch()
  const { matches, count, name, isTryFetching, isFetching, isRejected, error, errorMessage } = useSelector(
    ({ league }: any) => league
  )
  const disabledDate: any = season === 0 || season === undefined
  React.useEffect(() => {
    let temp = {}
    if (disabledDate) {
      temp = {
        id,
        dateFrom: format(dateFrom, 'yyyy-MM-dd'),
        dateTo: format(dateTo, 'yyyy-MM-dd'),
      }
    } else {
      temp = {
        id,
        season,
      }
    }
    dispatch(fetchLeagueMatches(temp))
  }, [id, dateFrom, dateTo, season, disabledDate, dispatch])

  const handleSelector = (e: any) => {
    setSeason(e.target.value)
  }

  return (
    <div className='league-calendar'>
      <h1>League: {name}</h1>
      Matches: {count}
      <div className='matches-tools'>
        <div>
          <Form.Label>Select season</Form.Label>
          <Form.Control as='select' custom value={`${season}`} onChange={handleSelector}>
            <option value={0}>Search with a date picker</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
            <option value={2018}>2018</option>
            <option value={2017}>2017</option>
            <option value={2016}>2016</option>
          </Form.Control>
        </div>
        <div className='matches-tools__date-range'>
          <Form.Label>Select date</Form.Label>
          <DateRange
            disabled={!disabledDate}
            dateFrom={dateFrom}
            dateTo={dateTo}
            setDateFrom={setDateFrom}
            setDateTo={setDateTo}
          />
        </div>
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

export default LeaguePage
