<template>
    <section class="w-full p-4 xl:px-2  flex flex-col gap-4">
        <div class="pb-2  border-b border-lightgreen border-solid">
            <div class="flex items-center gap-2">
                <span :class="`block h-5 w-5 ${props.isImportant ? 'bg-orange' : 'bg-lightgreen'}`" />
                <h2 class="block text-2xl font-semibold text-white ">
                    {{ props.headerText }}
                </h2>
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