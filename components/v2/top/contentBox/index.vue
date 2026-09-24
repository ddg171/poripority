<template>
    <V2TopContentBoxFrame
        :class="`flex ${props.isReverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'} `">
        <div v-if="props.imgSrc" class="relative   w-full aspect-square md:w-100 md:h-100 shrink-0">
            <NuxtPicture :src="props.imgSrc" :alt="props.description" :width="size" :height="size" legacy-format="jpeg"
                class="w-full h-full"
                :img-attrs="{ alt: props.description, height: size, width: size, decoding: 'async', class: 'w-full h-auto' }" />
            <p v-if="props.description"
                class="absolute bottom-0 left-0 block w-full text-sm text-center bg-darkblue/75 py-1">
                {{ props.description }}
            </p>
        </div>
        <div class="flex flex-col items-start gap-1 lg:gap-2 py-2 px-2 lg:px-8 lg:py-4 grow">
            <slot />
        </div>
    </V2TopContentBoxFrame>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    imgSrc?: string
    description?: string
    isReverse?: boolean
}>(), {
    imgSrc: undefined,
    description: undefined,
    isReverse: false,

})

const size = ref<number>(540)

</script>
