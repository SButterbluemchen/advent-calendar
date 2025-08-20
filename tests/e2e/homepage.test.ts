import { expect, test } from '@playwright/test'

test('displays correct title on homepage', async ({ page }, testInfo) => {
  await page.goto('/')
  await page.getByRole('heading')

  if (testInfo.project.name === 'german') {
    await expect(page.getByText('Hallo')).toBeVisible()
  }
  else if (testInfo.project.name === 'french') {
    await expect(page.getByText('Bonjour')).toBeVisible()
  }
  else {
    await expect(page.getByText('Hello')).toBeVisible()
  }
})
