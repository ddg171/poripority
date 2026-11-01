<template>
    <div class="flex items-start md:items-center gap-2 ">
        <span :class="`block aspect-1/1 h-6 w-6 mt-1 md:mb-0 ${props.isImportant ? 'bg-orange' : 'bg-lightgreen'}`" />
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    isImportant?: boolean
}>(), {
    isImportant: false
})
</script>
