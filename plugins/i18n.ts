import {createI18n} from 'vue-i18n'
import en from '../locales/en.json'
import sw from '../locales/sw.json'
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(({vueApp}) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'sw',
        messages: {
            en,
            sw
        }
    })
    vueApp.use(i18n)
})