import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  plugins: [
      '~/plugins/globalPlugin'
  ],
  runtimeConfig: {
    public: {
      title: 'BrollopsGuiden',
      description: 'BrollopsGuiden',
      email: 'binnur@tikweb.com',
      baseUrl: process.env.BASE_URL,
    },
  },
  devtools: { enabled: true },
})
