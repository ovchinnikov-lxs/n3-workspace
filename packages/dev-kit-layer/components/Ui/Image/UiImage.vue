<template>
    <div :class="[getClassName('Image'), classList]">
        <div :class="getClassName('Image__wrapper')">
            <picture>
                <source
                    v-for="(item, index) in imageSources"
                    :key="index"
                    :media="item.media"
                    :srcset="item.srcset"
                    :data-media-key="item.dataMediaKey"
                />

                <img
                    v-bind="originAttrs"
                    ref="imageRef"
                    :alt="alt"
                    :class="[getClassName('Image__origin'), originClassList]"
                    @error="onError"
                    @load="onLoad"
                />
            </picture>

            <div
                v-if="preview"
                :class="[getClassName('Image__preview'), previewClassList]"
            >
                <slot name="preview"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { isObject } from 'lodash';
import type { IPXModifiers, ResolvedImage } from '@nuxt/image';
import defu from 'defu';
import type { IUiImageObjectSrc, IUiImageProps, IUiImageSourceItem, TUiImageMediaKey, TUiImageMediaValue, TUiImageSrc } from '#dev-kit-layer/types/components/image';

const props = withDefaults(defineProps<IUiImageProps>(), {
    defaultModifiers: () => ({
        quality: 90,
        format: 'webp',
    }),
    ratio: 1,
});

/**
 * Components emits - error and loaded events
 */
const emit = defineEmits<{
    error: [void];
    loaded: [void];
}>();

const ORDERED_MEDIA_LIST = Object.keys(IMAGE_MEDIA_QUERIES);

const img = useImage();

function extractUrl(value: TUiImageMediaValue): { url: string; options?: Partial<IPXModifiers> } {
    if (!value) {
        return {
            url: '',
        };
    }

    if (typeof value !== 'object') {
        return {
            url: value,
        };
    }

    if ('data' in value) {
        return {
            url: '',
        };
    }

    if (typeof value.src !== 'string') {
        return extractUrl(value.src);
    }

    return {
        url: value.src,
        options: value.options,
    };
}

function generateUrl(value?: TUiImageMediaValue): ResolvedImage['url'] {
    if (!value) {
        return '';
    }

    const { url, options } = extractUrl(value);

    if (props.origin) {
        return url;
    }

    return img(
        url,
        defu(
            {
                ...options,

                ...(options?.width && {
                    width: Number((options.width * props.ratio).toFixed()),
                }),

                ...(options?.height && {
                    height: Number((options.height * props.ratio).toFixed()),
                }),
            },
            props.defaultModifiers,
        ),
    );
}

const imageSources = computed(() => {
    if (!isObject(props.src)) {
        return [];
    }

    if ('src' in props.src || 'data' in props.src) {
        return [];
    }

    const imageSource = props.src as IUiImageObjectSrc;

    return (Object.keys(imageSource) as TUiImageMediaKey[])
        .toSorted((a, b) => {
            return ORDERED_MEDIA_LIST.indexOf(a) - ORDERED_MEDIA_LIST.indexOf(b);
        })
        .reduce<IUiImageSourceItem[]>((acc, mediaKey) => {
            const currentSource = imageSource[mediaKey];
            let fallback: TUiImageMediaValue = '';

            if (props.fallback && typeof props.fallback === 'object') {
                if (!('src' in props.fallback)) {
                    if (!('data' in props.fallback)) {
                        fallback = props.fallback[mediaKey] || '';
                    }
                }
            }

            const srcset = generateUrl(currentSource) || generateUrl(fallback);

            acc.push({
                dataMediaKey: mediaKey,
                media: IMAGE_MEDIA_QUERIES[mediaKey],
                srcset,
            });
            return acc;
        }, []);
});

