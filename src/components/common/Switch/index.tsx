import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import classnames from 'classnames'

interface IProps {
  id: string
  name: string
  icons: Array<React.ReactElement>
  checked: boolean
  onChange: (event: any) => void
  small?: boolean
  disabled?: boolean
}

const Switch: React.FC<IProps> = ({
  id,
  name,
  icons,
  checked,
  onChange,
  small,
  disabled,
}): React.ReactElement => {
  function handleKeyPress(e: any) {
    if (e.keyCode !== 32) return

    e.preventDefault()
    onChange(!checked)
  }

  return (
    <div className={'toggle-switch' + (small ? ' small-switch' : '')}>
      <input
        type='checkbox'
        name={name}
        className='toggle-switch-checkbox'
        id={id}
        checked={checked}
        onChange={(e: any) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label
          className={classnames('toggle-switch-label', { 'toggle-switch-label-checked': checked })}
          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e: any) => handleKeyPress(e)}
          htmlFor={id}
        >
          <span
            className={classnames('toggle-switch-inner', {
              'toggle-switch-disabled': disabled,
            })}
            tabIndex={-1}
          >
            {checked ? icons[0] : icons[1]}
          </span>
          <span
            className={
              disabled ? 'toggle-switch-switch toggle-switch-disabled' : 'toggle-switch-switch'
            }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  )
}

Switch.defaultProps = {
  icons: [<div>yes</div>, <div>no</div>],
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  icons: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired, 
}

export default Switch
