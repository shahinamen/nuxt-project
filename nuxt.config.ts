// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Tutorial from Youtube",
    },
  },

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "./"),
    "assets": resolve(__dirname, "./assets"),
    "components": resolve(__dirname, "./components"),
    "composables": resolve(__dirname, "./composables"),
    "layouts": resolve(__dirname, "./layouts"),
    "pages": resolve(__dirname, "./pages"),
    "public": resolve(__dirname, "./public"),
    "plugins": resolve(__dirname, "./plugins"),
    "server": resolve(__dirname, "./server"),
    "utils": resolve(__dirname, "./utils"),
  },

  css: [
    '@/assets/main.css',
    // '@/assets/main.scss', // Uncomment if needed
  ],

  modules: [
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss"
  ],

  googleFonts: {
    families: {
      Figtree: [300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },
})
