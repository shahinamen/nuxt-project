// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "./"),
  },
  css: [
    '@/assets/main.css',
    /*'@/assets/main.scss',*/
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
