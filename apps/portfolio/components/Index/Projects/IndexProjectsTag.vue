<template>
    <span class="IndexProjectsTag">
        <span
            :style="styleList"
            :class="$style.wrapper"
        >
            {{ $t(`pages.index.projects.tags.${tag}`) }}
        </span>
    </span>
</template>

<script setup lang="ts">
import type { TProjectTag } from '~/types/projects';

const props = defineProps<{
    tag: TProjectTag;
}>();

const styleList = computed(() => ({
    '--current-color': `var(--color-${props.tag})`,
}));
</script>

<style module lang="scss">
.wrapper {
    width: 100%;
    height: 100%;
    padding: 2px 4px;
    font-size: 0.8rem;
    color: var(--current-color);
    user-select: none;
    border: 1px solid var(--current-color);

    --color-in-working: #005f73;
    --color-complete: #0a9396;
    --color-need-to-actualize: #ae2012;
    --color-old: #bb3e03;
    --color-frontend: #9b2226;
    --color-backend: #3a506b;
    --color-desktop-only: #00509d;
    --color-test: #28b20d;

    --current-color: var(--color-in-working);
}
</style>
