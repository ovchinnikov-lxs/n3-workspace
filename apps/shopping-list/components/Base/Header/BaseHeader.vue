<template>
    <header class="BaseHeader">
        <div :class="$style.wrapper">
            <main
                :class="$style.container"
                class="container"
            >
                <NuxtLinkLocale
                    to="/"
                    :class="$style.logo"
                >
                    <h1>{{ 'Shopping list' }}</h1>

                    <img
                        src="/img/logo.svg"
                        alt=""
                        loading="lazy"
                    />
                </NuxtLinkLocale>

                <Transition
                    name="bottom"
                    mode="out-in"
                >
                    <LazyBaseButton
                        v-if="route.params.id"
                        size="small"
                        @click="onOpenModal"
                    >
                        {{ $t('header.button.share') }}
                    </LazyBaseButton>
                </Transition>

                <div
                    v-if="user"
                    :class="$style.user"
                >
                    <b>
                        {{ user.email }}
                    </b>

                    <LazyBaseButton
                        size="small"
                        :class="$style.signOut"
                        @click="signOut"
                    >
                        {{ $t('button.signOut') }}
                    </LazyBaseButton>
                </div>
            </main>
        </div>
    </header>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const localePath = useLocalePath();

const onOpenModal = () => {
    const modal = useModalStore();
    modal.changeState();
};

const route = useRoute();

const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log(error);
    }

    navigateTo(localePath('/login'));
};
</script>

<style lang="scss" module>
.wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: calc(var(--ui-unit) * 13);
    padding: calc(var(--ui-unit) * 3) 0;
    background-color: var(--ui-primary-color);
    border-bottom-right-radius: var(--ui-border-radius-m);
    border-bottom-left-radius: var(--ui-border-radius-m);

    @include respond-to(tablet) {
        h1 {
            font-size: 14px;
        }
    }
}

.container {
    display: flex;
    column-gap: calc(var(--ui-unit) * 3);
    align-items: center;
}

.logo {
    color: var(--ui-white-color);

    img {
        display: none;
        width: 32px;
        height: 32px;

        @include respond-to(tablet) {
            display: block;
        }
    }

    h1 {
        display: block;

        @include respond-to(tablet) {
            display: none;
        }
    }
}

.user {
    display: flex;
    column-gap: calc(var(--ui-unit) * 2);
    align-items: center;
    margin-left: auto;
    overflow: hidden;
    font-size: 12px;
    color: var(--ui-white-color);
    text-overflow: ellipsis;
    white-space: nowrap;

    b {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.signOut {
    flex-shrink: 0;
}
</style>
