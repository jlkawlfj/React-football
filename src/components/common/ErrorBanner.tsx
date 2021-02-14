import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  message: string
  error: number
}
const ErrorBanner: React.FC<IProps> = ({ error, message }: any) => {
  if (!error) {
    return null
  }
  return (
    <div>
      <div className='error-banner'>
        <div>
          {(error === 404 || error === 400) && (
            <div>
              <h2>Bad Request</h2>
              <div>You request resulted in an error</div>
            </div>
          )}
          {error === 403 && (
            <div>
              <h2>Forbidden</h2>
              <div>You don't have permission to access</div>
            </div>
          )}
          <Link to='/leaguse_page'>Go home</Link>
        </div>
      </div>
      <div className='error-banner__additional-message'>{message || ''}</div>
    </div>
  )
}

export default ErrorBanner
