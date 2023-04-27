<template>
  <TopConteinerBlock class="h-3/4h lg:h-2/3h max-h-1080p min-h-480p">
    <div class="relative flex items-center justify-center w-full h-full top-slider">
      <p v-if="sliderPage===-1" class="text-3xl text-white">
        loading...
      </p>
      <div
        v-for="c,i in props.sliderContents"
        :key="i"
        class="absolute w-full h-full top-slider-content-wrapper"
        :isShow="sliderPage===i"
        :next="i===next"
        :prev="i===prev"
      >
        <div class="relative w-full h-full top-slider-content">
          <TopImgBlock :img="c.pic" class="top-img-block" :from-c-s-m="c.pic.fromCMS" />
          <div class="absolute flex items-center justify-center w-full h-full ">
            <CommonContentWidthBox class="flex items-end justify-start">
              <div class="flex flex-col w-full px-4 py-2 md:px-16 md:py-6 bg-green/75 md:w-auto mb-1/5h md:mb-1/7h">
                <AppHeading2 :data-is-tight="!!c.text.isTight">
                  <CommonAppLink v-if="!!c.text.to" :to="c.text.to" class="hover:underline" tabindex="-1">
                    {{ c.text.title }}
                  </CommonAppLink>
                  <span v-else>{{ c.text.title }}</span>
                </AppHeading2>
                <p v-for="p , t in c.text.para" :key="t" class="text-lg md:text-2xl">
                  {{ p }}
                </p>
              </div>
            </CommonContentWidthBox>
          </div>
        </div>
      </div>
      <TopSliderBtnList
        v-model="sliderPage"
        :content-num="contentNum"
        :is-stopped="isStopped"
        @jump="jump"
        @toggle="toggle"
      />
    </div>
  </TopConteinerBlock>
</template>

<script setup lang="ts">
import { SliderContent } from '~~/types/components'

interface Props {
    sliderContents:SliderContent[]
    duration:number
}

const sliderPage = ref<number>(-1)
const timerId = ref<number>(0)

const props = withDefaults(defineProps<Props>(), { sliderContents: () => [], duration: 5000 })

const contentNum = computed<number>(() => {
  return props.sliderContents.length
})
const isStopped = computed<boolean>(() => {
  return !timerId.value
})

const nextPage = () => {
  if (sliderPage.value >= contentNum.value - 1) {
    sliderPage.value = 0
    return
  }
  sliderPage.value++
}

const jump = (num:number) => {
  if (num > contentNum.value) { return }
  sliderPage.value = num
  if (!timerId.value) { return }
  stop()
  start()
}

const initialTransition = async (delay = 300) => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      nextPage()
      resolve()
    }, delay)
  })
}

const stop = () => {
  clearInterval(timerId.value)
  timerId.value = 0
}

const start = () => {
  timerId.value = window.setInterval(nextPage, props.duration)
}

const toggle = (isStopped:boolean) => {
  if (!isStopped) { return stop() }
  start()
}

const prev = computed<number>(() => {
  if (sliderPage.value === 0) { return contentNum.value - 1 }
  return sliderPage.value - 1
})

const next = computed<number>(() => {
  if (sliderPage.value === contentNum.value - 1) { return 0 }
  return sliderPage.value + 1
})

onMounted(async () => {
  if (timerId.value) { return }
  await initialTransition()
  start()
})

</script>
<style scoped>
h2[data-is-tight=true]{
  letter-spacing: -0.125rem;
}
.top-slider-content-wrapper{
  display: none;
  transition: transform 0.5s ;
  z-index: -10;

}

.top-slider-content-wrapper[isShow="true"]{
  display: block;
  opacity: 1 ;
  transform: translateX(0);
  z-index: 2;
}

.top-slider-content-wrapper[next="true"]{
  display: block;

  opacity: 1 ;
  transform: translateX(100vw);
  z-index: 1;
}

.top-slider-content-wrapper[prev="true"]{
  display: block;

  opacity: 1 ;
  transform: translateX(-100vw);
  z-index: 1;
}

</style>
