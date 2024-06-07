<template>
    <div class="BaseFooter">
        <div :class="$style.wrapper">
            <main
                :class="$style.container"
                class="container"
            >
                {{ $t('app.version') }}{{ ': 2.0.0 |' }}
                <NuxtLink
                    to="https://github.com/ovchinnikov-lxs"
                    :class="$style.link"
                >
                    {{ 'ME' }}
                </NuxtLink>
                |
                <NuxtLink
                    to="https://github.com/ovchinnikov-lxs/shopping-list"
                    :class="$style.link"
                >
                    {{ 'REPO' }}
                </NuxtLink>

                <select
                    v-model="i18n.locale.value"
                    :class="$style.locale"
                    :aria-label="ariaLabel"
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
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
const i18n = useI18n();

const ariaLabel = 'Language';

function onChangeLocale(e: Event) {
    const target = e.target as HTMLSelectElement;

    const switchLocalePath = useSwitchLocalePath();

    try {
        navigateTo(switchLocalePath(target.value));
    } catch (err) {
        console.log(err);
    }
}
</script>

<style lang="scss" module>
.wrapper {
    column-gap: calc(var(--ui-unit) * 12);
    width: 100%;
    height: 100%;
    padding: calc(var(--ui-unit) * 4) 0;
    font-weight: bold;
    color: var(--ui-white-color);
    background-color: var(--ui-primary-color);
    border-top-left-radius: var(--ui-border-radius-m);
    border-top-right-radius: var(--ui-border-radius-m);
}

.container {
    display: flex;
    align-items: center;
}

.link {
    color: var(--ui-additional-color);
}

.locale {
    margin-left: auto;
    color: var(--ui-white-color);
    background-color: var(--ui-primary-color);
    border: none;
    outline: none;
}
</style>
