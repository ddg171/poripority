<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-index">
    <TopSlider :slider-contents="sliderContents" :duration="5000" />
    <CommonContentWidthBox class="flex flex-col items-center ">
      <ContentSection>
        <AppHeading2 class="mb-2">
          最新投稿
        </AppHeading2>
        <div v-if="pending" class="flex items-center justify-center w-full h-48 overflow-hidden xl:col-span-2 shrink-0">
          <p class="text-2xl">
            Loading...
          </p>
        </div>
        <ArticleList :articles="latest" class="grid-cols-1 lg:grid-cols-2">
          <div v-if="latest.length!==3" />
          <div class="flex items-end justify-center w-full h-auto lg:max-w-xl md:h-full">
            <div class="flex items-center justify-center w-full py-3 my-0 text-3xl readmore-link bg-green hover:bg-lightgreen focus:bg-lightgreen hover:underline">
              <CommonAppLink to="/blog" class="w-full h-full text-center">
                記事一覧へ
              </CommonAppLink>
            </div>
          </div>
        </ArticleList>
      </ContentSection>
      <ContentSection>
        <AppHeading2 class="mb-2">
          About this site
        </AppHeading2>
        <div class="flex flex-col-reverse gap-4 lg:flex-row">
          <div class="flex flex-col items-center justify-center">
            <NuxtPicture
              src="/images/webp/shrimp.webp"
              legacy-format="jpeg"
              class="w-60 h-60"
              :img-attrs="{ alt:'管理人の写真', height:240,width:240, decoding: 'async'}"
            />
            <p class="w-full text-sm text-center">
              管理人の写真
            </p>
          </div>
          <div class="grid gap-2">
            <CommonAppApra>
              このWebサイトは"<span class="font-bold">Hata_kaze</span>"が趣味で色々フロントエンドの実験をしたり、ブログをやったりする個人サイトです。
              以前はBloggerでブログをやっていましたが放置気味になってしまったので、心機一転ということでこちらに移転しました。
            </CommonAppApra>
            <CommonAppApra>
              フロントエンドはNuxt/Vue(いずれもv3)+Typescript+Tailwind CSSで制作し、Google Cloudrun上にデプロイしています。
              ドメインの接続と静的コンテンツ配信はFirebase Hosting、動的コンテンツについてはMicro CMSを利用しています。
            </CommonAppApra>
            <CommonAppApra>
              世の中的には全部静的コンテンツにしてしまうSSGが流行りのようですが、このサイトはSSRモードで動作しています。
            </CommonAppApra>
            <CommonAppApra>
              製作者のNuxtのSSRモードについての経験不足のため、このサイトは不思議な挙動をすることがありますがご容赦ください。
            </CommonAppApra>
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
            <div class="grid w-full gap-2">
              <CommonAppApra>
                Wargame: Red dragonを遊ぶ人向けのDiscordサーバー。気がつけば開設からもう5年以上経過したが元気に運営中。流石に8年前のゲームがメインなので他のゲームも遊ぶ事が多いが、今でも呼びかけてみると対戦相手が見つかる程度には活発。
              </CommonAppApra>
              <CommonAppApra>
                なんだかんだ言いつつWargame: RDで対人戦をもっとも積極的にやっている日本人鯖の一つ。CPU相手の戦闘に飽きてきた方や「俺より強いやつに会いたい」という方にもおすすめ。最近は日本以外からもお客さんが来て賑やかになった。
              </CommonAppApra>
              <CommonAppApra>
                Wargameを含めて主に遊ばれているゲームは以下の通り。他にも色々なゲームを遊ぶことがあり、管理人が触ってないものもそこそこあったりする。
              </CommonAppApra>
              <CommonLinkList :links="games" />
            </div>
          </div>
        </div>
      </ContentSection>
    </CommonContentWidthBox>
  </div>
</template>

<script setup lang="ts">
import { Article } from '~~/types/articles'
import { SliderContent, Eyecatch, LinkParams } from '~~/types/components'
import { resizeWithTargetWidth } from '~~/utils/imageAPIHelper'

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
      title: 'TOP画像1:鳩',
      fromCMS: false

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
      alt: 'TOP画像2',
      title: 'TOP画像2',
      fromCMS: false
    },
    text: {
      title: 'Blog',
      para: [
        '投稿記事はこちら'
      ],
      to: '/blog'
    }
  },
  {
    pic: {
      source: ['/images/webp/top-img03w640.webp 640w,/images/webp/top-img03w1270.webp 1024w,'],
      webp: '/images/webp/top-img03w2000.webp',
      jpg: '/images/webp/top-img03w640.jpg',
      alt: 'TOP画像3:GREEN MOVER',
      title: 'TOP画像3:GREEN MOVER',
      fromCMS: false
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
  const webp = eyecatch.url
  const w1280 = resizeWithTargetWidth(eyecatch, 1280, true).url
  const w640 = resizeWithTargetWidth(eyecatch, 640, true).url
  const jpg = eyecatch.url

  const ArticleforSlider:SliderContent = {
    pic: {
      source: [`${w640} 640w,${w1280} 1024w,`],
      webp,
      jpg,
      alt: 'TOP画像。最新投稿',
      title: 'TOP画像。最新投稿',
      fromCMS: true
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

const games = ref<LinkParams[]>(
  [
    { name: 'Wargame: Red Dragon', path: 'https://store.steampowered.com/app/251060/Wargame_Red_Dragon', isExternal: true },
    { name: 'Escape from Tarkov', path: 'https://www.escapefromtarkov.com/', isExternal: true },
    { name: 'MechWarrior Online™', path: 'https://mwomercs.com/', isExternal: true },
    { name: 'Ready or Not', path: 'https://store.steampowered.com/agecheck/app/1144200/?l=japanese', isExternal: true }
  ]
)

</script>

<style>

</style>
