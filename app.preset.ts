import type { Preset } from '@primeuix/themes/types'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import { calendarVariables } from './utils/calendar.utils'

export function getCustomizedPreset(year: number): Preset {
  const { primaryColor } = calendarVariables[year] || calendarVariables[2025]

  const options = {
    semantic: {
      primary: {
        50: `{${primaryColor}.50}`,
        100: `{${primaryColor}.100}`,
        200: `{${primaryColor}.200}`,
        300: `{${primaryColor}.300}`,
        400: `{${primaryColor}.400}`,
        500: `{${primaryColor}.500}`,
        600: `{${primaryColor}.600}`,
        700: `{${primaryColor}.700}`,
        800: `{${primaryColor}.800}`,
        900: `{${primaryColor}.900}`,
        950: `{${primaryColor}.950}`,
      },
    },
  }
  return definePreset(Aura, options)
}
