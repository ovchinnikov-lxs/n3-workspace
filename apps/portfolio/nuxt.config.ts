// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
    extends: ['../../packages/dev-kit-layer'],

    css: [
        join(currentDir, './assets/styles/_bundle.scss'),
    ],

    app: {
        baseURL: process.env.PORTFOLIO_NUXT_APP_BASE_URL,
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
        },
    },

    modules: ['@nuxt/icon', '@nuxtjs/sitemap'],

    i18n: {
        locales: [
            {
                code: 'en',
                language: 'en-US',
            },
            {
                code: 'ru',
                language: 'ru-RU',
            },
        ],
        baseUrl: 'https://ovchinnikov-lxs.github.io/',
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
    },

    pwa: {
        manifest: {
            name: 'Portfolio',
            short_name: 'AO',
            start_url: process.env.PORTFOLIO_NUXT_APP_BASE_URL,
            description:
                'Explore the portfolio of Aleksandr Ovchinnikov, a Senior Frontend Developer specializing in Vue.js, Nuxt.js, and TypeScript. Discover projects, skills, and employment history.',
            background_color: '#91C4D2FF',
            theme_color: '#FFD8CDFF',
            display: 'standalone',
            lang: 'en',
            scope: process.env.PORTFOLIO_NUXT_APP_BASE_URL,
            icons: [
                {
                    src: `${process.env.PORTFOLIO_NUXT_APP_BASE_URL}/img/favicon-16x16.png`,
                    sizes: '16x16',
                    type: 'image/png',
                },
                {
                    src: `${process.env.PORTFOLIO_NUXT_APP_BASE_URL}/img/favicon-32x32.png`,
                    sizes: '32x32',
                    type: 'image/png',
                },
                {
                    src: `${process.env.PORTFOLIO_NUXT_APP_BASE_URL}/img/apple-touch-icon.png`,
                    sizes: '180x180',
                    type: 'image/png',
                },
                {
                    src: `${process.env.PORTFOLIO_NUXT_APP_BASE_URL}/img/android-chrome-192x192.png`,
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: `${process.env.PORTFOLIO_NUXT_APP_BASE_URL}/img/android-chrome-512x512.png`,
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    },

    fonts: {
        assets: {
            prefix: process.env.IS_DEVELOPMENT ? '/_fonts/' : `${process.env.PORTFOLIO_NUXT_APP_BASE_URL}_fonts/`,
        },
    },

    site: {
        url: `https://ovchinnikov-lxs.github.io${process.env.PORTFOLIO_NUXT_APP_BASE_URL}`,
        name: 'Александр Овчинников - Senior Frontend Developer | Эксперт по Vue.js, Nuxt.js, TypeScript',
    },

    compatibilityDate: '2024-10-05',
});
