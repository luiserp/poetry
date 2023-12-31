// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-headlessui"],
  css: ["@/assets/main.scss"],
  plugins: [{ src: "@/plugins/aos", mode: "client" }],
});
