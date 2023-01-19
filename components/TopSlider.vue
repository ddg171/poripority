<template>
  <TopConteinerBlock class="h-3/4h lg:h-1/2h">
    <div class="relative flex items-center justify-center w-full h-full top-slider">
      <p v-if="sliderPage===-1" class="text-3xl text-white">
        loading...
      </p>
      <div v-for="c,i in props.sliderContents" :key="i" class="absolute w-full h-full top-slider-content-wrapper" :isShow="sliderPage===i">
        <div class="relative w-full h-full top-slider-content">
          <TopImgBlock :img="c.pic" />
          <div class=" absolute w-full h-full flex justify-center items-center">
            <CommonContentWidthBox class="flex items-end justify-start">
              <div class="flex flex-col px-4 md:px-12 py-2  md:py-6 bg-green/75 w-full md:w-auto mb-1/5h  md:mb-1/8h">
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
  opacity: 0;
  transition: opacity 0.5s ;

}
.top-slider-content-wrapper[isShow="true"]{
  opacity: 1;
  z-index: 1;
}

</style>
