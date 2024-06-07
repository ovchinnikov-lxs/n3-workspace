// https://nuxt.com/docs/api/configuration/nuxt-config
// import stylelint from 'vite-plugin-stylelint';

const DESCRIPTION =
    'Welcome to our web application for shopping lists! Here, you will find a convenient way to create and manage your shopping lists. Create lists for grocery shopping, plan your culinary experiments, or even organize your tasks.';

export default defineNuxtConfig({
    extends: ['@ovchinnikov-lxs/dev-kit-layer'],

    ssr: false,

    // runtimeConfig: { // TODO: How add .env in github action
    //     public: {
    //         API_BASE_URL: 'http://localhost:3000',
    //     },
    // },

    spaLoadingTemplate: true,

    app: {
        baseURL: '/shopping-list/',
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
        },
    },

    i18n: {
        locales: [
            {
                code: 'ru',
                iso: 'ru-RU',
            },
            {
                code: 'en',
                iso: 'en-US',
            },
        ],
        defaultLocale: 'ru',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
    },

    pwa: {
        manifest: {
            name: 'Shopping List',
            short_name: 'SL',
            start_url: '/shopping-list/',
            description: DESCRIPTION,
            background_color: '#ffffff',
            theme_color: '#3498db',
            display: 'standalone',
            lang: 'ru',
            scope: '/shopping-list/',
            icons: [
                {
                    src: '/img/72x72.png',
                    sizes: '72x72',
                    type: 'image/png',
                },
                {
                    src: '/img/96x96.png',
                    sizes: '96x96',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
                {
                    src: '/img/144x144.png',
                    sizes: '144x144',
                    type: 'image/png',
                },
                {
                    src: '/img/512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    },

    modules: [
        [
            '@nuxtjs/supabase',
            {
                // TODO: How add .env in github action
                url: 'https://rihjywbwdijfaikghqkm.supabase.co',
                key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpaGp5d2J3ZGlqZmFpa2docWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxNTU2MjksImV4cCI6MjAyMzczMTYyOX0.faSQlNX9u2hiEbUvLbMk_KiCkZdQd-yXhxKgIVtREh0',
                redirectOptions: {
                    login: '/login',
                    callback: '/confirm',
                    exclude: [
                        '/en/login',
                        '/en/confirm',
                        '/register',
                        '/en/register',
                    ],
                },
            },
        ],
    ],
});
