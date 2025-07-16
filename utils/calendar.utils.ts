import type { CalendarVariables } from '~/models/calendar.interfaces'
import { computed } from 'vue'

export const calendarVariables: CalendarVariables = {
  2025: {
    backgroundUrl: '/2025_background.jpg',
    primaryColor: 'red',
  },
  2024: {
    backgroundUrl: '/2024_background.jpg',
    primaryColor: 'sky',
  },
}

export const calendarYears = computed<number[]>(() =>
  Object.keys(calendarVariables).map(Number).sort((a, b) => b - a))

export function doesCalendarExist(year: number): boolean {
  return calendarYears.value.includes(year)
}
