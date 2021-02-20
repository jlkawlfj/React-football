import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'

const TeamCard = ({ team }: any) => {
  const [active, setActive] = React.useState('1')
  const { t } = useTranslation(['teamCalendar'])

  const handleClick = () => {
    setActive(active === '0' ? '1' : '0')
  }

  return (
    <div className='team-card'>
      <div className='team-card__header'>
        <div className='team-card__image'>
          <img
            loading='lazy'
            className='team-card__img-team'
            src={team?.crestUrl || ''}
            alt={`Label ${team.shortName}`}
          />
        </div>
        <div className='team-card__info'>
          <h1>{team?.name || ''}</h1>
          <div>
            {t('country')}: {team?.area.name || ''}
          </div>
          <div>
            {t('clubColors')}: {team?.clubColors || ''}
          </div>
          <div>
            {t('founded')}: {team?.founded || ''}
          </div>
          <div>
            {t('venue')}: {team?.venue || ''}{' '}
          </div>
          <div>
            {t('website')}: {team?.website || ''}
          </div>
        </div>
      </div>
      <Accordion defaultActiveKey={'0'}>
        <Card>
          <Card.Header>
            <Button size='lg' block onClick={handleClick} variant='link'>
              {t('squad')}
            </Button>
          </Card.Header>
          <Accordion.Collapse eventKey={active}>
            <Card.Body>
              <Table striped bordered hover size='sm'>
                <thead>
                  <tr>
                    <th>{t('name')}</th>
                    <th>{t('country')}</th>
                    <th>{t('position')}</th>
                    <th>{t('birthday')}</th>
                  </tr>
                </thead>
                <tbody>
                  {team.squad.map((teamate: any, index: number) => {
                    return (
                      <tr key={`${teamate.id}__${index}`}>
                        <td>{teamate?.name || ''}</td>
                        <td>{teamate?.nationality || ''}</td>
                        <td>{teamate?.position || ''}</td>
                        <td>
                          {format(
                            new Date(teamate?.dateOfBirth ? teamate?.dateOfBirth : new Date()),
                            'dd/MM/yyyy'
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default TeamCard
