<template>
    <section class="BaseWrapper">
        <div :class="$style.wrapper">
            <aside :class="$style.aside">
                <h2 :class="$style.title">
                    {{ title }}
                </h2>

                <div
                    v-if="description"
                    :class="$style.description"
                >
                    {{ description }}
                </div>
            </aside>

            <article :class="$style.article">
                <slot></slot>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description?: string;
}>();
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    column-gap: 8px;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: var(--ui-container-padding);

    @include respond-to(tablet) {
        flex-direction: row;
        column-gap: 32px;
    }
}

.aside {
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    @include respond-to(tablet) {
        position: sticky;
        top: calc(var(--ui-header-height) + var(--ui-container-padding));
        flex-shrink: 0;
        width: 120px;
    }
}

.title {
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;

    @include respond-to(tablet) {
        font-size: 1rem;
    }
}

.description {
    font-size: 0.8rem;
    text-transform: none;
    opacity: 0.6;
}

.article {
    flex-grow: 1;
}
</style>
