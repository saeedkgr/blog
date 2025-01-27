// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content'],
  $production: {
    content: {
      database: {
        type: 'd1',
        binding: '8fad7ac4-853e-49f2-9b0c-b9cccdfef7fb',
      },
    },
  },
  devtools: { enabled: true },
  experimental: { appManifest: false },
})
