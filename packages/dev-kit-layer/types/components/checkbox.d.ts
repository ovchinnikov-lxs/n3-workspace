import type { IUiBaseComponentProps } from '#dev-kit-layer/types';
import type { IUiSizeProps } from '#dev-kit-layer/types/composables/size';
import type { IUiColorProps } from '#dev-kit-layer/types/composables/color';
import type { IUiStateProps } from '#dev-kit-layer/types/composables/state';
import type { IUiStyleProps } from '#dev-kit-layer/types/composables/style';

export interface IUiCheckboxProps extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {}
