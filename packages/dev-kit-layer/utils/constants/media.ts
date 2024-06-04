export const IMAGE_MEDIA_QUERIES_KEYS = {
    RETINA: 'retina',
    RETINA_TABLET: 'retinaTablet',
    RETINA_LAPTOP: 'retinaLaptop',
    RETINA_DESKTOP: 'retinaDesktop',
    DESKTOP_LG: 'desktopLg',
    DESKTOP: 'desktop',
    DESKTOP_SM: 'desktopSm',
    LAPTOP: 'laptop',
    TABLET: 'tablet',
    MOBILE: 'mobile',
} as const;

/**
 * The order of the keys is important
 */
export const IMAGE_MEDIA_QUERIES = {
    [IMAGE_MEDIA_QUERIES_KEYS.RETINA]: '(min-resolution: 1.5dppx), (min-resolution: 144dpi)',
    [IMAGE_MEDIA_QUERIES_KEYS.RETINA_TABLET]:
        '(min-width: 768px) and (min-height: 415px) and (min-resolution: 1.5dppx), (min-width: 768px) and (min-height: 415px) and (min-resolution: 144dpi)',
    [IMAGE_MEDIA_QUERIES_KEYS.RETINA_LAPTOP]: '(min-width: 992px) and (min-resolution: 1.5dppx), (min-width: 992px) and (min-resolution: 144dpi)',
    [IMAGE_MEDIA_QUERIES_KEYS.RETINA_DESKTOP]: '(min-width: 1440px) and (min-resolution: 1.5dppx), (min-width: 1440px) and (min-resolution: 144dpi)',
    [IMAGE_MEDIA_QUERIES_KEYS.DESKTOP_LG]: '(min-width: 1920px)',
    [IMAGE_MEDIA_QUERIES_KEYS.DESKTOP]: '(min-width: 1440px)',
    [IMAGE_MEDIA_QUERIES_KEYS.DESKTOP_SM]: '(min-width: 1366px)',
    [IMAGE_MEDIA_QUERIES_KEYS.LAPTOP]: '(min-width: 992px)',
    [IMAGE_MEDIA_QUERIES_KEYS.TABLET]: '(min-width: 768px)',
    [IMAGE_MEDIA_QUERIES_KEYS.MOBILE]: '(max-width: 767px)',
} as const;
