<template>
    <header
        ref="refHeader"
        class="BaseHeader"
    >
        <div :class="$style.wrapper">
            <div :class="$style.info">
                <div :class="$style.title">
                    {{ $t('header.info.title') }}
                </div>

                <div :class="$style.socials">
                    <NuxtLink
                        v-for="item in socialList"
                        :key="item.id"
                        :aria-label="item.id"
                        external
                        target="_blank"
                        :to="item.to"
                        :class="$style.link"
                    >
                        <Icon :name="item.id" />
                    </NuxtLink>
                </div>

                <div :class="$style.actions">
                    <select
                        v-model="i18n.locale.value"
                        :aria-label="i18n.locale.value"
                        :class="$style.locale"
                        @change="onChangeLocale"
                    >
                        <option
                            v-for="item in i18n.availableLocales"
                            :key="item"
                            :selected="Boolean(i18n.locale.value === item)"
                            :value="item"
                        >
                            {{ item }}
                        </option>
                    </select>

                    <NuxtLinkLocale
                        to="/print"
                        target="_blank"
                        :class="$style.print"
                    >
                        <Icon name="uil:print" />
                    </NuxtLinkLocale>
                </div>
            </div>

            <div :class="$style.bio">
                <div :class="$style.imageWrapper">
                    <img
                        src="/img/avatar.webp"
                        :alt="$t('header.image.alt')"
                        :class="$style.image"
                    />
                </div>

                <h1 :class="$style.fullName">
                    {{ $t('header.fullName') }}
                </h1>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
function useHeaderHeight() {
    const refHeader = ref<HTMLDivElement>();

    const { height } = useElementBounding(refHeader);
    const cssVar = useCssVar('--ui-header-height', document.documentElement);

    watch(
        height,
        (val) => {
            cssVar.value = `${val}px`;
        },
        {
            immediate: true,
        },
    );
    return {
        refHeader,
    };
}

function useSocialList() {
    const socialList = [
        {
            id: 'uil:telegram',
            to: 'https://t.me/ovchinnikov_lxs',
        },
        {
            id: 'uil:linkedin',
            to: 'https://www.linkedin.com/in/alexander-ovchinnikov-4a569a23b',
        },
        {
            id: 'uil:google',
            to: 'mailto:ovchinnikov.lxs@gmail.com',
        },
        {
            id: 'uil:github',
            to: 'https://github.com/ovchinnikov-lxs',
        },
    ];

    return {
        socialList,
    };
}

function useLocalSwitch() {
    const i18n = useI18n();

    function onChangeLocale(e: Event) {
        const target = e.target as HTMLSelectElement;

        const switchLocalePath = useSwitchLocalePath();

        try {
            navigateTo(switchLocalePath(target.value));
        } catch (err) {
            console.error('USE_LOCAL_SWITCH:ON_CHANGE_LOCALE:', err);
        }
    }

    return {
        i18n,
        onChangeLocale,
    };
}

const { refHeader } = useHeaderHeight();
const { socialList } = useSocialList();
const { i18n, onChangeLocale } = useLocalSwitch();
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
    height: 100%;
    padding: var(--ui-container-padding);
    backdrop-filter: blur(10px);
    border-bottom: var(--ui-border-value);
}

.info {
    display: flex;
    column-gap: 12px;
    align-items: center;
}

.title {
    font-weight: bold;
}

.socials {
    display: flex;
    column-gap: 8px;
    align-items: center;
    margin-left: auto;
}

.link {
    display: flex;
}

.actions {
    display: flex;
    column-gap: 8px;
    align-items: center;
    padding-left: 12px;
    border-left: var(--ui-border-value);
}

.locale {
    font-size: 0.8rem;
    color: var(--ui-black-color);
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
}

.print {
    display: flex;
}

.bio {
    display: flex;
    column-gap: 8px;
    align-items: flex-end;

    @include respond-to(tablet) {
        column-gap: 48px;
    }
}

.fullName {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;

    @include respond-to(tablet) {
        font-size: 4rem;
    }
}

.imageWrapper {
    @include aspect-ratio(1, 1);

    flex-shrink: 0;
    width: 100px;
    overflow: hidden;
    border-radius: 50%;
    transform: translate3d(0, 0, 0);

    @include respond-to(tablet) {
        width: 200px;
    }
}

.image {
    position: absolute;
    inset: 0;
    width: 100%;
}
</style>
