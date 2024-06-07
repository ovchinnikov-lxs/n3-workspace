// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
    devtools: { enabled: true },

    alias: {
        '#dev-kit-layer': fileURLToPath(new URL('./', import.meta.url)),
    },

    typescript: {
        strict: true,
        typeCheck: true,
        tsConfig: {
            include: [
                'node',
                join(currentDir, './types/**/*.ts'),
            ],
            compilerOptions: {
                types: ['vitest/globals'],
            },
        },
    },

    imports: {
        dirs: [
            'utils/**',
            'composables/**',
        ],
    },

    modules: [
        '@nuxtjs/svg-sprite',
        '@nuxt/image',
        '@vueuse/nuxt',
        '@nuxt/test-utils/module',
        '@nuxtjs/i18n',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
        [
            '@vite-pwa/nuxt',
            {
                registerType: 'autoUpdate',
                injectManifest: {
                    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
                },
                manifest: {
                    theme_color: '#ffffff',
                },
                workbox: {
                    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
                    navigateFallbackDenylist: [/^\//],
                    runtimeCaching: [
                        {
                            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'google-fonts-cache',
                                expiration: {
                                    maxEntries: 10,
                                    maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                                },
                                cacheableResponse: {
                                    statuses: [0, 200],
                                },
                            },
                        },
                        {
                            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'gstatic-fonts-cache',
                                expiration: {
                                    maxEntries: 10,
                                    maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                                },
                                cacheableResponse: {
                                    statuses: [0, 200],
                                },
                            },
                        },
                    ],
                },
                devOptions: {
                    enabled: process.env.NODE_ENV === 'development',
                    suppressWarnings: true,
                    navigateFallbackAllowlist: [/^\/$/],
                    type: 'module',
                },
            },
        ],
        '@nuxt/fonts',
    ],

    router: {
        options: {
            linkActiveClass: '--is-active-link',
            linkExactActiveClass: '--is-exact-link',
        },
    },

    experimental: {
        asyncContext: true,
    },

    features: {
        inlineStyles: false,
    },

    css: [
        join(currentDir, './assets/styles/_bundle.scss'),
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "${join(currentDir, './assets/styles/_common.scss')}" as *;`,
                },
            },
        },

        esbuild: {
            drop: ['debugger'],
            pure: ['console.log', 'console.debug', 'console.trace'],
        },
    },
});
