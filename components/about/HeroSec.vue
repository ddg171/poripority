<template>
  <section id="hero" class=" w-full hero max-h-1080p min-h-480p bg-darkblue snap-start" @click="show">
    <div v-show="isShown" class="relative w-full h-full">
      <div class="absolute flex items-center justify-center w-full h-full overflow-hidden ">
        <div class="w-full h-full grid grid-rows-4 grid-cols-4">
          <div v-for="p,i in photos" :key="i" class="photo-box h-full w-full border-white">
            <div v-show="p.isShow" class=" h-full w-full  border  text-white">
              <NuxtImg :src="p.src" class="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <transition name="hero">
        <div v-show="headingTransitionTrrigger" class=" absolute flex justify-center w-full h-full backdrop-blur-sm">
          <CommonContentWidthBox class="flex items-end justify-start">
            <div class="flex flex-col px-4 md:px-16 py-6 bg-green/75 w-full md:w-auto mb-1/5h  md:mb-1/7h">
              <AppHeading1 class="pl-2  font-semibold text-white border-l-4 border-white border-solid text-6xl">
                <span>
                  Portfolio
                </span>
              </AppHeading1>
              <p class="text-white text-2xl md:text-4xl">
                Now is better than never!
              </p>
            </div>
          </commoncontentwidthbox>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Photo {
  isShow:boolean
  src:string
}
const photos = ref<Photo[]>(
  [
    { isShow: false, src: '/images/webp/about/photo001.webp' },
    { isShow: false, src: '/images/webp/about/photo002.webp' },
    { isShow: false, src: '/images/webp/about/photo003.webp' },
    { isShow: false, src: '/images/webp/about/photo004.webp' },
    { isShow: false, src: '/images/webp/about/photo005.webp' },
    { isShow: false, src: '/images/webp/about/photo006.webp' },
    { isShow: false, src: '/images/webp/about/photo007.webp' },
    { isShow: false, src: '/images/webp/about/photo008.webp' },
    { isShow: false, src: '/images/webp/about/photo009.webp' },
    { isShow: false, src: '/images/webp/about/photo010.webp' },
    { isShow: false, src: '/images/webp/about/photo011.webp' },
    { isShow: false, src: '/images/webp/about/photo012.webp' },
    { isShow: false, src: '/images/webp/about/photo013.webp' },
    { isShow: false, src: '/images/webp/about/photo014.webp' },
    { isShow: false, src: '/images/webp/about/photo015.webp' },
    { isShow: false, src: '/images/webp/about/photo016.webp' }

  ]
)

const shuffleIndex = ():number[] => {
  const index = photos.value.map((_, i) => i)
  return shuffleArray<number>(index)
}

const isShown = ref<boolean>(false)
const headingTransitionTrrigger = ref<boolean>(false)
const show = () => {
  isShown.value = true
}

watch(isShown, (isShown) => {
  const delay = 500
  const interval = 100
  if (isShown) {
    const index = shuffleIndex()
    index.forEach((i, j) => {
      setTimeout(() => {
        photos.value[i].isShow = true
      }, j * interval + delay)
    })
    setTimeout(() => {
      headingTransitionTrrigger.value = true
    }, interval * index.length + delay + 100)
  }
}
)

defineExpose({
  show
})

</script>

<style scoped>

.hero{
  height: calc(100vh - 64px - 3rem);
}

.hero-enter-active{
  opacity: 1;
  transition: opacity 0.25s linear;
  transition-delay: 0.25s;
}

.hero-enter-from,
.hero-leave-to {
  opacity: 0;
}

</style>
