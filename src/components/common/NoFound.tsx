import React from 'react'

interface IProps {
  type: string
}

const NoFound: React.FC<IProps> = ({ type }): React.ReactElement => {
  return <div className='no-found'>No {type || ''} found</div>
}

export default NoFound
