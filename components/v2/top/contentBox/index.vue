<template>
    <V2TopContentBoxFrame
        :class="`flex ${props.isReverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'} `">
        <div v-if="props.imgSrc" class="relative  w-full h-auto lg:w-100 lg:h-100 shrink-0">
            <NuxtPicture :src="props.imgSrc" :alt="props.description" :width="size" :height="size" legacy-format="jpeg"
                :img-attrs="{ alt: props.description, height: size, width: size, decoding: 'async', class: 'object-fit' }" />
            <p v-if="props.description"
                class="absolute bottom-0 left-0 block w-full text-sm text-center bg-darkblue/75 py-1">
                {{ props.description }}
            </p>
        </div>
        <div class="flex flex-col items-start gap-4 p-8 grow">
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
