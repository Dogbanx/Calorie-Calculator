import moment, { Moment } from 'moment'
import React from 'react'

import { UpdateSources } from '../types'

export interface CalendarContextProps {
  date: Moment
  prevDate: Moment
  setDate: (date: Moment, source: UpdateSources) => void
  updateSource?: UpdateSources
}

//@ts-expect-error
const CalendarContext = React.createContext<CalendarContextProps>({
  date: moment().startOf('date'),
})
export default CalendarContext
