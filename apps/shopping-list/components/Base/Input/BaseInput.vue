<template>
    <UiInput v-bind="componentAttrs" />
</template>

<script setup lang="ts">
import type { IUiInputProps } from '#dev-kit-layer/types/components/input';

const props = withDefaults(defineProps<IUiInputProps>(), {
    size: 'medium',
    classPrefix: 'Base',
});

const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseInput {
    $input: &;

    &__item {
        background-color: var(--ui-white-color);
        border: 3px solid var(--ui-primary-color);
        border-radius: var(--ui-border-radius-m);
    }

    @include ui-size('medium') {
        #{$input} {
            &__item {
                padding: calc(var(--ui-unit) * 2) calc(var(--ui-unit) * 4);
                font-size: 24px;

                @include respond-to(tablet) {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
