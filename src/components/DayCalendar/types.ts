export type DayState = 'selected' | 'disabled' | 'inactive' | 'today' | ''

export type Direction = 'left' | 'right'

export interface CalendarProps {
  minDate?: string
  maxDate?: string
  markedDates?: string
}

export const todayString = 'Today'

export enum UpdateSources {
  CALENDAR_INIT = 'calendarInit',
  TODAY_PRESS = 'todayPress',
  LIST_DRAG = 'listDrag',
  DAY_PRESS = 'dayPress',
  PAGE_SCROLL = 'pageScroll',
  WEEK_SCROLL = 'weekScroll',
  PROP_UPDATE = 'propUpdate',
}
