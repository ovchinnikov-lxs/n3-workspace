<template>
    <Component
        :is="tag"
        :class="[getClassName('Icon'), classList]"
    >
        <LazySvgIcon
            v-if="!isValidUrl(icon)"
            :name="icon"
            :view-box="viewBox"
            :class="getClassName('Icon__el')"
        />

        <span
            v-else-if="externalData"
            ref="externalRef"
            :class="[getClassName('Icon__el'), externalClassList]"
            v-html="externalData"
        >
        </span>
    </Component>
</template>

<script setup lang="ts">
import type { IUiIconProps } from '#dev-kit-layer/types/components/icon';
import type { TUiClassList } from '#dev-kit-layer/types';

const props = withDefaults(defineProps<IUiIconProps>(), {
    tag: 'span',
    viewBox: '0 0 32 32',
});

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
]);

async function useExternalIcon() {
    const { data: externalData } = await useAsyncData(`external-icon-${props.icon}`, async () => {
        try {
            if (!isValidUrl(props.icon)) {
                return null;
            }

            if (!props.icon.includes('svg')) {
                return null;
            }

            return await $fetch<string>(props.icon, { responseType: 'text' });
        } catch (e) {
            console.error('UI_ICON:ASYNC_DATA', e);
            return null;
        }
    });

    const externalRef = ref<HTMLSpanElement>();

    const isLoaded = ref(true);

    const initExternalIcon = async () => {
        if (!externalRef.value) {
            return;
        }

        Array.from(externalRef.value.children).forEach((child) => {
            child.removeAttribute('width');
            child.removeAttribute('height');
        });
    };

    async function handleExternalMounted() {
        await initExternalIcon();
        await nextTick();

        isLoaded.value = true;
    }

    const externalClassList = computed(() => [
        '--is-external',
        {
            '--is-loaded': isLoaded.value,
        },
    ]);

    return {
        externalData,
        externalRef,
        externalClassList,
        handleExternalMounted,
    };
}

const { externalData, externalRef, externalClassList, handleExternalMounted } = await useExternalIcon();

onMounted(() => {
    handleExternalMounted();
});
</script>

<style lang="scss">
.UiIcon {
    display: inline-block;
    fill: currentcolor;

    &__el {
        display: block;
        width: 100%;
        height: 100%;

        svg {
            width: 100%;
            height: 100%;
        }

        &.--is-external {
            opacity: 0;

            &.--is-loaded {
                opacity: 1;
            }
        }
    }
}
</style>
