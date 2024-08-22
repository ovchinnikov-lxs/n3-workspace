<template>
    <BaseWrapper
        :title="$t('pages.index.profile.title')"
        class="IndexProfile"
    >
        <div :class="$style.wrapper">
            <div :class="$style.text">
                {{ $t('pages.index.profile.text') }}
            </div>
        </div>
    </BaseWrapper>
</template>

<style module lang="scss">
.wrapper {
    width: 100%;
    height: 100%;
}

.text {
    font-family: 'Playfair Display', serif;
    font-weight: bolder;
}
</style>
