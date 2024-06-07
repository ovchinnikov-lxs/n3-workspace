import type { Tables } from '~/types/supabase';
import type { Nullable } from '#dev-kit-layer/types';

export interface IProduct {
    id: string;
    name: string;
    count: number;
}

export interface IListItem extends Omit<Tables<'Lists'>, 'list'> {
    list: Nullable<IProduct[]>;
}
