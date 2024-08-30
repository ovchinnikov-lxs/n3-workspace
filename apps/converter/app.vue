<template>
    <div class="AppInstance">
        <div :class="$style.wrapper">
            <BaseHeader />

            <Card>
                <template #content>
                    <NuxtLayout>
                        <NuxtPage />
                    </NuxtLayout>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
const currencyStore = useCurrencyStore();

await callOnce(currencyStore.fetchCurrency);
</script>

<style module lang="scss">
body {
    font-family: 'Open Sans', sans-serif;
}

.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    max-width: 800px;
    margin: 0 auto;
}
</style>
