import type { IUiBaseComponentProps } from '#dev-kit-layer/types';
import type { IUiSizeProps } from '#dev-kit-layer/types/composables/size';

export interface IUiIconProps extends IUiBaseComponentProps, IUiSizeProps {
    /**
     * HTML tag for icon
     */
    tag?: string;
    /**
     *  Icon view box
     */
    viewBox?: string;
    /**
     * Icon name from assets/sprite/svg/** or external svg source
     */
    icon: string;
}
