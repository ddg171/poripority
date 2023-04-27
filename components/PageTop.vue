<template>
  <TopConteinerBlock class="h-1/4h lg:h-1/2h max-h-960p min-h-480p">
    <div :data-show="isShow" class="relative h-full transition-all duration-500 opacity-0 title-content-box page-title">
      <TopImgBlock :img="props.topImg" />
      <div v-if="props.title" class="absolute flex items-center justify-center w-full h-full title-box backdrop-blur-sm">
        <CommonContentWidthBox class="flex items-end justify-start">
          <div class="flex flex-col w-full py-2 pl-4 my-2 md:px-16 md:py-6 mb-1/6h md:mb-1/6h bg-green/75 md:w-auto">
            <AppHeading1>
              <span>{{ props.title }}</span>
            </AppHeading1>
            <p v-for="t , i in props.subtitles" :key="i" class="text-white text-md md:text-xl">
              {{ t }}
            </p>
          </div>
        </CommonContentWidthBox>
      </div>
    </div>
  </TopConteinerBlock>
</template>

<script setup lang="ts">
import { PictureBoxProp } from '~~/types/components'

interface Props {
  topImg: PictureBoxProp | null
  title: string
  subtitles: string[]
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
.title-content-box[data-show=true]{
  opacity: 1 !important;
}

.title-content-box[data-show=false]{
  transition: none !important;
}
</style>
