interface DayConfig {
  text?: string
  picture?: string
}

interface CalendarConfig {
  [year: string]: {
    backgroundUrl: string
    primaryColor: string
    days: {
      [day: string]: DayConfig
    }
  }
}

export const CONFIG: Record<string, CalendarConfig> = {
  louise: {
    2024: {
      backgroundUrl: '/2024_background.jpg',
      primaryColor: 'sky',
      days: {
        1: { text: 'Welcome to the 2024 Calendar!', picture: 'Day1.jpg' },
        14: { text: 'Valentine\'s Day Special', picture: 'Day14.jpg' },
        25: { text: 'Christmas Celebration', picture: 'day25.jpg' },
      },
    },
    2025: {
      backgroundUrl: '/2025_background.jpg',
      primaryColor: 'sky',
      days: {
        1: { text: 'Welcome to the 2025 Calendar!', picture: 'day1.jpg' },
        14: { text: 'Valentine\'s Day Special', picture: 'day14.jpg' },
        25: { text: 'Christmas Celebration', picture: 'day25.jpg' },
      },
    },
  },
  christine: {
    2024: {
      backgroundUrl: '/2024_background.jpg',
      primaryColor: 'sky',
      days: {
        1: { text: 'Welcome to the 2024 Calendar!', picture: 'Day1.jpg' },
        14: { text: 'Valentine\'s Day Special', picture: 'Day14.jpg' },
        25: { text: 'Christmas Celebration', picture: 'day25.jpg' },
      },
    },
    2025: {
      backgroundUrl: '/2025_background.jpg',
      primaryColor: 'sky',
      days: {
        1: { text: 'Welcome to the 2025 Calendar!', picture: 'day1.jpg' },
        14: { text: 'Valentine\'s Day Special', picture: 'day14.jpg' },
        25: { text: 'Christmas Celebration', picture: 'day25.jpg' },
      },
    },
  },

}
