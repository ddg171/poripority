<template>
  <div class="top-slider-wrapper w-full   mb-4 overflow-hidden">
    <div class="w-full h-1/5h lg:h-1/4h relative">
      <div class="page-title w-full h-full relative">
        <div class="w-full h-full  absolute">
          <div class="top-slider-content w-full h-full  relative">
            <div
              v-if="img"
              class="firstview w-full h-full absolute flex justify-center items-center overflow-hidden bg-darkblue  mb-6"
            >
              <PictureBox
                :souce="img.souce"
                :alt="img.alt"
                :title="img.title"
                :webp="img.webp"
                :jpg="img.jpg"
              />
            </div>
            <div class="title-box w-full h-full static md:absolute backdrop-blur-sm">
              <div class="w-full h-full relative">
                <div class="absolute  w-full md:w-auto top-1/3 ml-1 md:ml-16 lg:ml-20 bg-green/75 p-4">
                  <h1 class="text-3xl md:text-5xl pb-1 mb-2 border-solid border-l-8  text-white border-l-lightgray pl-2 flex items-center">
                    <span>{{ title }}</span>
                  </h1>
                  <p v-for="t , i in subtitles" :key="i" class="text- md:text-xl text-white">
                    {{ t }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import PictureBox from '~~/components/client/PictureBox.vue'
import { PictureBoxProp } from '~~/types'

  interface Props {
      topImg:PictureBoxProp|null
      title:string
      subtitles:string[]
  }

const props = withDefaults(defineProps<Props>(), { img: () => null, title: '記事一覧', subtitles: ():string[] => [] })

const blankImg:PictureBoxProp = {
  webp: '/images/webp/blanktitle01w2000.webp',
  souce: ['/images/webp/blanktitle01w640.webp 640w', '/images/webp/blanktitle01w1270.webp 1024w'],
  jpg: '/images/blanktitle01w640.jpg',
  alt: '',
  title: ''
}

const img = computed<PictureBoxProp>(() => {
  return props.topImg || blankImg
})

</script>
