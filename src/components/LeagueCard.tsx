import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const LeagueCard: React.FC<any> = ({ league, season }): React.ReactElement => {
  const seasonUrl = season ? `&season=${season}` : ''
  return (
    <div className='league-card'>
      <div className='league-card__inf'>
        <label className='league-card__emblem'>
          {league.emblemUrl ? (
            <img
              className='league-card__img'
              src={league.emblemUrl}
              alt={`emblem ${league.name} league`}
            />
          ) : (
            <i className='far fa-image'></i>
          )}
        </label>

        <label className='league-card__name'>{league.name}</label>
      </div>
      <div className='league-card__links'>
        <Button 
          as={Link} 
          to={`/teams_page?id=${league.id}${seasonUrl}`}
        >
          teams
        </Button>
        <Button
          variant='info'
          as={Link}
          to={`/league_calendar?id=${league.id}${seasonUrl}`}
        >
          matches
        </Button>
      </div>
    </div>
  )
}

export default LeagueCard