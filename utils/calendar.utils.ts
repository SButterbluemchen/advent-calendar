import type { Calendar } from '~/models/calendar.interfaces'
import { computed } from 'vue'

export const calendarVariables: Calendar = {
  2025: {
    primaryColor: 'red',
  },
  2024: {
    primaryColor: 'sky',
  },
  2023: {
    primaryColor: 'sky',
  },
  2022: {
    primaryColor: 'sky',
  },
  2021: {
    primaryColor: 'sky',
  },
}

export const calendarYears = computed<number[]>(() =>
  Object.keys(calendarVariables).map(Number).sort((a, b) => b - a))

export function doesCalendarExist(year: number): boolean {
  return calendarYears.value.includes(year)
}

function shuffleArray(array: number[]): number[] {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // Échange rapide des deux éléments
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

export const shuffledDays = computed<number[]>(() => {
  const orderedDays = Array.from({ length: 24 }, (_, i) => i + 1)

  return shuffleArray(orderedDays)
})
