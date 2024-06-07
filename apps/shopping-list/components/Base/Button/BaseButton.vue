<template>
    <UiButton v-bind="componentAttrs">
        <slot></slot>
    </UiButton>
</template>

<script setup lang="ts">
import type { IUiButtonProps } from '#dev-kit-layer/types/components/button';

const props = withDefaults(defineProps<IUiButtonProps>(), {
    size: 'medium',
    classPrefix: 'Base',
});
const { componentAttrs } = useUiCommon(props);
</script>

<style lang="scss">
.BaseButton {
    $button: &;

    &__wrapper {
        color: var(--ui-white-color);
        background-color: var(--ui-secondary-color);
        border: 3px solid var(--ui-secondary-color);
        border-radius: var(--ui-border-radius-m);

        @include hover {
            background-color: var(--ui-additional-color);
            border-color: var(--ui-additional-color);
        }
    }

    @include ui-size('medium') {
        #{$button} {
            &__wrapper {
                padding: calc(var(--ui-unit) * 2) calc(var(--ui-unit) * 4);
                font-size: 24px;

                @include respond-to(tablet) {
                    font-size: 16px;
                }
            }
        }
    }

    @include ui-size('small') {
        #{$button} {
            &__wrapper {
                padding: var(--ui-unit) calc(var(--ui-unit) * 2);
                font-size: 12px;
            }
        }
    }

    @include ui-state('disabled') {
        #{$button} {
            &__wrapper {
                opacity: 0.8;
            }
        }
    }
}
</style>
