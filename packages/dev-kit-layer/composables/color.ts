import type { TUiClassList } from '#dev-kit-layer/types';
import type { IUiColorProps } from '#dev-kit-layer/types/composables/color';

export function useUiColor(props: IUiColorProps) {
    const colorClassList = computed<TUiClassList>(() => [
        {
            [`--${props.color}-color`]: props.color,
        },
    ]);

    return {
        colorClassList,
    };
}
