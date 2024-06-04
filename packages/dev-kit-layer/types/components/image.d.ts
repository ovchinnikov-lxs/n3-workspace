import type { IPXModifiers } from '@nuxt/image';
import type { IUiBaseComponentProps, Nullable, PartialRecord } from '#dev-kit-layer/types';
import type { IUiSizeProps } from '#dev-kit-layer/types/composables/size';
import type { IUiStyleProps } from '#dev-kit-layer/types/composables/style';

/**
 * Type of url address null or string
 */
export type TUiImageSourceUrl = Nullable<string> | { data: null };
/**
 * Type of object source
 */
export interface IUiImageSource {
    src: TUiImageSourceUrl;
    options?: Partial<IPXModifiers>;
}
/**
 * Object IMAGE_MEDIA_QUERIES keys
 */
export type TUiImageMediaKey = (typeof IMAGE_MEDIA_QUERIES_KEYS)[keyof typeof IMAGE_MEDIA_QUERIES_KEYS];
/**
 * Media value
 */
export type TUiImageMediaValue = TUiImageSourceUrl | IUiImageSource;
/**
 * Object with media keys for sources
 */
export type IUiImageObjectSrc = PartialRecord<TUiImageMediaKey, TUiImageMediaValue>;
/**
 * Component source type
 */
export type TUiImageSrc = TUiImageMediaValue | IUiImageObjectSrc;
/**
 * source tag attributes
 */
export interface IUiImageSourceItem {
    dataMediaKey: TUiImageMediaKey;
    media: string;
    srcset: Exclude<TUiImageSourceUrl, { data: null }>;
}

export interface IUiImageProps extends IUiBaseComponentProps, IUiSizeProps, IUiStyleProps {
    /**
     * Image Source
     */
    src: TUiImageSrc;
    /**
     * Show preview loader
     */
    preview?: boolean;
    /**
     *  Alternate text for an image
     */
    alt?: string;
    /**
     * Image Lazy loading
     */
    lazy?: boolean | 'swiper';
    /**
     * Fallback image
     */
    fallback?: TUiImageSrc;
    /**
     * Default modifiers for images
     */
    defaultModifiers?: Partial<IPXModifiers>;
    /**
     * Ratio for width and height params for auto upscale
     */
    ratio?: number;
    /**
     * Prevent nuxt/image optimization
     */
    origin?: boolean;
}
