import type { IUiRoutableProps } from '#dev-kit-layer/types/composables/routable';
import type { TUiClassList } from '#dev-kit-layer/types';
import { LazyNuxtLinkLocale } from '#components';

export function useUiRoutable(props: IUiRoutableProps) {
    const attrs = useAttrs();

    const componentTag = computed(() => {
        if (props.tag && typeof props.tag !== 'string') {
            return props.tag;
        }

        if (attrs.to) {
            return LazyNuxtLinkLocale;
        } else if (attrs.href) {
            return 'a';
        } else if (props.tag) {
            return props.tag;
        } else {
            return 'button';
        }
    });

    const routableClassList = computed((): TUiClassList => {
        return [
            {
                '--is-interactive': !['span'].includes(String(componentTag.value)),
            },
        ];
    });

    return {
        componentTag,
        routableClassList,
    };
}
