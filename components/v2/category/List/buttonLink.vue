<template>
    <NuxtLink :to="props.to"
        :class="`px-4 py-2 flex items-center justify-center text-sm text-white md:text-base font-semibold  border ${props.isSelected ? 'border-orange bg-lightgreen' : 'bg-darkblue border-lightgreen/50 hover:border-lightgreen fover:border-lightgreen hover:bg-gray focus:bg-gray'}`">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    to?: string
    isSelected: boolean
}

const props = withDefaults(defineProps<Props>(), { to: '', isSelected: false })
</script>