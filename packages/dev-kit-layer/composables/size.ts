import type { IUiSizeProps } from '#dev-kit-layer/types/composables/size';
import type { TUiClassList } from '#dev-kit-layer/types';

export function useUiSize(props: IUiSizeProps) {
    const sizeClassList = computed<TUiClassList>(() => [
        {
            [`--${props.size}-size`]: props.size,
        },
    ]);

    return {
        sizeClassList,
    };
}
