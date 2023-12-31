// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-icon", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/style.css"],
});
