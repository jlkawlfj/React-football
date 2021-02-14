import React from 'react'
import { format } from 'date-fns'
import classnames from 'classnames'

const MatchCard = ({ match }: any) => {
  return (
    <div className='match-card'>
      <div className='match-card__teams-block'>
        <div className='match-card__team-name'>{match?.homeTeam.name || ''}</div>
        <div
          className={classnames('match-card__scores', {
            'match-card__scores--draw': match.score.winner === 'DRAW',
            'match-card__scores--win': match.score.winner === 'HOME_TEAM',
            'match-card__scores--lose': match.score.winner === 'AWAY_TEAM',
          })}
        >
          {match.score.fullTime.homeTeam || 0}
          <label>:</label>
          {match.score.fullTime.awayTeam || 0}
        </div>
        <div className='match-card__team-name'>{match?.awayTeam.name || ''}</div>
      </div>
      <div>{format(new Date(match.utcDate), 'dd MMMM yyyy')}</div>
      <div>{match.status}</div>
    </div>
  )
}

export default MatchCard
