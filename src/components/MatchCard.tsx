import React from 'react'
import { format } from 'date-fns'
import classnames from 'classnames'
import { enGB, ru } from 'date-fns/locale'

let statusMatch: string = 'status'

interface IProps {
  match: any
  language?: string
  finished: string
  postroned: string
  scheduled: string
  colorResult?: boolean
}

const MatchCard: React.FC<IProps> = ({
  match: { status, homeTeam, score, awayTeam, utcDate },
  language,
  finished,
  postroned,
  scheduled,
  colorResult
}) => {
  if (status === 'FINISHED') statusMatch = finished
  else if (status === 'POSTRONED') statusMatch = postroned
  else if (status === 'SCHEDULED') statusMatch = scheduled

  return (
    <div className='match-card'>
      <div className='match-card__teams-block'>
        <div className='match-card__team-name'>{homeTeam.name || ''}</div>
        <div
          className={classnames('match-card__scores', {
            'match-card__scores--draw': score.winner === 'DRAW' && colorResult,
            'match-card__scores--win': score.winner === 'HOME_TEAM' && colorResult,
            'match-card__scores--lose': score.winner === 'AWAY_TEAM' && colorResult,
            'match-card__scores--finished': status === 'FINISHED' && !colorResult,
          })}
        >
          {score.fullTime.homeTeam || 0}
          <label>:</label>
          {score.fullTime.awayTeam || 0}
        </div>
        <div className='match-card__team-name'>{awayTeam.name || ''}</div>
      </div>
      <div>
        {format(new Date(utcDate), 'dd MMMM yyyy', { locale: language === 'ru' ? ru : enGB })}
      </div>
      <div>{statusMatch}</div>
    </div>
  )
}

export default MatchCard
