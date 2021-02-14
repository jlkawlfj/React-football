import React from 'react'
import { Link } from 'react-router-dom'

const TeamItem = ({ team }: any) => {
  return (
    <Link to={`/team_calendar?id=${team.id}`} className='team-item'>
      <div>
        <img className='team-item__emblem' src={team.crestUrl || ''} alt={`emblem ${team.name}`} />
      </div>
      <div className='team-item__name'>{team.name || 'name'}</div>
    </Link>
  )
}

export default TeamItem
