import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Preloader = (): React.ReactElement => {
  return (
    <div className='preloader'>
      <Spinner animation='border' />
    </div>
  )
}

export default Preloader
