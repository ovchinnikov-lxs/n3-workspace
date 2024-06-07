<template>
    <textarea
        ref="textareaRef"
        v-model="model"
        cols="1"
        class="BaseTextarea"
        @input="onInput"
    />
</template>

<script setup lang="ts">
const model = defineModel<string>();

const textareaRef = ref<HTMLTextAreaElement>();

function calcHeight() {
    if (!textareaRef.value) {
        return false;
    }

    textareaRef.value.style.height = '5px';
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
}

function onInput() {
    calcHeight();
}

watch(
    () => model.value,
    async () => {
        await nextTick();
        calcHeight();
    },
);

onMounted(() => {
    calcHeight();
});
</script>

<style lang="scss">
.BaseTextarea {
    min-height: 50px;
    padding: calc(var(--ui-unit) * 2) calc(var(--ui-unit) * 4);
    font-size: 24px;
    resize: none;
    background-color: var(--ui-white-color);
    border: 3px solid var(--ui-primary-color);
    border-radius: var(--ui-border-radius-m);

    @include respond-to(tablet) {
        min-height: 40px;
    }

    @include respond-to(tablet) {
        font-size: 16px;
    }
}
</style>
