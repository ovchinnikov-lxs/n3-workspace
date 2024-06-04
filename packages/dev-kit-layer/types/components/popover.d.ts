import type { IUiBaseComponentProps, TUiPosition } from '#dev-kit-layer/types';
import type { IUiSizeProps } from '#dev-kit-layer/types/composables/size';
import type { IUiColorProps } from '#dev-kit-layer/types/composables/color';
import type { IUiStateProps } from '#dev-kit-layer/types/composables/state';
import type { IUiStyleProps } from '#dev-kit-layer/types/composables/style';

export interface IUiPopoverProps extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {
    /**
     * Dropdown position
     */
    position?: TUiPosition;
    /**
     * Dropdown inherits top width
     */
    parentWidth?: boolean;
    /**
     * Prevent open control
     */
    preventControl?: boolean;
    /**
     * Auto closing after clicks outside or clicks inside
     */
    autoClose?: boolean;
    /**
     * Transition name for bottom
     */
    transitionName?: string;
}
