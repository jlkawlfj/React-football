import classnames from 'classnames'
import format from 'date-fns/format'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru'

registerLocale('ru', ru)

interface ICustomInputProps {
  disabled?: boolean;
  value?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomInput: React.FC<ICustomInputProps> = React.forwardRef(
  ({ disabled, value, onClick }, ref: React.ForwardedRef<HTMLButtonElement>): React.ReactElement => (
    <button
      ref={ref}
      className={classnames('date-input', { 'date-input--disabled': disabled })}
      onClick={onClick}
    >
      {format(new Date(value), 'dd/MM/yyyy')}
    </button>
  )
)

interface IDateRangeProps {
  dateFrom: Date;
  dateTo: Date;
  setDateFrom: (date: Date) => void;
  setDateTo: (date: Date) => void;
  disabled?: boolean;
  language?: string ;
}

const DateRange: React.FC<IDateRangeProps> = ({
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
  disabled,
  language
}): React.ReactElement => {
  return (
    <div className='date-range'>
      <div>
        <DatePicker
          customInput={<CustomInput disabled={disabled} />}
          selected={dateFrom}
          onChange={(date: Date) => setDateFrom(date)}
          selectsStart
          startDate={dateFrom}
          endDate={dateTo}
          disabled={disabled}
          locale={language}
        />
      </div>
      <div className='date-range__icon'>
        <i className='fas fa-exchange-alt'></i>
      </div>
      <div>
        <DatePicker 
          customInput={<CustomInput disabled={disabled} />}
          selected={dateTo}
          onChange={(date: Date) => setDateTo(date)}
          selectsEnd
          startDate={dateFrom}
          endDate={dateTo}
          minDate={dateFrom}
          disabled={disabled}
          popperPlacement='bottom-end'
          locale={language}
        />
      </div>
    </div>
  )
}

export default DateRange
