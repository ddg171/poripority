<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-index">
    <TopSlider :slider-contents="sliderContents" :duration="5000" />
    <div class="flex flex-col items-center w-full max-w-screen-xl ">
      <ContentSection>
        <AppHeading2 class="mb-2">
          最新投稿
        </AppHeading2>
        <div class="grid w-full grid-cols-1 xl:grid-cols-2 gap-4">
          <div v-if="pending" class="xl:col-span-2 flex items-center justify-center w-full h-48 overflow-hidden  shrink-0">
            <p class="text-2xl">
              Loading...
            </p>
          </div>
          <template v-else>
            <ArticleCard v-for="a in latest" :key="a.id" :article="a" />
            <div v-if="latest.length!==3" />
            <div class="flex items-end justify-center w-full h-auto lg:max-w-xl md:h-full">
              <NuxtLink to="/blog" class="flex items-center justify-center w-full py-3 my-0 text-3xl readmore-link bg-green hover:bg-lightgreen focus:bg-lightgreen hover:underline">
                記事一覧へ
              </NuxtLink>
            </div>
          </template>
        </div>
      </ContentSection>
      <ContentSection>
        <AppHeading2 class="mb-2">
          About this site
        </AppHeading2>
        <div class="flex flex-col-reverse lg:flex-row my-2">
          <div class="flex flex-col justify-center items-center">
            <PictureBox
              class="w-48 h-48"
              webp="/images/webp/shrimp.webp"
              jpg="/images/shrimp.jpg"
              alt="管理人近影。アノマロカリス"
              title="管理人近影"
            />
            <p class="w-full text-center text-sm">
              管理人の写真
            </p>
          </div>
          <div class="md:px-2">
            <p class="indent-4 mb-4">
              このWebサイトは"<span class="font-bold">Hata_kaze</span>"が趣味で色々フロントエンドの実験をしたり、ブログをやったりする個人サイトです。
              以前はBloggerでブログをやっていましたが放置気味になってしまったので、心機一転ということでこちらに移転しました。
            </p>
            <p class="indent-4 mb-4">
              フロントエンドはNuxt/Vue(いずれもv3)+Typescript+Tailwind CSSで制作し、Google Cloudrun上にデプロイしています。
              ドメインの接続と静的コンテンツ配信はFirebase Hosting、動的コンテンツについてはMicro CMSを利用しています。
            </p>
            <p class="indent-4 mb-4">
              世の中的には全部静的コンテンツにしてしまうSSGが流行りのようですが、このサイトはSSRモードで動作しています。
            </p>
            <p class="mb-4">
              製作者のNuxtのSSRモードについての経験不足のため、このサイトは不思議な挙動をすることがありますがご容赦ください。
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <AppHeading2 class="mb-2">
          Discordサーバー/居酒屋「ハルキゲニア」
        </AppHeading2>
        <div class="flex flex-col justify-start md:flex-row">
          <WidgetDiscordStatus class="flex justify-center mx-0 my-4 md:my-2" />
          <div class="mx-0 my-4 md:my-2 md:mx-4">
            <div class="w-full md:w-90 xl:w-3/5">
              <p class="mb-2 indent-4">
                Wargame: Red dragonを遊ぶ人向けのDiscordサーバー。他にも流行りのゲームを遊んだり色々やってるので、気になる方はぜひご参加ください。
              </p>
              <p class="mb-2 indent-4">
                おそらくWargame: RDで対人戦をもっとも積極的にやっている日本人鯖の一つです。CPU相手の戦闘に飽きてきた方や「俺より強いやつに会いたい」という方にもおすすめ。
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article, Eyecatch, SliderContent } from '~~/types'
import { resizeWithTargetWidth } from '~~/utils/imageAPIHelpre'

const { data, pending } = await useFetch('/api/blogs', { params: { limit: 3 } })

const contents = data.value?.contents || []
const latest = computed<Article[]>(() => data.value?.contents || [])
const defaultContents:SliderContent[] = [
  {
    pic: {
      source: ['/images/webp/top-img01w640.webp 640w,/images/webp/top-img01w1270.webp 1024w,'],
      webp: '/images/webp/top-img01w2000.webp',
      jpg: '/images/webp/top-img01w640.jpg',
      alt: 'TOP画像1:鳩',
      title: 'TOP画像1:鳩'

    },
    text: {
      title: 'なんかそれっぽい鳩',
      para: [
        'Welcome to the "hut" of Poripority.'
      ],
      isTight: true
    }
  },
  {
    pic: {
      source: ['/images/webp/top-img02w640.webp 640w,/images/webp/top-img02w1270.webp 1024w,'],
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
      source: ['/images/webp/top-img03w640.webp 640w,/images/webp/top-img03w1270.webp 1024w,'],
      webp: '/images/webp/top-img03w2000.webp',
      jpg: '/images/webp/top-img03w640.jpg',
      alt: 'TOP画像3:GREEN MOVER',
      title: 'TOP画像3:GREEN MOVER'
    },
    text: {
      title: 'ABOUT',
      para: [
        'このWebサイトと作者について'
      ],
      to: '/about'
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
      source: [`${w640} 640w,${w1280} 1024w,`],
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
