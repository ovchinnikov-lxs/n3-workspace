<template>
    <section class="ConvertPage">
        <div :class="$style.wrapper">
            <ConverterField
                v-for="(_, index) in actualValue"
                :key="index"
                :options="currencyOptions"
                :currency="actualValue[index].currency"
                :value="actualValue[index].value"
                @update:currency="handleUpdateCurrency(index, $event)"
                @update:value="handleUpdateValue(index, $event)"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
function useConverter() {
    const { currencyOptions, rates } = storeToRefs(useCurrencyStore());

    const initialValue = Array.from({ length: 2 }, (_, index) => ({
        currency: currencyOptions.value[index].code,
        value: null,
    }));

    const actualValue = ref<
        {
            currency: string;
            value: number | null;
        }[]
    >(initialValue);

    function getDifferentKey(key: number): number {
        const map = new Map<number, number>([
            [0, 1],
            [1, 0],
        ]);

        return map.get(key)!;
    }

    function handleUpdateValue(key: number, newValue: number | null, force?: boolean) {
        if (actualValue.value[key].value === newValue && !force) {
            return;
        }

        actualValue.value[key].value = newValue;

        const diffKey = getDifferentKey(key);
        const actualCurrency = actualValue.value[key].currency;
        const differentCurrency = actualValue.value[diffKey].currency;

        actualValue.value[diffKey].value = Number((Number(actualValue.value[key].value) * rates.value[`${actualCurrency}-${differentCurrency}`]).toFixed(2));
    }

    function handleUpdateCurrency(key: number, newValue: string) {
        const diffKey = getDifferentKey(key);
        const currentValue = actualValue.value[key].currency;
        const differentValue = actualValue.value[diffKey].currency;

        if (newValue === differentValue) {
            actualValue.value[diffKey].currency = currentValue;
        }

        actualValue.value[key].currency = newValue;

        handleUpdateValue(key, actualValue.value[key].value, true);
    }

    return {
        currencyOptions,
        actualValue,
        handleUpdateCurrency,
        handleUpdateValue,
    };
}

const { currencyOptions, actualValue, handleUpdateCurrency, handleUpdateValue } = useConverter();
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
}
</style>
