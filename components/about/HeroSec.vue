<template>
  <section id="hero" class="relative w-full hero max-h-1080p min-h-480p bg-darkblue snap-start">
    <Transition name="hero">
      <div v-show="isShown" class="w-full h-full">
        <div class="absolute flex items-center justify-center w-full h-full overflow-hidden bg-green/25">
          <div class="w-full h-full grid grid-rows-4 grid-cols-4">
            <div v-for="p,i in photos" :key="i" class="photo-box h-full w-full border-white">
              <div v-show="p.isShow" class=" h-full w-full bg-green border  text-white">
                {{ i }}/{{ p.isShow }}
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="absolute flex justify-center w-full h-full">
          <CommonContentWidthBox class="flex items-center">
            <AppHeading1>
              About
            </AppHeading1>
          </CommonContentWidthBox>
        </div> -->
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
interface Photo {
  isShow:boolean
}
const photos = ref<Photo[]>(
  [
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false },
    { isShow: false }
  ]
)

const shuffleIndex = ():number[] => {
  const index = photos.value.map((_, i) => i)
  return shuffleArray<number>(index)
}

const isShown = ref<boolean>(false)
const show = () => {
  isShown.value = true
}

watch(isShown, (isShown) => {
  if (isShown) {
    const index = shuffleIndex()
    index.forEach((i, j) => {
      setTimeout(() => {
        photos.value[i].isShow = true
      }, j * 100 + 500)
    })
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
  transition-delay: 0.5s;
}

.hero-enter-from,
.hero-leave-to {
  opacity: 0;
}

#scroll{
  animation-duration: 1.5s;
  animation-name: shaking;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes shaking {
  from {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.25rem);

  }
  to {
    transform: translateY(0);

  }
}

</style>
