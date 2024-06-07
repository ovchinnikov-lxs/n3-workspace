<template>
    <div class="BaseModal">
        <div
            :class="$style.wrapper"
            @click.self="modal.changeState"
        >
            <div :class="$style.content">
                <div :class="$style.imageWrapper">
                    <div
                        :class="$style.image"
                        v-html="svgSource"
                    ></div>
                </div>

                <LazyBaseButton
                    v-if="isSupported"
                    @click="copy(source)"
                >
                    <template v-if="!copied">
                        {{ t('modal.button.share.link.copy') }}
                    </template>

                    <template v-else>
                        {{ t('modal.button.share.link.copied') }}
                    </template>
                </LazyBaseButton>

                <BaseButton
                    :to="tgLink"
                    target="_blank"
                    size="medium"
                >
                    {{ t('modal.button.share.tg') }}
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { renderSVG } from 'uqr';

const svgSource = renderSVG(location.href, {
    whiteColor: 'var(--ui-white-color)',
    blackColor: 'var(--ui-black-color)',
});

const modal = useModalStore();
const { t } = useI18n();

const source = ref(location.href);
const { copy, copied, isSupported } = useClipboard({ source });

const tgLink = computed(() => `https://t.me/share/url?url=${location.href}`);
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 15%);
}

.content {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 4);
    min-width: 30%;
    padding: var(--ui-col);
    background-color: var(--ui-white-color);
    border-radius: var(--ui-border-radius-m);
}

.imageWrapper {
    @include aspect-ratio(1, 1);

    width: 100%;
    border-radius: var(--ui-border-radius-m);
}

.image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}
</style>
