<template>
  <div class="w-full flex flex-col justify-center items-center text-white">
    <div class="top-slider-wrapper w-full  h-3/4h md:h-1/2h mb-3">
      <div class="w-full h-full relative">
        <div class="top-slider w-full h-full relative">
          <div v-for="c,i in sliderContents" :key="c" class="top-slider-content-wrapper w-full h-full  absolute" :isShow="sliderPage===i">
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
                  <div class="absolute  bottom-1/4 ml-5 md:ml-10">
                    <h2 class="text-3xl md:text-5xl mb-4 border-solid border-l-8  border-l-lightgray pl-2">
                      {{ c.text.title }}
                    </h2>
                    <p v-for="p , t in c.text.para" :key="t" class="text-xl md:text-3xl ">
                      {{ p }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 flex justify-center">
      <button v-for="c in sliderContents.length" :key="c" class="mx-2 h-4 w-4 border-solid border-lightgray border" :isCurrent="c===sliderPage+1" @click="sliderPage=(c-1)" />
    </div>
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
import PictureBox from '~~/components/client/PictureBox.vue'
import Header1 from '~~/components/client/Header1.vue'

useHead({
  title: 'WIP|poripority.com'
})

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
    }
  ]
)

const sliderPage = ref(0)
const timerId = ref(0)
onMounted(() => {
  timerId.value = setInterval(() => {
    if (sliderPage.value >= sliderContents.value.length - 1) {
      sliderPage.value = 0
      return
    }
    sliderPage.value++
  }, 10000)
})

</script>

<style>
.top-slider-content-wrapper{
  opacity: 0;
  transition: opacity 0.5s ;
}
.top-slider-content-wrapper[isShow="true"]{
  opacity: 1;
}
</style>
