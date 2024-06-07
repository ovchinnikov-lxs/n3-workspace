<template>
    <div class="LoginPage">
        <form
            :class="$style.wrapper"
            @submit.prevent="onSubmit"
        >
            <h2>
                {{ $t('pages.login.subtitle') }}
            </h2>

            <BaseInput
                id="login-email"
                v-model="actualValue.email"
                maxlength="255"
                autocomplete="email"
                required
                type="email"
                :placeholder="$t('pages.login.email.placeholder')"
                :title="$t('pages.login.email.title')"
            />

            <BaseInput
                id="login-password"
                v-model="actualValue.password"
                maxlength="255"
                autocomplete="password"
                required
                type="password"
                :placeholder="$t('pages.login.password.placeholder')"
                :title="$t('pages.login.password.title')"
            />

            <NuxtLinkLocale to="/register">{{ $t('pages.login.registerLink') }}</NuxtLinkLocale>

            <BaseButton :disabled="!actualValue.email?.length && !actualValue.password?.length">
                <template v-if="isLoading">
                    {{ $t('pages.login.button.loading') }}
                </template>

                <template v-else>
                    {{ $t('pages.login.button.submit') }}
                </template>
            </BaseButton>

            <Transition
                name="bottom"
                mode="out-in"
            >
                <div
                    v-if="info.status"
                    :class="[$style.info, infoClassList]"
                >
                    {{ infoMessage }} {{ info.details }}
                </div>
            </Transition>
        </form>
    </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const style = useCssModule();
const i18n = useI18n();

interface IInfo {
    status: 'success' | 'error' | string;
    details: string;
}

useSeoMeta({
    title: () => i18n.t('pages.login.title'),
});

const isLoading = ref(false);
const actualValue = reactive({
    email: '',
    password: '',
});

const info: IInfo = reactive({
    status: '',
    details: '',
});

const infoMessage = computed(() => i18n.t(`pages.login.info.${info.status}`));

async function onSubmit() {
    if (isLoading.value) {
        return false;
    }

    info.details = '';
    info.status = '';

    try {
        isLoading.value = true;
        const { error } = await supabase.auth.signInWithPassword(actualValue);

        if (error) {
            info.details = error.message;
            info.status = 'error';
        } else {
            info.status = 'success';
        }
    } catch (e) {
        info.status = 'undefinedError';
        console.error('LOGIN_PAGE:ON_SUBMIT:', e);
    } finally {
        isLoading.value = false;
    }
}

const infoClassList = computed(() => [
    [style[`--${info.status}-status`]],
]);

const user = useSupabaseUser();
const localePath = useLocalePath();

watch(
    user,
    async (val) => {
        if (val) {
            await nextTick();
            await navigateTo(localePath('/'), {
                replace: true,
            });
        }
    },
    { immediate: true },
);
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
    height: 100%;
}

.info {
    padding: calc(var(--ui-unit) * 3);

    &.--success-status {
        color: var(--ui-secondary-color);
    }

    &.--error-status {
        color: var(--ui-error-color);
    }
}
</style>
