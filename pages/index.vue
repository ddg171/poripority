<template>
  <div class="page-index flex flex-col items-center justify-center w-full text-white">
    <ClientTopSlider :slider-contents="sliderContents" :duration="5000" />
    <div class="flex flex-col items-center w-full max-w-screen-xl ">
      <ClientContentSection>
        <Header2>
          最新投稿
        </Header2>
        <div class="relative grid w-full grid-cols-1 lg:grid-cols-2">
          <ArticleCard v-for="a in latest" :key="a.id" :article="a" />
          <template v-if="latest.length===0">
            <div class="col-span-1 mx-0 my-4 bg-green md:my-2 md:mx-2">
              <div class="flex items-center justify-center w-full h-48 overflow-hidden md:h-48 shrink-0">
                <p class="text-2xl">
                  投稿はありません。
                </p>
              </div>
            </div>
            <div v-for="i in 2" :key="i" class="col-span-1 mx-0 my-4 bg-green md:my-2 md:mx-2">
              <div class="flex items-center justify-center w-full h-48 overflow-hidden md:h-48 shrink-0" />
            </div>
          </template>
          <div class="flex items-center justify-center w-full h-full mx-2 lg:max-w-xl">
            <NuxtLink to="/blog" class="flex items-center justify-center w-full h-full py-3 my-0 text-3xl readmore-link bg-green hover:bg-lightgreen focus:bg-lightgreen md:my-3 hover:underline">
              記事一覧へ
            </NuxtLink>
          </div>
        </div>
      </ClientContentSection>
      <ClientContentSection>
        <Header2>
          SNS
        </Header2>
        <div class="flex flex-col items-center justify-center w-full lg:flex-row lg:items-start ">
          <!-- <TwitterWidget />
          <InstagramWidget />
          <DiscoreWidget /> -->
        </div>
      </ClientContentSection>
    </div>
  </div>
</template>

<script setup lang="ts">

import Header2 from '~~/components/client/Header2.vue'
import ArticleCard from '~~/components/client/TopArticleCard.vue'
import DiscoreWidget from '~~/components/client/DiscordWidget.vue'
import TwitterWidget from '~~/components/client/TwitterWidget.vue'
import InstagramWidget from '~~/components/client/InstagramWidget.vue'
import { Article, Eyecatch, SliderContent } from '~~/types'
import { resizeWithTargetWidth } from '~~/components/imageAPIHelpre'

const { data } = await useFetch('/api/blogs', { params: { limit: 3 } })

const contents = data.value?.contents || []
const latest = reactive<Array<Article>>(contents)
const defaultContents:SliderContent[] = [
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
        '肖像権は無い。'
      ],
      to: '/'
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
        '冷戦時代を舞台としたRTS'
      ],
      to: '/blog?category=z_oug044yh'
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
        '低床車しか勝たん'
      ]
    }
  }
]
const sliderContentsTemp = []
if (contents.length) {
  const a = contents[0]
  const eyecatch:Eyecatch = a.eyecatch
  const webp = resizeWithTargetWidth(eyecatch, 2000, true).url
  const w1280 = resizeWithTargetWidth(eyecatch, 1280, true).url
  const w640 = resizeWithTargetWidth(eyecatch, 640, true).url
  const jpg = resizeWithTargetWidth(eyecatch, 2000, false).url

  const ArticleforSlider:SliderContent = {
    pic: {
      souce: [`${w640} 640w,${w1280} 1024w,`],
      webp,
      jpg,
      alt: 'TOP画像。最新投稿',
      title: 'TOP画像。最新投稿'
    },
    text: {
      title: a.title,
      para: a.subtitle ? [a.subtitle] : [],
      to: `/blog/${a.id}`
    }
  }
  sliderContentsTemp.push(ArticleforSlider)
}

const sliderContents = ref<Array<SliderContent>>(
  defaultContents.concat(sliderContentsTemp)
)

</script>

<style>

</style>
