import type { IUiStyleProps } from '#dev-kit-layer/types/composables/style';
import type { TUiClassList } from '#dev-kit-layer/types';

export function useUiStyle(props: IUiStyleProps) {
    const styleClassList = computed<TUiClassList>(() => [
        {
            '--is-outline': props.outline,
            '--is-rounded': props.rounded,
            '--is-icon': props.icon,
        },
    ]);

    return {
        styleClassList,
    };
}
