// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content'],
  $production: {
    content: {
      database: {
        type: 'd1',
        binding: 'saeedkgr-weblog',
      },
    },
    nitro: {
      prerender: {
        autoSubfolderIndex: false,
      },
    },
  },
  devtools: { enabled: true },
  // experimental: { appManifest: false },
})
