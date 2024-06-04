import type { MaskOptions } from 'maska';
import type { IUiBaseComponentProps } from '#dev-kit-layer/types';
import type { IUiSizeProps } from '#dev-kit-layer/types/composables/size';
import type { IUiColorProps } from '#dev-kit-layer/types/composables/color';
import type { IUiStateProps } from '#dev-kit-layer/types/composables/state';
import type { IUiStyleProps } from '#dev-kit-layer/types/composables/style';

export type TUiInputValue = string | number | null;

export interface IUiInputProps extends IUiBaseComponentProps, IUiSizeProps, IUiColorProps, IUiStateProps, IUiStyleProps {
    /**
     * Input id
     */
    id: string;
    /**
     * Input type
     */
    type: 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
    /**
     * vMaska options
     */
    mask?: string | MaskOptions;
    /**
     * Input placeholder
     */
    placeholder?: string;
}
