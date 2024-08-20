<template>
    <div class="IndexPage">
        <div :class="$style.wrapper">
            <h1>
                {{ 'My Portfolio (..in progress)' }}
            </h1>

            <NuxtLink
                to="/n3-workspace/shopping-list"
                external
            >
                {{ 'Shopping List' }}
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" module>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
</style>
