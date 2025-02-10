import moment, { Moment } from 'moment'

function isValidMoment(date: any) {
  return date && moment.isMoment(date)
}

export function sameDate(a: Moment, b: Moment) {
  if (!isValidMoment(a) || !isValidMoment(b)) {
    return false
  } else {
    return (
      a.year() === b.year() && a.month() === b.month() && a.date() === b.date()
    )
  }
}

export function isPast(a: Moment) {
  if (!isValidMoment(a)) {
    return false
  }
  const b = moment().startOf('date')
  if (sameDate(a, b)) {
    return false
  }
  return a.isBefore(b)
}

export function isToday(date: Moment) {
  return sameDate(date, moment().startOf('date'))
}

export function isGTE(a: Moment, b: Moment) {
  if (a && b) {
    return a.isAfter(b)
  }
}

export function isLTE(a: Moment, b: Moment) {
  if (a && b) {
    return a.isBefore(b)
  }
}

function fromTo(a: Moment, b: Moment): Moment[] {
  const days: Moment[] = [a]

  const diff = b.diff(a, 'days')

  for (let i = 1; i <= diff; i++) {
    days.push(a.clone().add(i, 'days'))
  }
  return days
}

export function month(date: Moment) {
  const firstDay: Moment = date.clone().date(1)
  const lastDay: Moment = firstDay.clone().add(1, 'month').subtract(1, 'day')

  return fromTo(firstDay, lastDay)
}

export function weekDayNames(firstDayOfWeek = 0) {
  let weekDaysNames = moment.weekdaysShort()
  const dayShift = firstDayOfWeek % 7
  if (dayShift) {
    weekDaysNames = weekDaysNames
      .slice(dayShift)
      .concat(weekDaysNames.slice(0, dayShift))
  }
  return weekDaysNames
}

export function page(date: Moment, firstDayOfWeek = 0) {
  const days = month(date)

  let before: Moment[] = []
  let after: Moment[] = []

  const fdow = (7 + firstDayOfWeek) % 7 || 7
  const ldow = (fdow + 6) % 7

  const from = days[0].clone()

  if (from.day() !== fdow) {
    from.subtract((from.day() + 7 - fdow) % 7, 'days')
  }

  const to = days[days.length - 1].clone()
  const day = to.day()
  if (day !== ldow) {
    to.add((ldow + 7 - day) % 7, 'days')
  }

  if (isLTE(from, days[0])) {
    before = fromTo(from, days[0])
  }

  if (isGTE(to, days[days.length - 1])) {
    after = fromTo(days[days.length - 1], to)
  }

  return before.concat(days.slice(1, days.length - 1), after)
}

export function isDateNotInRange(
  date: Moment,
  minDate: string,
  maxDate: string,
) {
  return (
    (minDate && !isGTE(date, moment(minDate).startOf('date'))) ||
    (maxDate && !isLTE(date, moment(maxDate).startOf('date')))
  )
}

export function getWeekDates(date: Moment) {
  const weekStart = date.clone().startOf('week')
  const daysArray: Moment[] = []
  for (let i = 0; i < 7; i++) {
    daysArray.push(weekStart.clone().weekday(i))
  }

  return daysArray
}
