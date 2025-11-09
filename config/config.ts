interface DayConfig {
  message?: string
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
      primaryColor: 'red',
      days: {
        1: { message: 'Cette année, Gaspard est devenu un grand garçon.', picture: 'Day1.jpg' },
        2: {
          picture: 'Day2.jpg',
          message: 'On est fashion !!!',
        },
        3: {},
        4: {
          picture: 'Day4.jpg',
          message: 'On aime faire des bêtises.',
        },
        5: {},
        6: {
          picture: 'Day6.jpg',
          message: 'Automne 2024.',
        },
        7: {},
        8: {
          picture: 'Day8.jpg',
          message: 'Tata et parrain au ski.',
        },
        9: {},
        10: {
          picture: 'Day10.jpg',
          message: 'Une petite chasse aux oeufs.',
        },
        11: {},
        12: {
          picture: 'Day12.jpg',
          message: 'Aie, ça fait mal.',
        },
        13: {},
        14: {
          picture: 'Day14.jpg',
          message: 'Papa est fort en vélo.',
        },
        15: {},
        16: {
          picture: 'Day16.jpg',
          message: 'Encore une belle journée au parc !!!',
        },
        17: {},
        18: {
          picture: 'Day18.jpg',
          message: 'Qui a gagné?',
        },
        19: {},
        20: {
          picture: 'Day20.jpg',
          message: 'Année 2023',
        },
        21: {
          picture: 'Day21.jpg',
          message: 'Année 2024',
        },
        22: {
          picture: 'Day22.jpg',
          message: 'Aujourd\'hui, c\'est l\'anniversaire de mamie.',
        },
        23: {},
        24: {},
      },
    },
    2025: {
      backgroundUrl: '/2025_background.jpg',
      primaryColor: 'sky',
      days: {
        1: { message: 'Welcome to the 2025 Calendar!', picture: 'day1.jpg' },
        14: { message: 'Valentine\'s Day Special', picture: 'day14.jpg' },
        25: { message: 'Christmas Celebration', picture: 'day25.jpg' },
      },
    },
  },
  christine: {
    2024: {
      backgroundUrl: '/2024_background.jpg',
      primaryColor: 'red',
      days: {
        1: { message: 'Welcome to the 2024 Calendar!', picture: 'Day1.jpg' },
        14: { message: 'Valentine\'s Day Special', picture: 'Day14.jpg' },
        25: { message: 'Christmas Celebration', picture: 'day25.jpg' },
      },
    },
    2025: {
      backgroundUrl: '/2025_background.jpg',
      primaryColor: 'sky',
      days: {
        1: { message: 'Welcome to the 2025 Calendar!', picture: 'day1.jpg' },
        14: { message: 'Valentine\'s Day Special', picture: 'day14.jpg' },
        25: { message: 'Christmas Celebration', picture: 'day25.jpg' },
      },
    },
  },

}
