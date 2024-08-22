<template>
    <div
        itemscope
        itemtype="http://schema.org/CreativeWork"
        class="IndexProjectsItem"
    >
        <div :class="$style.wrapper">
            <h3
                itemprop="name"
                :class="$style.name"
            >
                <NuxtLink
                    :to="source"
                    :title="id"
                    external
                    target="_blank"
                    :class="$style.title"
                >
                    {{ id }}

                    <Icon name="uil:arrow-up-right" />
                </NuxtLink>
            </h3>

            <div :class="$style.tags">
                <IndexProjectsTag
                    v-for="item in tags"
                    :key="item"
                    :tag="item"
                />
            </div>

            <div
                itemprop="description"
                :class="$style.description"
            >
                {{ $t(`pages.index.projects.${id}.description`) }}
            </div>

            <div
                v-if="links"
                :class="$style.actions"
            >
                <NuxtLink
                    v-for="(item, key) in links"
                    :key="key"
                    external
                    itemprop="url"
                    :title="$t(`pages.index.projects.links.${key}`)"
                    :to="item"
                    target="_blank"
                >
                    {{ $t(`pages.index.projects.links.${key}`) }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IProjectsItem } from '~/types/projects';

defineProps<IProjectsItem>();
</script>

<style module lang="scss">
.wrapper {
    width: 100%;
    height: 100%;
}

.title {
    display: flex;
    column-gap: 8px;
    align-items: center;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;
    margin-top: 8px;
}

.description {
    margin-top: 16px;
    font-size: 0.9rem;
}

.actions {
    display: flex;
    column-gap: 12px;
    margin-top: 12px;
    font-size: 1rem;
}
</style>
