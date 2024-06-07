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
        baseURL: '/shopping-list/',
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
            start_url: '/shopping-list/',
            description: DESCRIPTION,
            background_color: '#ffffff',
            theme_color: '#3498db',
            display: 'standalone',
            lang: 'ru',
            scope: '/shopping-list/',
            icons: [
                {
                    src: '/shopping-list/img/72x72.png',
                    sizes: '72x72',
                    type: 'image/png',
                },
                {
                    src: '/shopping-list/img/96x96.png',
                    sizes: '96x96',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
                {
                    src: '/shopping-list/img/144x144.png',
                    sizes: '144x144',
                    type: 'image/png',
                },
                {
                    src: '/shopping-list/img/512x512.png',
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
