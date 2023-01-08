<template>
  <div class="w-full mb-4 overflow-hidden top-slider-wrapper">
    <div class="relative w-full h-1/4h">
      <div :data-show="isShow" class="title-content-box relative w-full h-full page-title transition-all opacity-1">
        <div
          v-if="state.topImg"
          class="absolute flex items-center justify-center w-full h-full overflow-hidden firstview "
        >
          <ClientPictureBox
            :souce="state.topImg.souce"
            :alt="state.topImg.alt"
            :title="state.topImg.title"
            :webp="state.topImg.webp"
            :jpg="state.topImg.jpg"
          />
        </div>
        <div v-if="state.title" class="absolute w-full h-full title-box backdrop-blur-sm">
          <div class="flex items-center justify-center w-full h-full ">
            <div class="flex flex-col p-4 bg-green/75">
              <h1 class="flex items-center pb-1 pl-2 mb-0 text-xl text-white border-l-8 border-solid md:text-5xl sm:mb-2 border-l-lightgray">
                <span>{{ state.title }}</span>
              </h1>
              <p v-for="t , i in state.subtitles" :key="i" class="text-white text-md md:text-xl">
                {{ t }}
              </p>
            </div>
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

watch(() => state.value.title, () => {
  isShow.value = false
  setTimeout(() => { isShow.value = true }, 100)
})

</script>

<style scoped>
.title-content-box[data-show=false]{
  opacity: 0 !important;
}
</style>
