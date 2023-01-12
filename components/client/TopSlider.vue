<template>
  <div class="w-full mb-4 overflow-hidden top-slider-wrapper">
    <div class="relative w-full h-3/4h lg:h-1/2h">
      <div class="relative w-full h-full top-slider flex justify-center items-center">
        <p v-if="sliderPage===-1" class="text-white text-3xl">
          loading...
        </p>
        <div v-for="c,i in props.sliderContents" :key="i" class="absolute w-full h-full top-slider-content-wrapper" :isShow="sliderPage===i">
          <div class="relative w-full h-full top-slider-content">
            <div
              class="absolute flex items-center justify-center w-full h-full mb-6 overflow-hidden firstview bg-darkblue"
            >
              <ClientPictureBox
                :souce="c.pic.souce"
                :alt="c.pic.alt"
                :title="c.pic.title"
                :webp="c.pic.webp"
                :jpg="c.pic.jpg"
              />
            </div>
            <div class="static w-full h-full slider-text md:absolute ">
              <div class="relative w-full h-full">
                <div class="absolute w-full p-4 ml-5 md:w-auto top-1/2 md:ml-16 lg:ml-20 bg-green/75">
                  <h2 class="flex items-center pb-1 pl-2 mb-2 text-3xl border-l-8 border-solid md:text-5xl border-l-lightgray" :data-is-tight="!!c.text.isTight">
                    <NuxtLink v-if="!!c.text.to" :to="c.text.to" class="hover:underline" tabindex="-1">
                      {{ c.text.title }}
                    </NuxtLink>
                    <span v-else>{{ c.text.title }}</span>
                  </h2>
                  <p v-for="p , t in c.text.para" :key="t" class="text-xl md:text-3xl">
                    {{ p }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 z-10 flex justify-center w-full my-2 md:my-5">
          <button
            v-for="c in contentNum"
            :key="c"
            class="w-6 h-6 mx-2 duration-75 ease-in border-solid shadow-2xl slider-page-btn bg-lightgray"
            :isCurrent="c===sliderPage+1"
            aria-label="スライダーのページ移動"
            title="スライダーのページ移動"
            tabindex="0"
            @click="jump(c-1)"
          />
          <button
            class="relative w-6 h-6 mx-4 shadow-2xl slider-toggle-btn bg-lightgray"
            aria-label="スライダーの停止・再生切替"
            title="スライダーの停止・再生切替"
            :isStopped="timerId === 0"
            tabindex="0"
            @click="toggle"
          >
            <span class="absolute border-solid border-gray" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SliderContent } from '~~/types'

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

const toggle = () => {
  if (timerId.value) { return stop() }
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

.slider-page-btn[isCurrent="true"]{
    background-color: #019585;
}

.slider-toggle-btn span{
    height: 60%;
    width: 50%;
    top:20%;
    left:25%;
    border-left-width: 3px;
    border-right-width: 3px;
}

.slider-toggle-btn[isStopped="true"] span{
    width: 60%;
    left:11%;
    border-left-width: 0 !important;
    border-right-width: 3px;
    border-bottom-width: 3px;
    transform: rotate(-45deg);
    transform-origin: 50% 50%;

}

</style>
