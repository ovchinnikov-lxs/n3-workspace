<template>
    <div :class="$style.DefaultLayout">
        <BaseHeader :class="$style.header" />

        <div
            class="container"
            :class="$style.container"
        >
            <slot />
        </div>

        <Transition
            name="bottom"
            mode="out-in"
        >
            <LazyBaseModal
                v-if="modal.isOpened"
                :class="$style.modal"
            />
        </Transition>

        <BaseFooter :class="$style.footer" />
    </div>
</template>
<script setup lang="ts">
const modal = useModalStore();
</script>

<style lang="scss" module>
.DefaultLayout {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100dvh;
}

.header,
.footer {
    flex-shrink: 0;
}

.container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-top: calc(var(--ui-unit) * 4);
    padding-bottom: calc(var(--ui-unit) * 4);

    & > div {
        display: flex;
        flex-grow: 1;
    }
}

.modal {
    position: fixed;
    inset: 0;
    z-index: 99;
}
</style>
