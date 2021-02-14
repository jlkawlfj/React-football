import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { format } from 'date-fns'

const TeamCard = ({ team }: any) => {
  const [active, setActive] = React.useState('1')

  const handleClick = () => {
    setActive(active === '0' ? '1' : '0')
  }

  return (
    <div className='team-card'>
      <div className='team-card__header'>
        <img
          className='team-card__img-team'
          src={team?.crestUrl || ''}
          alt={`Label ${team.shortName}`}
        />
        <div>
          <div>{team?.name || ''}</div>
          <div>Country: {team?.area.name || ''}</div>
          <div>Club colors: {team?.clubColors || ''}</div>
          <div>Founded: {team?.founded || ''}</div>
          <div>Venue: {team?.venue || ''} </div>
          <div>Website: {team?.website || ''}</div>
        </div>
      </div>
      <Accordion defaultActiveKey={'0'}>
        <Card>
          <Card.Header>
            <Button size='lg' block onClick={handleClick} variant='link'>
              Squad
            </Button>
          </Card.Header>
          <Accordion.Collapse eventKey={active}>
            <Card.Body>
              <Table striped bordered hover size='sm'>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Country</th>
                    <th>Position</th>
                    <th>Birthday</th>
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
