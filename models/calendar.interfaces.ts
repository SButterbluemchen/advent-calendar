export interface CalendarVariables {
  [year: string]: {
    backgroundUrl: string
    primaryColor: string
  }
}

export interface Day {
  day: number
  picture?: string
  message?: string
  embed?: {
    url: string
    fallback: string
  }
}
