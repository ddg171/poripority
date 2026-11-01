<template>
  <TopConteinerBlock class="h-48 md:h-64 mb-2 w-full bg-darkblue">
    <div :data-show="isShow" class="relative h-full transition-all duration-500 opacity-0 title-content-box page-title">
      <TopImgBlock :img="props.topImg" />
      <div v-if="props.title"
        class="absolute flex items-center justify-center w-full h-full title-box transition-all duration-500">
        <CommonContentWidthBox class="flex items-end justify-start">
          <V2CommonEyeCatchTextBox :content="{ title: props.title, para: props.subtitles }"
            class="md:w-auto mb-8 lg:mb-8" />
        </CommonContentWidthBox>
      </div>
    </div>
  </TopConteinerBlock>
</template>

<script setup lang="ts">
import type { PictureBoxProp } from '~~/types/components';

interface Props {
  topImg?: PictureBoxProp | null
  title: string
  subtitles?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  topImg: null,
  subtitles: () => []
})

const isShow = ref<boolean>(false)

onMounted(() => {
  setTimeout(() => { isShow.value = true }, 50)
})

</script>

<style scoped>
.title-content-box[data-show=true] {
  opacity: 1 !important;
}

.title-content-box[data-show=false] {
  transition: none !important;
}
</style>
