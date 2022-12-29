<template>
  <div class="w-full mb-4 overflow-hidden top-slider-wrapper">
    <div class="relative w-full h-1/4h lg:h-1/3h">
      <div class="relative w-full h-full page-title">
        <div class="absolute w-full h-full">
          <div class="relative w-full h-full top-slider-content">
            <div
              v-if="img"
              class="absolute flex items-center justify-center w-full h-full mb-6 overflow-hidden firstview bg-darkblue"
            >
              <PictureBox
                :souce="img.souce"
                :alt="img.alt"
                :title="img.title"
                :webp="img.webp"
                :jpg="img.jpg"
              />
            </div>
            <div class="static w-full h-full title-box md:absolute backdrop-blur-sm">
              <div class="relative w-full h-full">
                <div class="absolute top-0 flex flex-col items-center justify-center w-full h-full p-4 ml-0 md:w-auto sm:h-auto sm:top-8 md:top-1/3 sm:ml-1 md:ml-16 lg:ml-20 bg-green/75">
                  <h1 class="flex items-center pb-1 pl-2 mb-0 text-xl text-white border-l-8 border-solid md:text-5xl sm:mb-2 border-l-lightgray">
                    <span>{{ title }}</span>
                  </h1>
                  <p v-for="t , i in subtitles" :key="i" class="text-white text-md md:text-xl">
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
