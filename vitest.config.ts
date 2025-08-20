import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    include: ['./tests/unit/**/*.spec.ts'],
    exclude: ['./tests/e2e/**/*.spec.ts'],
    setupFiles: ['./tests/unit/test-setup.ts'],
    globals: true,
  },
})
