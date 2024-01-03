// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme,
            },
        }

    })
    app.vueApp.use(vuetify)
})
import { createApp } from 'vue'

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#EEECE8',
        surface: '#EEECE8',
        // primary: '#6200EE',
        'primary-darken-1': '#c9c8c4',
        // secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        primary: '#E64926',
        accent: '#1D1D1D',
        secondary: '#EEECE8',
        lighter: '#EEECE8',
        darker: '#E4DFD4',
    },
}


