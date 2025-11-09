import { env } from 'node:process'
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { getCustomizedPreset } from './app.preset'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
    '@nuxt/test-utils/module',
    '@nuxt/image',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
    ],
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: getCustomizedPreset(2025),
      },
    },
  },
  css: ['~/assets/main.scss', '~/assets/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  image: {
    domains: [env.NUXT_NAS_URL!],
  },
  runtimeConfig: {
    nasUrl: env.NUXT_NAS_URL,
  },
})
