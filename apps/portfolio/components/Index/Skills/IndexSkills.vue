<template>
    <BaseWrapper
        :title="$t('pages.index.skills.title')"
        :description="$t('pages.index.skills.description')"
        class="IndexSkills"
    >
        <div :class="$style.wrapper">
            <div
                v-for="item in skillsList"
                :key="item.category"
                :class="$style.category"
            >
                <div :class="$style.header">
                    {{ item.category }}
                </div>

                <div :class="$style.skills">
                    <div
                        v-for="skill in item.skills"
                        :key="skill.id"
                        :class="$style.item"
                    >
                        <Icon
                            v-if="skill.id"
                            :name="skill.id"
                        />
                        {{ skill.name }}
                    </div>
                </div>
            </div>
        </div>
    </BaseWrapper>
</template>

<script setup lang="ts">
const skillsList = [
    {
        category: 'Frontend',
        skills: [
            { id: 'logos:html-5', name: 'HTML' },
            { id: 'logos:css-3', name: 'CSS' },
            { id: 'logos:javascript', name: 'JavaScript' },
            { id: 'logos:typescript-icon', name: 'Typescript' },
            { id: 'logos:vue', name: 'Vue' },
            { id: 'uil:web-grid', name: 'Responsive Design' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { id: 'logos:nodejs-icon', name: 'Node.js' },
            { id: 'logos:express', name: 'Express.js' },
            { id: 'logos:nestjs', name: 'Nest.js' },
            { id: 'logos:supabase-icon', name: 'Supabase' },
            { id: 'logos:postgresql', name: 'PostgreSQL' },
            { id: 'uil:laptop-connection', name: 'SSE/WebSockets' },
        ],
    },
    {
        category: 'Tooling',
        skills: [
            { id: 'logos:sass', name: 'SCSS' },
            { id: 'uil:web-grid-alt', name: 'BEM' },
            { id: 'logos:vueuse', name: 'VueUse' },
            { id: 'logos:vue', name: 'Vuelidate' },
            { id: 'vscode-icons:file-type-style', name: 'Style Modules' },
            { id: 'logos:python', name: 'Python' },
            { id: 'logos:lodash', name: 'Lodash' },
            { id: 'logos:pinia', name: 'Pinia' },
            { id: 'logos:strapi-icon', name: 'Strapi' },
            { id: 'logos:vue', name: 'i18n' },
            { id: 'uil:arrows-h-alt', name: 'Swiper' },
            { id: 'logos:pwa', name: 'PWA' },
            { id: 'logos:git-icon', name: 'Git' },
            { id: 'logos:github-actions', name: 'CI/CD' },
            { id: 'logos:prettier', name: 'Prettier' },
            { id: 'logos:eslint', name: 'ESLint' },
            { id: 'logos:stylelint', name: 'Stylelint' },
            { id: 'logos:figma', name: 'Figma' },
            { id: 'logos:figma', name: 'Figma Tokens' },
            { id: 'logos:storybook-icon', name: 'Storybook' },
        ],
    },
    {
        category: 'Testing',
        skills: [
            { id: 'logos:cypress-icon', name: 'Cypress' },
            { id: 'logos:jest', name: 'Jest' },
        ],
    },
    {
        category: 'Optimization',
        skills: [
            { id: 'uil:robot', name: 'SEO Optimization' },
            { id: 'logos:lighthouse', name: 'Project Optimization' },
        ],
    },
    {
        category: 'Code Quality',
        skills: [
            { id: 'uil:brackets-curly', name: 'Code Review' },
            { id: 'vscode-icons:folder-type-docs', name: 'Documentation' },
        ],
    },
];
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    width: 100%;
    height: 100%;
}

.category {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    width: 100%;
}

.header {
    font-size: 1rem;
    font-weight: bold;
}

.skills {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    font-family: 'Roboto Mono', monospace;
}

.item {
    display: flex;
    column-gap: 8px;
    align-items: center;
    font-size: 1rem;
}
</style>
