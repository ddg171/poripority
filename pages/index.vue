<template>
  <div class="w-full flex flex-col justify-center items-center text-white">
    <TopSlider :slider-contents="sliderContents" :duration="5000" />

    <TopSection>
      <Header2>
        最新投稿
      </Header2>
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 relative">
        <ArticleCard v-for="a in latest" :key="a.id" :article="a" />
        <template v-if="latest.length===0">
          <div class="bg-green my-4 mx-0 md:my-2 md:mx-2 col-span-1">
            <div class="w-full h-48   md:h-48  shrink-0 flex justify-center items-center overflow-hidden">
              <p class="text-2xl">
                投稿はありません。
              </p>
            </div>
          </div>
          <div v-for="i in 2" :key="i" class="bg-green my-4 mx-0 md:my-2 md:mx-2 col-span-1">
            <div class="w-full h-48   md:h-48  shrink-0 flex justify-center items-center overflow-hidden" />
          </div>
        </template>
        <NuxtLink to="/blog" class="readmore-box flex justify-center items-center bg-green border-solid border border-green/50 hover:border-lightgray text-3xl py-3 my-0 md:my-3 hover:underline">
          記事一覧へ
        </NuxtLink>
      </div>
    </TopSection>
    <TopSection>
      <Header2>
        SNS
      </Header2>
      <div class="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center ">
        <TwitterWidget />
        <InstagramWidget />
        <DiscoreWidget />
      </div>
    </TopSection>
  </div>
</template>

<script setup lang="ts">

import TopSlider from '~~/components/client/TopSlider.vue'
import TopSection from '~~/components/client/TopSection.vue'
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
  sliderContentsTemp.concat(defaultContents)
)

useHead({
  title: 'WIP|poripority.com'
})

</script>

<style>

</style>
