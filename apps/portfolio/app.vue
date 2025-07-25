<template>
    <div
        itemscope
        itemtype="https://schema.org/WebSite"
        :class="$style.AppInstance"
    >
        <NuxtPwaManifest />

        <main
            ref="wrapperRef"
            :class="$style.wrapper"
        >
            <BaseHeader :class="$style.header" />

            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </main>
    </div>
</template>

<script setup lang="ts">
const wrapperRef = ref<HTMLDivElement>();

const { t } = useI18n();

const i18nHead = useLocaleHead({
    addDirAttribute: true,
    addSeoAttributes: true,
});

useHead({
    htmlAttrs: () => ({
        ...i18nHead.value.htmlAttrs,
    }),
    meta: () => [
        ...i18nHead.value.meta,
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'yandex-verification',
            content: '66831ef4a1a5e12d',
        },
    ],
    link: () => [
        ...i18nHead.value.link,
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        },
    ],
    script: () => [
        {
            type: 'application/ld+json',
            innerHTML: {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: t('app.seo.og.script.name'),
                jobTitle: t('app.seo.og.script.jobTitle'),
                url: 'https://ovchinnikov-lxs.github.io/',
                image: 'https://ovchinnikov-lxs.github.io/img/avatar.webp',
                sameAs: [
                    'https://t.me/ovchinnikov_lxs',
                    'https://www.linkedin.com/in/alexander-ovchinnikov-4a569a23b',
                    'https://github.com/ovchinnikov-lxs',
                ],
                worksFor: {
                    '@type': 'Organization',
                    name: 'WinTech',
                },
                alumniOf: t('app.seo.og.script.alumniOf'),
                knowsAbout: t('app.seo.og.script.knowsAbout'),
            },
        },
    ],
});

onNuxtReady(() => {
    useHead({
        script: [
            {
                innerHTML:
                    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
                    "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
                    "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
                    "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
                    "})(window,document,'script','dataLayer','GTM-KLDBHXW4');",
                defer: true,
                async: true,
            },
            {
                async: true,
                defer: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-8BZP9D108T',
            },
            {
                innerHTML:
                    '  window.dataLayer = window.dataLayer || [];\n' +
                    '  function gtag(){dataLayer.push(arguments);}\n' +
                    "  gtag('js', new Date());\n" +
                    '\n' +
                    "  gtag('config', 'G-8BZP9D108T');",
                async: true,
                defer: true,
            },
        ],
    });
});

useSeoMeta({
    title: () => t('app.seo.title'),
    description: () => t('app.seo.description'),
    keywords: () => t('app.seo.keywords'),
    author: () => t('app.seo.author'),
    publisher: () => t('app.seo.publisher'),
    ogTitle: () => t('app.seo.og.title'),
    ogDescription: () => t('app.seo.og.description'),
    ogImage: 'https://ovchinnikov-lxs.github.io/img/avatar.webp',
    ogUrl: 'https://ovchinnikov-lxs.github.io/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: () => t('app.seo.twitter.title'),
    twitterDescription: () => t('app.seo.twitter.description'),
    twitterImage: 'https://ovchinnikov-lxs.github.io/img/avatar.webp',
});

onMounted(() => {
    const cssVar = useCssVar('--ui-body-height', document.documentElement);

    useResizeObserver(document.body, () => {
        if (!wrapperRef.value) {
            return;
        }

        cssVar.value = `${wrapperRef.value.scrollHeight}px`;
    });

    useEventListener(window, 'scroll', () => {
        if (!wrapperRef.value) {
            return;
        }

        wrapperRef.value.scrollTop = window.scrollY;
    });
});
</script>
<style lang="scss" module>
.AppInstance {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100dvh;
}

.wrapper {
    position: fixed;
    inset: var(--ui-container-margin);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 880px;
    max-width: calc(100% - var(--ui-container-margin) * 2);
    height: calc(100% - var(--ui-container-margin) * 2);
    padding-bottom: var(--ui-container-margin);
    margin: auto;
    overflow: hidden;
    border: var(--ui-border-value);
}

.header {
    position: sticky;
    top: 0;
    z-index: 3;
}
</style>
