import type { IUiBaseComponentProps } from '#dev-kit-layer/types';
import type { IUiStateProps } from '#dev-kit-layer/types/composables/state';
import type { IUiColorProps } from '#dev-kit-layer/types/composables/color';
import type { IUiSizeProps } from '#dev-kit-layer/types/composables/size';

export interface IUiFromCellProps extends IUiBaseComponentProps, IUiStateProps, IUiColorProps, IUiSizeProps {
    /**
     *  Name for label clicks
     */
    forId: string;
}
