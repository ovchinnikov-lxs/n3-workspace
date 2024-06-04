import type { IUiClassNameProps } from '#dev-kit-layer/types/composables/className';

export interface IUiOptionItem {
    id: string | number | null | boolean;
    name: string;
    disabled?: boolean;
}

export type TUiClassList = Array<string | object>;
export type TUiSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'custom' | string;
export type TUiOptions = Array<IUiOptionItem>;

export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
export type Nullable<T> = T | null;

export interface IUiLazyObserver {
    object: IntersectionObserver;
    actions: {
        [key: string | number]: (e: Element) => void;
    };
}

export type TUiPosition = 'top' | 'right' | 'bottom' | 'left' | 'center';

export interface IUiBaseComponentProps extends IUiClassNameProps {}

declare global {
    interface Window {}
}
