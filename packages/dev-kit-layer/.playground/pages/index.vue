<template>
    <div class="IndexPage">
        <h1>
            {{ $t('title') }}
        </h1>

        <div id="demo-button">
            <BaseButton outline>
                {{ $t('hello.world') }}
            </BaseButton>
        </div>

        <div id="demo-checkbox">
            <BaseCheckbox v-model="booleanValue">{{ $t('hello.world') }}</BaseCheckbox>
        </div>

        <div id="demo-collapse">
            <BaseCollapse v-model="booleanValue">
                {{ $t('hello.world') }}
            </BaseCollapse>
        </div>

        <div id="demo-form-cell">
            <BaseFormCell for-id="base-checkbox">
                <template #label>{{ $t('hello.world') }}</template>

                <template #default>
                    <BaseCheckbox
                        id="base-checkbox"
                        v-model="booleanValue"
                    >
                        {{ $t('hello.world') }}
                    </BaseCheckbox>
                </template>

                <template #info>{{ $t('hello.world') }}</template>
            </BaseFormCell>
        </div>

        <div id="demo-icon">
            <BaseIcon icon="eye" />

            <BaseIcon icon="https://placehold.co/300x300/svg" />
        </div>

        <div
            id="demo-image"
            class="imageWrapper"
        >
            <BaseImage
                v-for="index in 20"
                :key="index"
                lazy
                :src="{
                    src: `shttps://placehold.co/2000x300${index}/jpg`,
                    options: {
                        width: 400,
                        height: 300,
                    },
                }"
                :fallback="{
                    src: `https://placehold.co/300x30${index}/jpg`,
                    options: {
                        width: 400,
                        height: 300,
                    },
                }"
                class="image"
            />
        </div>

        <div id="demo-input">
            {{ inputValue }}
            <BaseInput
                id="demo-input-field"
                v-model="inputValue"
                :mask="{
                    mask: ['### ##', '## ##'],
                }"
                type="text"
                @change="() => console.log('inputValue', inputValue)"
                @maska="(e) => console.log('mask', e)"
            />
        </div>

        <div id="demo-popover">
            <BasePopover
                parent-width
                :model-value="true"
            >
                <template #top> {{ $t('hello.world') }} </template>

                <template #bottom> {{ $t('hello.world') }} </template>
            </BasePopover>
        </div>

        <div id="demo-loader">
            <br />

            <br />

            <br />

            <BaseLoader />
        </div>

        <div id="demo-radio">
            {{ radioValue }}
            <BaseRadio
                v-model="radioValue"
                :options="radioOptions"
            />
        </div>

        <div id="demo-richtext">
            <BaseRichText v-model="richTextValue" />
            {{ richTextValue }}

            <div v-html="richTextValue"></div>
        </div>

        <div id="demo-select">
            {{ typeof selectValue }}
            {{ `selectValue: ${String(selectValue)}` }}
            <BaseSelect
                v-model="selectValue"
                multiple
                :options="radioOptions"
            />
        </div>

        <div id="demo-swiper">
            <BaseSwiper
                :slides="slides"
                :options="{
                    slidesPerView: 'auto',
                }"
            >
                <template #slide="{ slide }">
                    <div>
                        <BaseImage
                            lazy="swiper"
                            :src="{
                                src: `${slide.src}lol`,
                                options: {
                                    width: 400,
                                    height: 300,
                                },
                            }"
                            :fallback="{
                                src: slide.src,
                                options: {
                                    width: 30,
                                    height: 30,
                                },
                            }"
                            class="image"
                        />

                        <h1>
                            {{ slide.text }}
                        </h1>
                    </div>
                </template>
            </BaseSwiper>
        </div>

        <div id="demo-toggle">
            <BaseToggle>
                <template #false-label>{{ $t('hello.world') }}</template>

                <template #true-label>{{ $t('hello.world') }}</template>
            </BaseToggle>
        </div>

        <div id="demo-tooltip">
            <BaseTooltip>
                <template #top>
                    {{ $t('hello.world') }}
                </template>

                <template #bottom>
                    {{ $t('hello.world') }}
                </template>
            </BaseTooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
const booleanValue = ref(true);
const inputValue = ref<string | null>(null);

const radioValue = ref<string | null>(null);
const radioOptions = [
    {
        id: 'yes',
        name: 'Yes so long text Yes',
    },
    {
        id: 'no',
        name: 'No so long text No',
    },
    {
        id: null,
        name: 'Null so long text Null',
    },
    {
        id: false,
        name: 'False so long text False',
    },
];

const richTextValue = ref<string | null>(null);

const selectValue = ref('');

const slides = Array.from({ length: 30 }, (_, i) => ({
    src: `https://placehold.co/300x30${i}`,
    text: `lol text slide ${i}`,
}));
</script>

<style lang="scss">
.IndexPage {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    padding: 32px 32px 1000px;

    .imageWrapper {
        display: flex;
        width: 100%;
        overflow: scroll;
    }

    .image {
        flex-shrink: 0;
        width: 400px;
        aspect-ratio: 2 / 4;
    }

    .BaseIcon {
        color: red;
    }
}
</style>
