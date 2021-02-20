import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useQueryParam, NumberParam } from 'use-query-params'
import { useTranslation } from 'react-i18next'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { fetchAllLeagues } from '../redux/thunk/LeaguesThunk'
import LeagueCard from '../components/LeagueCard'
import Preloader from '../components/common/Preloader'
import ErrorBanner from '../components/common/ErrorBanner'
import Form from 'react-bootstrap/Form'
import NoFound from '../components/common/NoFound'

const plan = 'TIER_ONE'

const LeaguesPage = () => {
  const [season, setSeason] = useQueryParam('season', NumberParam)
  const dispatch = useDispatch()
  const { t } = useTranslation(['leagues'])

  const {
    leagues,
    count,
    isFetching,
    isRejected,
    error,
    errorMessage,
    isTryFetching,
  } = useSelector(({ leagues }: any) => leagues)

  React.useEffect(() => {
    dispatch(fetchAllLeagues({ plan }))
  }, [dispatch])

  const handleSelector = (e: any) => {
    setSeason(e.target.value)
  }

  return (
    <div className='leagues-page'>
      <h1>{t('leaguesTierOne')}</h1>
      <div>
        {t('leagues')}: {count}
      </div>
      <div>
        <Form>
          <Form.Group controlId='exampleForm.SelectCustom'>
            <Form.Label>{t('selectedSeason')}:</Form.Label>
            <Form.Control as='select' custom value={`${season}`} onChange={handleSelector}>
              <option value={0}>{t('currentSeason')}</option>
              <option value={2020}>2020</option>
              <option value={2019}>2019</option>
              <option value={2018}>2018</option>
              <option value={2017}>2017</option>
              <option value={2016}>2016</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className='leagues-page__list'>
        {isTryFetching && !count && <NoFound type={'leagues'} />}
        {!isRejected ? (
          <div>
            {!isFetching ? (
              <Card>
                <ListGroup>
                  {leagues.map((league: any, index: number) => (
                    <ListGroup.Item key={index}>
                      <LeagueCard
                        key={index}
                        league={league}
                        teamsNameLink={t('teams')}
                        matchesNameLink={t('matches')}
                        season={season}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            ) : (
              <Preloader />
            )}
          </div>
        ) : (
          <ErrorBanner error={error} message={errorMessage} />
        )}
      </div>
    </div>
  )
}

export default LeaguesPage
