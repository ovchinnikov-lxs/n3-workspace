<template>
    <EditorContent
        v-bind="$attrs"
        :editor="editor"
        :class="[getClassName('RichText'), classList]"
    />
</template>

<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import type { IUiRichTextProps } from '#dev-kit-layer/types/components/richtext';
import type { TUiClassList } from '#dev-kit-layer/types';

const props = defineProps<IUiRichTextProps>();
const model = defineModel<string>();

const { getClassName } = useUiClassName(props);
const { sizeClassList } = useUiSize(props);
const { colorClassList } = useUiColor(props);
const { stateClassList } = useUiState(props);
const { styleClassList } = useUiStyle(props);

const classList = computed<TUiClassList>(() => [
    sizeClassList.value,
    colorClassList.value,
    stateClassList.value,
    styleClassList.value,
]);

const editor = useEditor({
    extensions: [
        StarterKit,
    ],
    content: model.value,
    onUpdate: () => {
        if (!editor.value) {
            return false;
        }

        model.value = editor.value.getHTML();
    },
});
</script>

<style lang="scss">
.UiRichText {
    display: block;
    transition: all var(--ui-transition-duration) var(--ui-transition-timing-function);

    .ProseMirror {
        appearance: none;
        outline: none;
    }

    &:focus {
        outline: none;
    }

    p {
        margin: 0;
    }

    @include ui-state('disabled');
    @include ui-state('loading');
}
</style>
