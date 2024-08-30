<template>
    <div class="ConverterField">
        <div :class="$style.wrapper">
            <Select
                v-model="currencyModel"
                :options="options"
                option-label="name"
                option-value="code"
                placeholder="Выберите валюту"
                class="w-full md:w-56"
            />

            <InputNumber
                v-model:model-value="valueModel"
                input-id="minmaxfraction"
                :use-grouping="false"
                :max-fraction-digits="2"
                fluid
                @input="handleInputValue"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { InputNumberInputEvent } from 'primevue/inputnumber';

interface IOption {
    code: string;
    name: string;
}

defineProps<{
    options: IOption[];
}>();

const currencyModel = defineModel<string>('currency', { required: true });
const valueModel = defineModel<number | null>('value', { required: true });

function handleInputValue(event: InputNumberInputEvent) {
    valueModel.value = Number(event.value);
}
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    column-gap: 8px;
    align-items: center;
}
</style>
