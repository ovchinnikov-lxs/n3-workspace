<template>
    <BaseWrapper
        :title="$t('pages.index.projects.title')"
        :description="$t('pages.index.projects.description')"
        class="IndexProject"
    >
        <div :class="$style.wrapper">
            <IndexProjectsItem
                v-for="item in projects"
                :id="item.id"
                :key="item.id"
                :source="item.source"
                :links="item.links"
                :tags="item.tags"
            />
        </div>
    </BaseWrapper>
</template>

<script setup lang="ts">
const projects = [
    {
        id: 'n3-workspace',
        source: 'https://github.com/ovchinnikov-lxs/n3-workspace',
        tags: [PROJECTS_TAGS.IN_WORKING, PROJECTS_TAGS.FRONTEND],
    },
    {
        id: 'n3-workspace/dev-kit-layer',
        source: 'https://github.com/ovchinnikov-lxs/n3-workspace/tree/master/packages/dev-kit-layer',
        tags: [PROJECTS_TAGS.IN_WORKING, PROJECTS_TAGS.FRONTEND],
    },
    {
        id: 'n3-workspace/shopping-list',
        source: 'https://github.com/ovchinnikov-lxs/n3-workspace/tree/master/apps/shopping-list',
        links: {
            homepage: 'https://ovchinnikov-lxs.github.io/n3-workspace/shopping-list',
        },
        tags: [PROJECTS_TAGS.COMPLETE, PROJECTS_TAGS.FRONTEND],
    },
    {
        id: 'task-trackers',
        source: 'https://github.com/ovchinnikov-lxs/task-trackers',
        links: {
            design: 'https://www.figma.com/community/file/1260446927126496958',
        },
        tags: [PROJECTS_TAGS.IN_WORKING, PROJECTS_TAGS.FRONTEND, PROJECTS_TAGS.BACKEND, PROJECTS_TAGS.DESKTOP_ONLY],
    },
    {
        id: 'groom-crm',
        source: 'https://github.com/ovchinnikov-lxs/groom-crm',
        tags: [PROJECTS_TAGS.IN_WORKING, PROJECTS_TAGS.FRONTEND, PROJECTS_TAGS.NEED_TO_ACTUALIZE, PROJECTS_TAGS.DESKTOP_ONLY],
    },
    {
        id: 'portfolio_gallery',
        source: 'https://github.com/ovchinnikov-lxs/portfolio_gallery',
        links: {
            homepage: 'https://ovchinnikov-lxs.github.io/portfolio_gallery',
            design: 'https://www.figma.com/community/file/1250984082985732893',
        },
        tags: [PROJECTS_TAGS.COMPLETE, PROJECTS_TAGS.FRONTEND, PROJECTS_TAGS.NEED_TO_ACTUALIZE, PROJECTS_TAGS.DESKTOP_ONLY],
    },
    {
        id: 'web-layout-practice',
        source: 'https://github.com/ovchinnikov-lxs/web-layout-practice',
        links: {
            homepage: 'https://ovchinnikov-lxs.github.io/web-layout-practice',
        },
        tags: [PROJECTS_TAGS.FRONTEND, PROJECTS_TAGS.NEED_TO_ACTUALIZE, PROJECTS_TAGS.DESKTOP_ONLY],
    },
    {
        id: 'nuxt3-template',
        source: 'hsttps://github.com/ovchinnikov-lxs/nuxt3-template',
        tags: [PROJECTS_TAGS.OLD, PROJECTS_TAGS.FRONTEND, PROJECTS_TAGS.NEED_TO_ACTUALIZE],
    },
    {
        id: 'todo-back',
        source: 'https://github.com/ovchinnikov-lxs/todo-back',
        tags: [PROJECTS_TAGS.OLD, PROJECTS_TAGS.BACKEND],
    },
    {
        id: 'todo-front',
        source: 'https://github.com/ovchinnikov-lxs/todo-front',
        tags: [PROJECTS_TAGS.OLD, PROJECTS_TAGS.FRONTEND],
    },
];
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 64px;
    width: 100%;
    height: 100%;
}
</style>
