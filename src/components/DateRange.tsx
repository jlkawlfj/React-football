import classnames from 'classnames'
import format from 'date-fns/format'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CustomInput = React.forwardRef(({ disabled, value, onClick }: any, ref: any) => (
  <button
    ref={ref}
    className={classnames('date-input', { 'date-input--disabled': disabled })}
    onClick={onClick}
  >
    {format(new Date(value), 'dd/MM/yyyy')}
  </button>
))

const DateRange: React.FC<any> = ({
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
  disabled,
}): React.ReactElement => {
  return (
    <div className='date-range'>
      <DatePicker
        customInput={<CustomInput disabled={disabled} />}
        selected={dateFrom}
        onChange={(date: any) => setDateFrom(date)}
        selectsStart
        startDate={dateFrom}
        endDate={dateTo}
        disabled={disabled}
      />
      <div className='date-range__icon'>
        <i className="fas fa-exchange-alt"></i>
      </div>
      <DatePicker
        customInput={<CustomInput disabled={disabled} />}
        selected={dateTo}
        onChange={(date: any) => setDateTo(date)}
        selectsEnd
        startDate={dateFrom}
        endDate={dateTo}
        minDate={dateFrom}
        disabled={disabled}
        popperPlacement='bottom-end'
      />
    </div>
  )
}

export default DateRange
