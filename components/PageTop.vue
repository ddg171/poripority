<template>
  <TopConteinerBlock class="h-1/5h md:h-1/3h">
    <div :data-show="isShow" class="title-content-box relative  h-full page-title transition-all  duration-500 opacity-0">
      <TopImgBlock :img="state.topImg" />
      <div v-if="state.title" class="absolute w-full h-full flex justify-center items-center title-box backdrop-blur-sm">
        <CommonContentWidthBox class="flex items-center justify-start">
          <div class="flex flex-col px-4 md:px-12 py-2  md:py-6 bg-green/75 w-full md:w-auto my-2">
            <AppHeading1>
              <span>{{ state.title }}</span>
            </AppHeading1>
            <p v-for="t , i in state.subtitles" :key="i" class="text-white text-md md:text-xl">
              {{ t }}
            </p>
          </div>
        </CommonContentWidthBox>
      </div>
    </div>
  </TopConteinerBlock>
</template>

<script setup lang="ts">
const pageTitleStore = usePageTitleStore()
const { state } = pageTitleStore

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
