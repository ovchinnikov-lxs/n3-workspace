import type { TUiClassList } from '#dev-kit-layer/types';
import type { IUiClassNameProps } from '#dev-kit-layer/types/composables/className';

export function useUiClassName(props: IUiClassNameProps) {
    const DEFAULT_PREFIX = 'Ui';

    const getClassName = computed(
        () =>
            (className: string): TUiClassList => [
                {
                    [`${DEFAULT_PREFIX}${className}`]: DEFAULT_PREFIX,
                    [`${props.classPrefix}${className}`]: Boolean(props.classPrefix),
                },
            ],
    );

    return { getClassName };
}
