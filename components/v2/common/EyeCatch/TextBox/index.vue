<template>
    <V2CommonEyeCatchTextBoxFrame class="ml-0 md:ml-4 mb-12 md:mb-16">
        <V2CommonAppHeadingH1 :isImportant="props.isImportant">
            <CommonAppLink v-if="!!props.content.to" :to="props.content.to" class="hover:underline" tabindex="-1">
                {{ props.content.title }}
            </CommonAppLink>
            <span v-else>{{ props.content.title }}</span>
        </V2CommonAppHeadingH1>
        <p v-for="p, t in props.content.para" :key="t" class="text-sm md:text-md font-medium text-white">
            {{ p }}
        </p>
    </V2CommonEyeCatchTextBoxFrame>
</template>

<script setup lang="ts">
import type { SliderContent } from '~/types/components';

const props = withDefaults(defineProps<{
    content: SliderContent["text"]
    isImportant?: boolean
}>(), { isImportant: false })
</script>
