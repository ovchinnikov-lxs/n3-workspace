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

                <div
                    :class="$style.description"
                    v-html="$rt(item.description)"
                ></div>
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

.date {
    margin-top: 4px;
    font-size: 0.75rem;
    opacity: 0.6;
}

.description {
    font-size: 0.9rem;
}
</style>
