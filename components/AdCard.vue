<template>
  <div class="flex items-start flex-row bg-white">
    <div class=" overflow-hidden h-28 w-28  md:h-40 md:w-40 shrink-0 bg-darkblue">
      <CommonAppLink :to="props.ads.amazon" class="w-full h-full flex items-center justify-start md:justify-center bg-green/50" :title="props.ads.name ">
        <NuxtPicture
          v-if="props.ads.img?.url"
          class="article-thumb w-full border-solid border-black opacity-100 transition-opacity duration-500"
          provider="imgix"
          :src="props.ads.img.url||``"
          format="webp"
          legacy-format="jpeg"
          fit="crop"
          height="200"
          width="200"
          :img-attrs="{ class:'w-full bg-lightgreen/25', alt:`${props.ads.name}のサムネイル画像`,height:200,width:200, decoding: 'async',loading: 'lazy'}"
          :modifiers="{q: 50}"
        />
        <div v-else class="w-full h-full flex justify-center items-center text-sm text-white underline">
          {{ msg }}
        </div>
      </CommonAppLink>
    </div>
    <div class="flex flex-col justify-between py-1 m-0 md:h-36 md:px-2 grow">
      <div class="w-full ">
        <div class="mb-0 text-sm font-semibold">
          <h3>
            <CommonAppLink :to="ads.amazon" class="text-black">
              {{ props.ads.name }}
            </CommonAppLink>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ads } from '~~/types/articles'
interface Props{
    ads:Ads
}

const props = defineProps<Props>()

const msg = computed<string>(() => {
  return props.ads.img?.url ? 'loading...' : 'no image'
})
</script>

<style scoped lang="scss">

</style>
