<template>
    <div class="ConfirmPage">
        <div :class="$style.wrapper">
            {{ $t('pages.confirm.subtitle') }}
            <BaseLoader />
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const localePath = useLocalePath();

watch(user, checkUser, { immediate: true });

async function checkUser() {
    if (user.value) {
        await nextTick();
        return navigateTo(localePath('/'), {
            replace: true,
        });
    }
}

onMounted(checkUser);
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>
