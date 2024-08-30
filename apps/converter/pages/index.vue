<template>
    <section class="IndexPage">
        <DataTable :value="currencyData">
            <Column
                field="code"
                header="Валюта"
            ></Column>

            <Column
                field="value"
                header="Стоимость"
            ></Column>
        </DataTable>
    </section>
</template>

<script setup lang="ts">
function useCurrencyData() {
    const currencyStore = useCurrencyStore();

    const currencyData = computed(() =>
        currencyStore.options.map((code) => ({
            code: code.toUpperCase(),
            value: currencyStore.rates[`${code}-${currencyStore.currency}`] || 1,
        })),
    );

    return {
        currencyData,
    };
}

const { currencyData } = useCurrencyData();
</script>
