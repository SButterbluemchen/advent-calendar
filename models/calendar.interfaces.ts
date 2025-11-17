export interface Day {
  picture?: string
  message?: string
  frameUrl?: string
}

export interface Calendar {
  [year: string]: {
    primaryColor: string
    days: {
      [day: string]: Day
    }
  }
}
