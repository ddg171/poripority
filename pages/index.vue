<template>
  <div class="w-full flex flex-col justify-center items-center text-white">
    <TopSlider :slider-contents="sliderContents" :duration="5000" />

    <section class="max-w-4xl  flex flex-col justify-center p-2 bg-darkblue mb-6">
      <Header1>
        Latest topics
      </Header1>
      <article v-for="i in 3" :key="i" class="w-full bg-darkblue mb-4 p-4">
        <h3>Empty article-{{ i }}</h3>
        <p class="max-w-full article-p break-words">
          hogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypo
        </p>
      </article>
    </section>
    <section class="max-w-4xl  flex flex-col justify-center p-2 bg-darkblue mb-6">
      <Header1>
        Latest topics
      </Header1>
      <article v-for="i in 3" :key="i" class="w-full bg-darkblue mb-4 p-4">
        <h3>Empty article-{{ i }}</h3>
        <p class="max-w-full article-p break-words">
          hogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypo
        </p>
      </article>
    </section>
  </div>
</template>

<script setup>
import TopSlider from '~~/components/client/TopSlider.vue'
import Header1 from '~~/components/client/Header1.vue'
// import { SliderContent } from '~~/types'

const sliderContents = ref(
  [
    {
      pic: {
        souce: ['/images/webp/top-img01w640.webp 640w,/images/webp/top-img01w1270.webp 1024w,'],
        webp: '/images/webp/top-img01w2000.webp',
        jpg: '/images/webp/top-img01w640.jpg',
        alt: 'TOP画像1:鳩',
        title: 'TOP画像1:鳩'

      },
      text: {
        title: 'なんかかっこいい鳩の画像',
        para: [
          'なんかかっこいい鳩の画像です。',
          'なので仮TOP画像になりました。'
        ]
      }
    },
    {
      pic: {
        souce: ['/images/webp/top-img02w640.webp 640w,/images/webp/top-img02w1270.webp 1024w,'],
        webp: '/images/webp/top-img02w2000.webp',
        jpg: '/images/webp/top-img02w640.jpg',
        alt: 'TOP画像2:Wg:RD',
        title: 'TOP画像2:Wg:RD'
      },
      text: {
        title: 'Wargame: Red dragon',
        para: [
          'なんかかっこいいRTSです。'
        ]
      }
    },
    {
      pic: {
        souce: ['/images/webp/top-img03w640.webp 640w,/images/webp/top-img03w1270.webp 1024w,'],
        webp: '/images/webp/top-img03w2000.webp',
        jpg: '/images/webp/top-img03w640.jpg',
        alt: 'TOP画像3:GREEN MOVER',
        title: 'TOP画像3:GREEN MOVER'
      },
      text: {
        title: 'GREEN MOVER',
        para: [
          '超低床しか勝たん'
        ]
      }
    }
  ]
)

useHead({
  title: 'WIP|poripority.com'
})

</script>

<style>

</style>
