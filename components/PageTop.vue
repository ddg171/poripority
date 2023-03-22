<template>
  <TopConteinerBlock class="h-1/4h lg:h-1/2h max-h-960p min-h-480p">
    <div :data-show="isShow" class="title-content-box relative  h-full page-title transition-all  duration-500 opacity-0">
      <TopImgBlock :img="props.topImg" />
      <div v-if="props.title" class="absolute w-full h-full flex justify-center items-center title-box backdrop-blur-sm">
        <CommonContentWidthBox class="flex items-end justify-start">
          <div class="flex flex-col px-4 md:px-16 py-2  md:py-6 mb-1/5h  md:mb-1/7h bg-green/75 w-full md:w-auto my-2">
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
