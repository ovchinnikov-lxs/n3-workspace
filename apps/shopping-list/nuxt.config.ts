// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));

const DESCRIPTION =
    'Welcome to our web application for shopping lists! Here, you will find a convenient way to create and manage your shopping lists. Create lists for grocery shopping, plan your culinary experiments, or even organize your tasks.';

export default defineNuxtConfig({
    extends: ['../../packages/dev-kit-layer'],

    ssr: false,

    spaLoadingTemplate: true,

    app: {
        baseURL: process.env.SHOPPING_LIST_NUXT_APP_BASE_URL,
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
        },
        pageTransition: { name: 'bottom', mode: 'out-in' },
    },

    css: [
        join(currentDir, './assets/styles/_bundle.scss'),
    ],

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
            start_url: process.env.SHOPPING_LIST_NUXT_APP_BASE_URL,
            description: DESCRIPTION,
            background_color: '#ffffff',
            theme_color: '#3498db',
            display: 'standalone',
            lang: 'ru',
            scope: process.env.SHOPPING_LIST_NUXT_APP_BASE_URL,
            icons: [
                {
                    src: `${process.env.SHOPPING_LIST_NUXT_APP_BASE_URL}/shopping-list/img/72x72.png`,
                    sizes: '72x72',
                    type: 'image/png',
                },
                {
                    src: `${process.env.SHOPPING_LIST_NUXT_APP_BASE_URL}/img/96x96.png`,
                    sizes: '96x96',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
                {
                    src: `${process.env.SHOPPING_LIST_NUXT_APP_BASE_URL}/img/144x144.png`,
                    sizes: '144x144',
                    type: 'image/png',
                },
                {
                    src: `${process.env.SHOPPING_LIST_NUXT_APP_BASE_URL}/img/512x512.png`,
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    },

    pinia: {
        storesDirs: ['./stores/**'],
    },

    modules: [
        [
            '@nuxtjs/supabase',
            {
                url: process.env.SHOPPING_LIST_SUPABASE_URL,
                key: process.env.SHOPPING_LIST_SUPABASE_KEY,
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
