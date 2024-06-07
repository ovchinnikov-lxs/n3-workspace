export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    availableLocales: ['en', 'ru'],
    messages: {
        en: {
            title: 'No time for storybook, this is my playground...',
            hello: {
                world: 'hello world',
            },
        },
        ru: {
            hello: {
                world: 'Привет мир',
            },
        },
    },
}));
