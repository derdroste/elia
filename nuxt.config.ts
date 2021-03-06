import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    css: [
        'assets/css/global.css',
        '@ionic/core/css/core.css',
        '@ionic/core/css/normalize.css',
        '@ionic/core/css/structure.css',
        '@ionic/core/css/typography.css',
        '@ionic/core/css/ionic.bundle.css',
    ],
    buildModules: [
        '@nuxtjs/pwa',
    ],
    pwa: {
        manifest: {
            name: 'My Awesome App',
        }
    }
})
