<template>
    <div class="BaseListItem">
        <div :class="$style.wrapper">
            <img
                :src="`https://cataas.com/cat?width=48&height=48&v=${name}`"
                alt=""
                loading="lazy"
                :class="$style.icon"
            />

            <div :class="$style.name">
                {{ name }}

                <div
                    v-if="+count > 1"
                    :class="$style.count"
                >
                    {{ count }}
                </div>
            </div>

            <div :class="$style.action">
                <div :class="$style.change">
                    <div
                        :class="$style.plus"
                        @click="emit('change', { count: +count + 1 })"
                    />

                    <div
                        :class="[$style.minus, { [$style['--is-disabled']]: +count < 2 }]"
                        @click="emit('change', { count: +count - 1 })"
                    />
                </div>

                <div
                    :class="$style.remove"
                    @click="emit('remove')"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
    count: number | string;
}>();

const emit = defineEmits<{
    change: [value: object];
    remove: [void];
}>();
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    column-gap: calc(var(--ui-unit) * 4);
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: var(--ui-col);
    padding: calc(var(--ui-unit) * 3);
    border: 2px solid var(--ui-primary-color);
    border-radius: var(--ui-border-radius-m);
}

.icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    object-fit: cover;
    border-radius: var(--ui-border-radius-m);
}

.name {
    display: flex;
    column-gap: calc(var(--ui-unit) * 2);
    align-items: center;
    font-weight: bold;
}

.count {
    padding: var(--ui-unit) calc(var(--ui-unit) * 3);
    font-size: 12px;
    color: var(--ui-white-color);
    background-color: var(--ui-primary-color);
    border-radius: var(--ui-border-radius-m);
}

.action {
    display: flex;
    column-gap: calc(var(--ui-unit) * 8);
    margin-left: auto;
}

.change {
    display: flex;
    column-gap: calc(var(--ui-unit) * 2);
    align-items: center;
}

.plus,
.minus,
.remove {
    position: relative;
    width: 24px;
    height: 24px;

    &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
}

.plus,
.minus {
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    @include hover {
        transform: scale(1.2);
    }
}

.plus {
    &::before {
        content: '➕';
    }
}

.minus {
    &::before {
        content: '➖';
    }

    &.--is-disabled {
        pointer-events: none;
        opacity: 0.4;
    }
}

.remove {
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &::before {
        content: '❌';
    }

    @include hover {
        transform: scale(1.2);
    }
}
</style>
