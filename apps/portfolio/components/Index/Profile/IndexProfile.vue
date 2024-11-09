<template>
    <BaseWrapper
        :title="$t('pages.index.profile.title')"
        class="IndexProfile"
    >
        <div :class="$style.wrapper">
            <div :class="$style.text">
                <p
                    v-for="(text, index) in $tm('pages.index.profile.text')"
                    :key="index"
                    v-html="$rt(text)"
                ></p>
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
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    font-family: 'Playfair Display', serif;
    font-weight: bolder;
    line-height: 120%;

    p {
        margin: 0;
    }
}
</style>
