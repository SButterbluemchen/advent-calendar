import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'en',
  missing: (_, key) => `translated ${key}`,
})

config.global.plugins.push(i18n)
