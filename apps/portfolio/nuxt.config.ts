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
        detectBrowserLanguage: false,
    },

    pwa: {
        manifest: {
            name: 'Portfolio',
            short_name: 'AO',
            start_url: '/',
            description:
                'Explore the portfolio of Aleksandr Ovchinnikov, a Senior Frontend Developer specializing in Vue.js, Nuxt.js, and TypeScript. Discover projects, skills, and employment history.',
            background_color: '#91C4D2FF',
            theme_color: '#FFD8CDFF',
            display: 'standalone',
            lang: 'en',
            scope: '/',
            icons: [
                {
                    src: 'img/favicon-16x16.png',
                    sizes: '16x16',
                    type: 'image/png',
                },
                {
                    src: 'img/favicon-32x32.png',
                    sizes: '32x32',
                    type: 'image/png',
                },
                {
                    src: 'img/apple-touch-icon.png',
                    sizes: '180x180',
                    type: 'image/png',
                },
                {
                    src: 'img/android-chrome-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: '/img/android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    },

    site: {
        url: 'https://ovchinnikov-lxs.github.io',
        name: 'Александр Овчинников - Senior Frontend Developer | Эксперт по Vue.js, Nuxt.js, TypeScript',
    },

    compatibilityDate: '2024-10-05',
});
