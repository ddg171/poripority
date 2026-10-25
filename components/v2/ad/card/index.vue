<template>
    <div class="flex h-36 bg-white p-2">
        <div class="h-32 w-32 shrink-0 overflow-hidden bg-lightgreen/50 ">
            <NuxtPicture v-if="props.ad.img?.url" class="opacity-100 transition-opacity duration-500" provider="imgix"
                :src="props.ad.img.url || ``" format="webp" legacy-format="jpeg" fit="clamp" height="128" width="128"
                :img-attrs="{ class: 'w-full bg-lightgreen/25', alt: `${props.ad.name}のサムネイル画像`, height: 128, width: 128, decoding: 'async', loading: 'lazy' }"
                :modifiers="{ h: 128, w: 128, q: 10 }" />
            <div v-else class="px-5 py-8 flex  items-center  font-semibold text-lightgreen/75 bg-gray">
                <Icon name="carbon:no-image" class=" mr-1 text-md text-lightgreen" />
                No Image.
            </div>
        </div>
        <div class="flex flex-col justify-between m-0 grow">
            <div class="w-full ">
                <div class="mb-0 text-xs md:text-sm font-semibold">
                    <h3>
                        <CommonAppLink :to="ad.amazon" class="text-black">
                            {{ props.ad.name }}
                            <Icon name="mdi:open-in-new" />
                        </CommonAppLink>
                    </h3>
                </div>
            </div>
            <div class="w-full flex">
                <AdLinkBtn :href="props.ad.amazon" class="bg-amazonorange text-amazongray">
                    Amazon
                </AdLinkBtn>
                <AdLinkBtn v-if="props.ad.rakuten" :href="props.ad.rakuten" class="bg-red text-white">
                    楽天
                </AdLinkBtn>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { defineProps, } from 'vue';
import type { Ads } from '~~/types/articles';

interface Props {
    ad: Ads
}

const props = defineProps<Props>()

const msg = computed<string>(() => {
    return props.ad.img?.url ? 'loading...' : 'no image'
})
</script>

<style scoped lang="scss"></style>
