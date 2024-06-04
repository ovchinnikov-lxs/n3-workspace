import type { IUiBaseComponentProps, IUiOptionItem } from '#dev-kit-layer/types';
import type { IUiSizeProps } from '#dev-kit-layer/types/composables/size';
import type { IUiColorProps } from '#dev-kit-layer/types/composables/color';
import type { IUiStateProps } from '#dev-kit-layer/types/composables/state';
import type { IUiStyleProps } from '#dev-kit-layer/types/composables/style';

export interface IUiRadioProps extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {
    /**
     * Radio Options
     */
    options?: IUiOptionItem[];
    /**
     * @param {'x' | 'y'} axis - Axis direction
     */
    axis?: 'x' | 'y';
}

export interface IUIRadioItemProps extends Omit<IUiRadioProps, 'options' | 'axis'>, IUiOptionItem {}
