// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "./"),
    "assets" : '/<rootDir>/assets',
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
    /*'@/assets/main.scss',*/
  ],
  modules:["@pinia/nuxt"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
