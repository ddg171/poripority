<template>
  <div class="flex items-start flex-row bg-white">
    <div class="overflow-hidden h-28 w-28 md:h-36 md:w-36 shrink-0 bg-darkblue">
      <NuxtPicture
        v-if="props.ads.img?.url"
        class="article-thumb w-full opacity-100 transition-opacity duration-500"
        provider="imgix"
        :src="props.ads.img.url || ``"
        format="webp"
        legacy-format="jpeg"
        fit="clamp"
        height="150"
        width="150"
        :img-attrs="{
          class: 'w-full bg-lightgreen/25',
          alt: `${props.ads.name}のサムネイル画像`,
          height: 150,
          width: 150,
          decoding: 'async',
          loading: 'lazy',
        }"
        :modifiers="{ h: 150, w: 150, q: 10 }"
      />
      <div
        v-else
        class="w-full h-full flex justify-center items-center text-sm text-white underline"
      >
        {{ msg }}
      </div>
    </div>
    <div class="flex flex-col justify-between py-1 m-0 md:h-36 md:px-2 grow">
      <div class="w-full">
        <div class="mb-0 text-xs md:text-sm font-semibold">
          <h3>
            <CommonAppLink :to="ads.amazon" class="text-black">
              {{ props.ads.name }}
              <Icon name="mdi:open-in-new" />
            </CommonAppLink>
          </h3>
        </div>
      </div>
      <div class="w-full flex">
        <AdLinkBtn
          :href="props.ads.amazon"
          class="bg-amazonorange text-amazongray"
        >
          Amazon
        </AdLinkBtn>
        <AdLinkBtn
          v-if="props.ads.rakuten"
          :href="props.ads.rakuten"
          class="bg-red text-white"
        >
          楽天
        </AdLinkBtn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ads } from "~~/types/articles";
interface Props {
  ads: Ads;
}

const props = defineProps<Props>();

const msg = computed<string>(() => {
  return props.ads.img?.url ? "loading..." : "no image";
});
</script>

<style scoped lang="scss"></style>
