import { describe, expect, it } from 'vitest';

describe('test IMAGE_MEDIA_QUERIES_KEYS', () => {
    it('should have the correct keys', () => {
        expect(IMAGE_MEDIA_QUERIES_KEYS).toEqual({
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
        });
    });
});

describe('test IMAGE_MEDIA_QUERIES', () => {
    it('should have the correct media queries for each key', () => {
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.RETINA]).toBe('(min-resolution: 1.5dppx), (min-resolution: 144dpi)');
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.RETINA_TABLET]).toBe(
            '(min-width: 768px) and (min-height: 415px) and (min-resolution: 1.5dppx), (min-width: 768px) and (min-height: 415px) and (min-resolution: 144dpi)',
        );
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.RETINA_LAPTOP]).toBe(
            '(min-width: 992px) and (min-resolution: 1.5dppx), (min-width: 992px) and (min-resolution: 144dpi)',
        );
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.RETINA_DESKTOP]).toBe(
            '(min-width: 1440px) and (min-resolution: 1.5dppx), (min-width: 1440px) and (min-resolution: 144dpi)',
        );
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.DESKTOP_LG]).toBe('(min-width: 1920px)');
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.DESKTOP]).toBe('(min-width: 1440px)');
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.DESKTOP_SM]).toBe('(min-width: 1366px)');
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.LAPTOP]).toBe('(min-width: 992px)');
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.TABLET]).toBe('(min-width: 768px)');
        expect(IMAGE_MEDIA_QUERIES[IMAGE_MEDIA_QUERIES_KEYS.MOBILE]).toBe('(max-width: 767px)');
    });
});
