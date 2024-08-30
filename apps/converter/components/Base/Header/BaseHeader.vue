<template>
    <header class="BaseHeader">
        <Menubar :model="items">
            <template #item="{ item }">
                <Button
                    v-if="item.route"
                    :as="NuxtLink"
                    :label="item.label"
                    :to="item.route"
                    :class="$style.link"
                    link
                />
            </template>

            <template #end>
                <div class="flex items-center gap-2">
                    <Select
                        v-model="currency"
                        :options="currencyOptions"
                        option-label="name"
                        option-value="code"
                        placeholder="Выберите валюту"
                        class="w-full md:w-56"
                    />
                </div>
            </template>
        </Menubar>
    </header>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

function useNavbar() {
    const items = ref([
        {
            label: 'Главная',
            route: '/',
        },
        {
            label: 'Конвертация',
            route: '/convert',
        },
    ]);

    return {
        items,
    };
}

function useCurrencySelect() {
    const { currency, currencyOptions } = storeToRefs(useCurrencyStore());

    return {
        currency,
        currencyOptions,
    };
}

const { items } = useNavbar();
const { currency, currencyOptions } = useCurrencySelect();
</script>

<style lang="scss" module>
.link {
    &:not(:global(.--is-active-link)) {
        text-decoration: none;
    }
}
</style>
