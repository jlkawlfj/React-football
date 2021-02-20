import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import format from 'date-fns/format'
import { useQueryParam, NumberParam } from 'use-query-params'
import { fetchLeagueMatches } from '../redux/thunk/LeagueThunk'

import Form from 'react-bootstrap/Form'
import Preloader from '../components/common/Preloader'
import ErrorBanner from '../components/common/ErrorBanner'
import NoFound from '../components/common/NoFound'
import MatchCard from '../components/MatchCard'
import DateRange from '../components/DateRange'
import { useTranslation } from 'react-i18next'

const LeaguePage = () => {
  const [dateFrom, setDateFrom] = React.useState(new Date('2020/02/08'))
  const [dateTo, setDateTo] = React.useState(new Date('2021/02/10'))

  const [id] = useQueryParam('id', NumberParam)
  const [season, setSeason] = useQueryParam('season', NumberParam)
  const dispatch = useDispatch()
  const { matches, count, name, isTryFetching, isFetching, isRejected, error, errorMessage } = useSelector(
    ({ league }: any) => league
  )
  const { language } = useSelector(({ appReducer }: any) => appReducer)
  const { t } = useTranslation(['leagueCalendar'])

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
      <h1>{t('league')}: {name}</h1>
      <div>{t('matches')}: {count}</div>
      <div className='league-calendar__matches-tools'>
        <div className='league-calendar__selector-date'>
          <Form.Label>{t('selectSeason')}</Form.Label>
          <Form.Control as='select' custom value={`${season}`} onChange={handleSelector}>
            <option value={0}>{t('seasonNotSelected')}</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
            <option value={2018}>2018</option>
            <option value={2017}>2017</option>
            <option value={2016}>2016</option>
          </Form.Control>
        </div>
        <div className='league-calendar__date-range'>
          <Form.Label>{t('selectDate')}</Form.Label>
          <DateRange
            disabled={!disabledDate}
            dateFrom={dateFrom}
            dateTo={dateTo}
            setDateFrom={setDateFrom} 
            setDateTo={setDateTo}
            language={language}
          />
        </div>
      </div>
      {isTryFetching && !count && <NoFound type={'matches'} />}
      {!isRejected ? (
        <div>
          {!isFetching ? (
            matches.map((match: any) => {
              return <MatchCard key={match.id} language={language} finished={t('finished')} postroned={t('postroned')} scheduled={t('scheduled')} match={match} />
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
