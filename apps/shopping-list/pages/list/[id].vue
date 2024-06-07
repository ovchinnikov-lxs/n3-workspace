<template>
    <div class="ListDetailPage">
        <div :class="[$style.wrapper, classList]">
            <LazyBaseLoader
                v-if="pending"
                :class="$style.loader"
            />

            <template v-else>
                <form
                    :class="$style.header"
                    @submit.prevent="onSubmit"
                >
                    <LazyBaseTextarea
                        id="product-input"
                        v-model="actualValue"
                        :placeholder="$t('pages.listDetail.input.placeholder')"
                        :class="$style.input"
                    />

                    <LazyBaseButton
                        :disabled="!actualValue"
                        :class="$style.button"
                    >
                        {{ $t('pages.listDetail.button.add') }}
                    </LazyBaseButton>
                </form>

                <div
                    v-if="actualList?.length"
                    :class="$style.list"
                >
                    <LazyBaseListItem
                        v-for="item in actualList"
                        :key="item.id"
                        :name="item.name"
                        :count="item.count"
                        @remove="onRemove(item.id)"
                        @change="(val) => onChange(item.id, { ...item, ...val })"
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';
import debounce from 'lodash/debounce';
import type { Database, Tables } from '~/types/supabase';
import type { IListItem, IProduct } from '~/types/list';

const client = useSupabaseClient<Database>();
const i18n = useI18n();

const { data, pending, error } = await useLazyAsyncData(async () => {
    try {
        const route = useRoute();

        const { data } = await client.from('Lists').select().eq('id', route.params.id);

        if (!data?.length) {
            return null;
        }

        const [listDetail] = data as [IListItem];

        return listDetail;
    } catch (e) {
        console.error('LIST_DETAIL_PAGE:USE_LAZY_ASYNC_DATA', e);
        return null;
    }
});

const actualList = ref<IProduct[]>([]);

watch(
    pending,
    (val) => {
        if (val) {
            return;
        }

        if (error.value || !data.value) {
            throw showError({
                statusCode: 404,
                message: i18n.t('pages.listDetail.notFound.message'),
                fatal: true,
            });
        } else {
            actualList.value = data.value.list || [];
        }
    },
    { immediate: true },
);

useSeoMeta({
    title: () => {
        if (!data.value) {
            return '';
        }

        const date = new Date(data.value.created_at).toLocaleDateString(i18n.locale.value, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });

        return `${i18n.t('pages.listDetail.title')} - ${date}`;
    },
});

const isLoading = ref(false);

watch(
    actualList,
    (list, oldValue) => {
        const updateList = debounce(async () => {
            if (!data.value?.id) {
                return false;
            }

            if (oldValue === undefined) {
                return false;
            }

            isLoading.value = true;
            await client
                .from('Lists')
                .update({
                    list: list as Tables<'Lists'>['list'],
                })
                .eq('id', data.value.id);
            isLoading.value = false;
        }, 300);

        updateList();
    },
    {
        deep: true,
    },
);

function useForm() {
    const actualValue = ref('');

    const onSubmit = async () => {
        if (!actualValue.value || !data.value) {
            return false;
        }

        actualValue.value.split('\n').forEach((item) => {
            const [name, count] = item.split(/,\s*/);

            actualList.value.push({
                id: nanoid(4),
                name,
                count: Number(count || 1),
            });
        });

        actualValue.value = '';

        setTimeout(() => {
            const input = document.querySelector<HTMLInputElement>('#product-input');
            input?.focus();
        }, 100);
    };

    async function onRemove(id: string) {
        actualList.value = actualList.value.filter((item) => item.id !== id);
    }

    async function onChange(id: string, value: IProduct) {
        actualList.value = actualList.value.map((item) => {
            if (item.id === id) {
                return value;
            }

            return item;
        });
    }

    return {
        actualValue,
        onSubmit,
        onRemove,
        onChange,
    };
}

const { onSubmit, actualValue, onChange, onRemove } = useForm();

const style = useCssModule();

const classList = computed(() => [
    {
        [style['--is-loading']]: isLoading.value,
    },
]);
</script>

<style module lang="scss">
.wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 8);
    width: 100%;
    height: 100%;

    @include respond-to(tablet) {
        flex-direction: column-reverse;
    }
}

.loader {
    margin: auto;
}

.header {
    display: flex;
    column-gap: calc(var(--ui-unit) * 3);
    align-items: flex-end;

    @include respond-to(tablet) {
        position: sticky;
        bottom: 0;
        left: 0;
        z-index: 2;
        padding: 16px 0 32px;
        background-color: var(--ui-white-color);
    }
}

.input {
    width: 100%;

    @include respond-to(tablet) {
        margin-top: auto;
    }
}

.button {
    flex-shrink: 0;
}

.list {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--ui-unit) * 3);
}
</style>
