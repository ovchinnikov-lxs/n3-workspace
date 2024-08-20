// https://nuxt.com/docs/api/configuration/nuxt-config

const DESCRIPTION = 'My portfolio';
export default defineNuxtConfig({
    extends: ['../../packages/dev-kit-layer'],

    ssr: false,

    spaLoadingTemplate: true,

    app: {
        baseURL: process.env.PORTFOLIO_NUXT_APP_BASE_URL,
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
        },
    },

    pwa: {
        manifest: {
            name: 'Portfolio',
            short_name: 'P',
            start_url: process.env.PORTFOLIO_NUXT_APP_BASE_URL,
            description: DESCRIPTION,
            background_color: '#ffffff',
            theme_color: '#3498db',
            display: 'standalone',
            lang: 'ru',
            scope: process.env.PORTFOLIO_NUXT_APP_BASE_URL,
        },
    },
});
