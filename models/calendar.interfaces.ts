export interface Day {
  picture?: string
  message?: string
  frameUrl?: string
  uploadedVideo?: string
}

export interface Calendar {
  [year: string]: {
    primaryColor: string
    days: {
      [day: string]: Day
    }
  }
}
