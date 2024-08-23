// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/global.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use "~/assets/styles/partials/_variables.sass" as * \n
            @use "~/assets/styles/partials/_mixins.sass" as * \n
            @use "~/assets/styles/partials/_fonts.sass" as * \n
          `,
        },
      },
    },
  },
  modules: ['nuxt-icons'],
});
