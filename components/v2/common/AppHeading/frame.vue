<template>
    <div class="flex items-center gap-2">
        <span :class="`block h-6 w-6 ${props.isImportant ? 'bg-orange' : 'bg-lightgreen'}`" />
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
