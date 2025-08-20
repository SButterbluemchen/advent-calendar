import type { TestOptions } from '~tests/e2e/fixtures/base'
import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import { isCI } from 'std-env'
import { mockUserDE, mockUserFR } from '~/tests/e2e/fixtures/mockUsers'

export default defineConfig<TestOptions>({
  testDir: './tests/e2e/',
  fullyParallel: true,
  forbidOnly: !!isCI,
  retries: isCI ? 2 : 0,
  workers: 1,
  reporter: [['html', { open: isCI ? 'never' : 'on-failure' }]],
  use: {
    baseURL: 'http://localhost:3000',
    locale: 'en-UK',
    viewport: { width: 1920, height: 1080 },
    headless: true,
    nuxt: {
      dev: true,
      port: 7357,
      browser: true,
      browserOptions: {
        type: 'chromium',
        launch: {
          headless: true,
        },
      },
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  projects: [
    {
      name: 'german',
      use: { ...devices['Desktop Chrome'], locale: 'de-DE', mockUser: mockUserDE },
    },
    {
      name: 'french',
      use: { ...devices['Desktop Chrome'], locale: 'fr-FR', mockUser: mockUserFR },
    },
  ],
})
