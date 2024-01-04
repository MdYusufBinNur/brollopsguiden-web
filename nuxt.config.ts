import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import {resolve, dirname} from 'node:path'
import {fileURLToPath} from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
    build: {
        transpile: ['vuetify', 'vue-i18n'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        plugins: [
            '~/plugins/globalPlugin',
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ]
            })
        ],
    },

    runtimeConfig: {
        public: {
            title: 'BrollopsGuiden',
            description: 'BrollopsGuiden',
            email: 'binnur@tikweb.com',
            baseUrl: process.env.BASE_URL,
        },
    },
    devtools: {enabled: true},
})
