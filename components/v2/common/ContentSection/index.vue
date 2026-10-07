<template>
    <V2CommonContentSectionFrame>
        <V2CommonContentSectionHeaderFrame>
            <div v-if="props.headerText" class="flex items-center gap-2">
                <V2CommonAppHeadingH2 :is-important="props.isImportant">
                    {{ props.headerText }}
                </V2CommonAppHeadingH2>
                <slot name="header" />
            </div>
        </V2CommonContentSectionHeaderFrame>
        <div>
            <slot name="content" />
        </div>
    </V2CommonContentSectionFrame>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    isImportant?: boolean
    headerText?: string
}>(), {
    isImportant: false,
    headerText: undefined,
})
</script>