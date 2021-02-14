import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useQueryParam, NumberParam } from 'use-query-params'
import { fetchTeamsByLeague } from '../redux/thunk/TeamsThunk'

import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import ErrorBanner from '../components/common/ErrorBanner'
import Preloader from '../components/common/Preloader'
import NoFound from '../components/common/NoFound'
import TeamItem from '../components/TeamItem'

const TeamsPage = () => {
  const [nameTeam, setNameTeam] = React.useState('')
  const [teamsFilters, setTeamsFilters] = React.useState([])
  const [id] = useQueryParam('id', NumberParam)
  const [season, setSeason] = useQueryParam('season', NumberParam)
  const dispatch = useDispatch()

  const { teams, count, name, isFetching, isRejected, isTryFetching, error, errorMessage } = useSelector(
    ({ teams }: any) => teams
  )
  React.useEffect(() => {
    dispatch(fetchTeamsByLeague({ id, season }))
    setNameTeam('')
  }, [dispatch, id, season])

  React.useEffect(() => {
    setTeamsFilters(teams)
  }, [teams])

  const handleInput = (e: any) => {
    setNameTeam(e.target.value)
    setTeamsFilters(
      teams.filter((item: any) => {
        return item.shortName.toLowerCase().search(e.target.value.trim().toLowerCase()) !== -1
      })
    )
  }

  const handleSelector = (e: any) => {
    setSeason(e.target.value)
  }
  
  return (
    <div className='teams-page'>
      <h1>{name}</h1>
      <div>Teams: {count}</div>
      <div className='search-tool teams-tool'>
        <div>
          <Form.Label>Select season</Form.Label>
          <Form.Control as='select' custom value={`${season}`} onChange={handleSelector}>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
            <option value={2018}>2018</option>
            <option value={2017}>2017</option>
            <option value={2016}>2016</option>
          </Form.Control>
        </div>
        <div>
          <Form.Label>Team your name</Form.Label>
          <FormControl
            value={nameTeam}
            onChange={handleInput}
            type='text'
            placeholder='Enter team'
          />
        </div>
      </div>
      {isTryFetching && !count && <NoFound type={'teams'} />}
      {!isRejected ? (
        <div>
          {!isFetching ? (
            teamsFilters.map((team: any, index: number) => {
              return <TeamItem key={index} team={team} />
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

export default TeamsPage