function getImageSrc(value?: TUiImageSrc): string {
    if (typeof value === 'object') {
        if (value) {
            if (!('data' in value)) {
                if (!('src' in value)) {
                    const sortedKeys = (Object.keys(value) as TUiImageMediaKey[]).toSorted((a, b) => {
                        const indexA = ORDERED_MEDIA_LIST.indexOf(a);
                        const indexB = ORDERED_MEDIA_LIST.indexOf(b);

                        return indexA - indexB;
                    });

                    const imageValue = value[sortedKeys[0]];

                    if (!imageValue) {
                        return '';
                    }

                    const { url } = extractUrl(imageValue);

                    return url;
                }
                {
                    const { url } = extractUrl(value);

                    return url;
                }
            } else {
                return '';
            }
        }
    }

    if (!value) {
        return '';
    }

    const { url } = extractUrl(value);

    return url;
}

const isSwiperLazy = computed(() => props.lazy === 'swiper');

const originAttrs = computed(() => ({
    ...(process.server ? { onerror: "this.setAttribute('data-error', 1)" } : {}),
    ...(process.server ? { onload: "this.setAttribute('data-load', 1)" } : {}),

    ...(props.lazy && {
        loading: 'lazy',
    }),

    src: getImageSrc(props.src) || getImageSrc(props.fallback),
}));

const originClassList = computed(() => [
    {
        'swiper-lazy': isSwiperLazy.value,
    },
]);

const previewClassList = computed(() => [
    { 'swiper-lazy-preloader': isSwiperLazy.value },
]);

const imageRef = ref<HTMLImageElement>();
const isLoaded = ref(false);

function onError() {
    emit('error');

    if (!props.fallback || !imageRef.value || !imageRef.value.parentNode) {
        return false;
    }

    Array.from(imageRef.value.parentNode.children).forEach((value) => {
        if (!props.fallback) {
            return;
        }

        const element = value as HTMLImageElement | HTMLSourceElement;

        const elMediaKey = element.dataset.mediaKey as TUiImageMediaKey | undefined;

        if (!elMediaKey) {
            const fallbackSrc = getImageSrc(props.fallback);
            if (element.src !== fallbackSrc) {
                element.src = fallbackSrc;
            }
        } else {
            let fallback: TUiImageMediaValue = '';

            if (props.fallback && typeof props.fallback === 'object') {
                if (!('src' in props.fallback)) {
                    if (!('data' in props.fallback)) {
                        fallback = props.fallback[elMediaKey] || '';
                    }
                } else {
                    fallback = props.fallback;
                }
            } else {
                fallback = props.fallback || '';
            }

            const fallbackSrcset = generateUrl(fallback);

            if (element.srcset !== fallbackSrcset) {
                element.srcset = fallbackSrcset;
            }
        }
    });
}

async function onLoad() {
    await nextTick();
    isLoaded.value = Boolean(imageRef.value?.currentSrc || imageRef.value?.src);
    emit('loaded');
}

const { sizeClassList } = useUiSize(props);
const { styleClassList } = useUiStyle(props);
const { getClassName } = useUiClassName(props);

const classList = computed(() => [
    ...sizeClassList.value,
    ...styleClassList.value,

    {
        '--is-loaded': isLoaded.value,
    },
]);

onMounted(() => {
    if (imageRef.value?.getAttribute('data-load')) {
        onLoad();
    }

    if (imageRef.value?.getAttribute('data-error')) {
        onError();
    }
});
</script>

<style lang="scss">
.UiImage {
    $image: &;

    &__wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: translate3d(0, 0, 0);

        .swiper-lazy-preloader {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin-top: 0;
            margin-left: 0;
            border: none;
            border-radius: 0;
        }
    }

    &__origin {
        position: absolute;
        inset: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        user-select: none;
        opacity: 0;
        transition: opacity var(--ui-transition-duration) var(--ui-transition-timing-function);
    }

    &__preview {
        position: absolute;
        inset: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        content: '';
        transform: translate3d(0, 0, 0);
    }

    &.--is-loaded {
        #{$image} {
            &__origin {
                opacity: 1;
            }
        }
    }
}
</style>
