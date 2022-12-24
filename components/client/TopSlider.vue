<template>
  <div class="top-slider-wrapper w-full   mb-3 overflow-hidden">
    <div class="w-full h-3/4h lg:h-1/2h relative">
      <div class="top-slider w-full h-full relative">
        <div v-for="c,i in props.sliderContents" :key="i" class="top-slider-content-wrapper w-full h-full  absolute" :isShow="sliderPage===i">
          <div class="top-slider-content w-full h-full  relative">
            <div
              class="firstview w-full h-full absolute flex justify-center items-center overflow-hidden bg-darkblue  mb-6"
            >
              <PictureBox
                :souce="c.pic.souce"
                :alt="c.pic.alt"
                :title="c.pic.title"
                :webp="c.pic.webp"
                :jpg="c.pic.jpg"
              />
            </div>
            <div class="slider-text w-full h-full static md:absolute backdrop-blur-sm">
              <div class="w-full h-full relative">
                <div class="absolute  top-1/2 ml-5 md:ml-20">
                  <h2 class="text-3xl md:text-5xl mb-4 border-solid border-l-8  border-l-lightgray pl-2">
                    {{ c.text.title }}
                  </h2>
                  <p v-for="p , t in c.text.para" :key="t" class="text-xl md:text-3xl">
                    {{ p }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full my-5 ml-6 flex justify-center absolute inset-x-0 bottom-0">
          <button v-for="c in contentNum" :key="c" class="slider-page-btn mx-2  h-6 w-6 border-solid bg-lightgray ease-in duration-75 shadow-2xl" :isCurrent="c===sliderPage+1" @click="jump(c-1)" />
          <button class="slider-toggle-btn mx-4 h-6 w-6  relative bg-lightgray shadow-2xl" :isStopped="timerId === 0" @click="toggle">
            <span class=" absolute" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PictureBox from '~~/components/client/PictureBox.vue'
import { SliderContent } from '~~/types'

interface Props {
    sliderContents:SliderContent[]
    duration:number
}

const sliderPage = ref<number>(0)
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
  stop()
  start()
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

onMounted(() => {
  if (timerId.value) { return }
  start()
})

</script>
<style scoped>
.top-slider-content-wrapper{
  opacity: 0;
  transition: opacity 0.5s ;
}
.top-slider-content-wrapper[isShow="true"]{
  opacity: 1;
}

.slider-page-btn[isCurrent="true"]{
    background-color: #019585;
}

.slider-toggle-btn span{
    height: 60%;
    width: 50%;
    top:20%;
    left:25%;
    border-style: solid;
    border-color: black;
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
