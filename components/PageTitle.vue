<template>
  <div class="w-full h-1/4h mb-4 overflow-hidden top-slider-wrapper">
    <div :data-show="isShow" class="title-content-box relative  h-full page-title transition-all  duration-500 opacity-0">
      <div
        v-if="state.topImg"
        class="absolute flex items-center justify-center w-full h-full overflow-hidden firstview "
      >
        <PictureBox
          :source="state.topImg.source"
          :alt="state.topImg.alt"
          :title="state.topImg.title"
          :webp="state.topImg.webp"
          :jpg="state.topImg.jpg"
        />
      </div>
      <div v-if="state.title" class="absolute w-full h-full  title-box backdrop-blur-sm">
        <div class="flex items-center justify-center w-full h-full ">
          <div class="flex flex-col p-4 bg-green/75">
            <AppHeading1>
              <span>{{ state.title }}</span>
            </AppHeading1>
            <p v-for="t , i in state.subtitles" :key="i" class="text-white text-md md:text-xl">
              {{ t }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
