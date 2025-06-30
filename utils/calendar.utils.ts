import type { CalendarVariables } from '~/models/calendar.interfaces'

export const calendarVariables: CalendarVariables = {
  2025: {
    backgroundUrl: '/2025_background.jpg',
    primaryColor: 'cyan',
  },
  2024: {
    backgroundUrl: '/2025_background.jpg',
    primaryColor: 'red',
  },
}

export const calendarYears = computed(() =>
  Object.keys(calendarVariables).map(Number).sort((a, b) => b - a))
