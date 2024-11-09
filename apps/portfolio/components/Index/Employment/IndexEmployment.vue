<template>
    <BaseWrapper
        :title="$t('pages.index.employment.title')"
        :description="$t('pages.index.employment.amount', { amount })"
        class="IndexEmployment"
    >
        <div :class="$style.wrapper">
            <div
                v-for="(item, index) in $tm('pages.index.employment.list')"
                :key="index"
            >
                <div :class="$style.title">{{ $rt(item.title) }}, {{ $rt(item.company) }}, {{ $rt(item.type) }}</div>

                <div :class="$style.date">{{ $rt(item.startDate) }} - {{ $rt(item.endDate) }}</div>

                <div :class="$style.subtitle">
                    {{ $t('pages.index.employment.tasksTitle') }}
                </div>

                <div :class="$style.description">
                    <ul>
                        <li
                            v-for="(task, taskIndex) in item.tasks"
                            :key="taskIndex"
                            v-html="task"
                        ></li>
                    </ul>
                </div>

                <div :class="$style.subtitle">
                    {{ $t('pages.index.employment.achievementsTitle') }}
                </div>

                <ul :class="$style.description">
                    <li
                        v-for="(achievement, achievementIndex) in item.achievements"
                        :key="achievementIndex"
                        v-html="achievement"
                    ></li>
                </ul>
            </div>
        </div>
    </BaseWrapper>
</template>

<script setup lang="ts">
const amount = new Date().getFullYear() - new Date('08.09.2020').getFullYear();
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    width: 100%;
    height: 100%;
}

.title {
    font-weight: bold;
}

.subtitle {
    font-size: 0.9rem;
    font-weight: bold;
}

.date {
    margin-top: 4px;
    margin-bottom: 12px;
    font-size: 0.75rem;
    opacity: 0.6;
}

.description {
    font-size: 0.9rem;
}
</style>
