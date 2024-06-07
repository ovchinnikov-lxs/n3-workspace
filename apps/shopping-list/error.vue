<template>
    <div class="ErrorPage">
        <NuxtLayout name="default">
            <div :class="$style.wrapper">
                <h1 :class="$style.status">{{ error.statusCode }}</h1>

                <p>
                    {{ error.message }}
                </p>

                <NuxtLinkLocale
                    to="/"
                    :class="$style.link"
                >
                    {{ $t('pages.error.link.home') }}
                </NuxtLinkLocale>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
    error: NuxtError;
}>();
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.status {
    font-size: 70px;
    color: var(--ui-primary-color);
}

.link {
    color: var(--ui-additional-color);

    @include hover {
        color: var(--ui-primary-color);
        text-decoration: underline;
    }
}
</style>
