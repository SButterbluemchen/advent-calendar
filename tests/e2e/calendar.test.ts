import { expect, test } from '@playwright/test'

const testCases = [
  { locale: 'german', prefix: '/de', title: 'Adventskalender' },
  { locale: 'french', prefix: '/fr', title: 'Calendrier de l\'avent' },
  { locale: 'default', prefix: '', title: 'Advent Calendar' },
]

test.describe('Calendar Page', () => {
  for (const testCase of testCases) {
    test(`displays correct title on calendar page for ${testCase.locale}`, async ({ page }) => {
      await page.clock.setFixedTime(new Date('2024-12-25T10:00:00'))
      await page.goto(`${testCase.prefix}/calendars/2024`)
      await page.getByRole('heading')
      await expect(page.getByText(testCase.title)).toBeVisible()
    })
  }
})

test.describe('Calendar Page cards', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2024-12-10T10:00:00'))
  })

  test('are shown as active and clickable when date has passed', async ({ page }) => {
    await page.goto('/calendars/2024')

    const lastActiveCard = page.getByTestId('calendar-card-10')

    await expect(lastActiveCard).not.toContainClass('hover:cursor-default hover:scale-none')
  })

  test('are shown as disabled and not clickable when date has not passed', async ({ page }) => {
    await page.goto('/calendars/2024')

    const firstDisabledCard = page.getByTestId('calendar-card-11')

    await expect(firstDisabledCard).toContainClass('hover:cursor-default hover:scale-none')
  })
})
