<template>
    <NuxtLink :to="props.linkParam?.path"
        class="flex items-center justify-center w-full h-full p-1 text-sm font-semibold text-white md:text-base bg-darkblue border border-lightgreen/50 hover:border-lightgreen fover:border-lightgreen hover:bg-gray focus:bg-gray">
        {{ props.linkParam?.name }}
    </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, } from 'vue';
import type { LinkParams } from '~~/types/components';

const props = withDefaults(
    defineProps<{
        linkParam?: LinkParams
    }>(),
    { linkParam: undefined }
);
</script>