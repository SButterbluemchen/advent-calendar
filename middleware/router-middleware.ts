import { currentYear } from '~/utils/dates.utils'
import { appRoutes } from '~/utils/routes.utils'

export default defineNuxtRouteMiddleware((to) => {
  const { year, day } = to.params
  const isCalendarDayRoute
      = to.path.startsWith(`/${appRoutes.CALENDARS}/`)
        && to.path.includes(`/${appRoutes.DAYS}/`)

  if (isCalendarDayRoute) {
    const isSameYear = year === currentYear.value.toString()
    const isDisabled
        = isSameYear
          && Date.now() < new Date(currentYear.value, 11, Number(day) + 1).getTime()
    const testMode = to.query.test === 'true'

    if (isDisabled && !testMode) {
      return navigateTo(`/${appRoutes.CALENDARS}/${year}`)
    }
  }
})
