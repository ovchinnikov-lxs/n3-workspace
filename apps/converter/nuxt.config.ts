// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    ssr: false,

    app: {
        baseURL: process.env.CONVERTER_NUXT_APP_BASE_URL,
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
        },
    },

    runtimeConfig: {
        public: {
            apiURL: process.env.CONVERTER_NUXT_API_BASE,
        },
    },

    modules: [
        [
            '@primevue/nuxt-module',
            {
                options: {
                    ripple: false,
                    theme: {
                        preset: Aura,
                    },
                },
            },
        ],
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],

    router: {
        options: {
            linkActiveClass: '--is-active-link',
            linkExactActiveClass: '--is-exact-link',
        },
    },
});
