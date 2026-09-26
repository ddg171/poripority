<template>
    <section class="w-full p-4 xl:px-2  flex flex-col gap-4">
        <div class="pb-2  border-b border-lightgreen border-solid">
            <div class="flex items-center gap-2">
                <V2CommonAppHeadingH2 :is-important="props.isImportant">
                    {{ props.headerText }}
                </V2CommonAppHeadingH2>
                <slot name="header" />
            </div>
        </div>
        <div>
            <slot name="content" />
        </div>
    </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    isImportant?: boolean
    headerText: string
}>(), {
    isImportant: false
})
</script>