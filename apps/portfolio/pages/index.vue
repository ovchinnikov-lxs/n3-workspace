<template>
    <div class="IndexPage">
        <div :class="$style.wrapper">
            <Component
                :is="value"
                v-for="[key, value] in componentMap"
                :key="key"
                :class="$style.block"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { IndexEmployment, IndexProfile, IndexProjects, IndexSkills } from '#components';

const componentMap = new Map([
    ['profile', IndexProfile],
    ['skills', IndexSkills],
    ['employment', IndexEmployment],
    ['projects', IndexProjects],
]);
</script>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.block {
    width: 100%;

    &:not(:first-child) {
        border-top: var(--ui-border-value);
    }
}
</style>
