<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-index">
    <TopSlider :slider-contents="topContents" :duration="5000" />
    <CommonContentWidthBox class="flex flex-col items-center ">
      <ContentSection>
        <AppHeading2 class="mb-2">
          最新投稿
        </AppHeading2>
        <div v-if="isArticleLoading" class="flex items-center justify-center w-full h-48 overflow-hidden xl:col-span-2 shrink-0">
          <p class="text-2xl">
            {{ loadingMsg }}
          </p>
        </div>
        <ArticleList :articles="latestArticles" class="grid-cols-1 lg:grid-cols-2">
          <li v-if="latestArticles.length !== 3" />
          <li class="flex items-end justify-center w-full h-auto lg:max-w-xl md:h-full">
            <div
              class="flex items-center justify-center w-full py-3 my-0 text-3xl font-medium readmore-link bg-green hover:bg-lightgreen focus:bg-lightgreen hover:underline"
            >
              <CommonAppLink to="/blog" class="w-full h-full text-center">
                記事一覧へ
              </CommonAppLink>
            </div>
          </li>
        </ArticleList>
      </ContentSection>
      <ContentSection>
        <AppHeading2 class="mb-2">
          Welcome!
        </AppHeading2>
        <div class="flex flex-col-reverse gap-4 lg:flex-row">
          <div class="flex flex-col items-center justify-center">
            <NuxtPicture
              src="/images/webp/shrimp.webp"
              legacy-format="jpeg"
              class="w-60 h-60"
              :img-attrs="{ alt: '管理人の写真', height: 240, width: 240, decoding: 'async' }"
            />
            <p class="w-full text-sm text-center">
              管理人の写真
            </p>
          </div>
          <div class="flex flex-col items-start gap-2">
            <CommonAppApra>
              "The hut of Poripority"にようこそ。このWebサイトは"<span class="font-bold">Hata_kaze</span>"が趣味で色々フロントエンドの実験をしたり、ブログをやったりする個人サイトです。
              以前はBloggerでブログをやっていましたが放置気味になってしまったので、心機一転ということでこちらに移転しました。
            </CommonAppApra>
            <CommonAppApra>
              技術的な内容はおそらくQitta等に投稿しますが、それ以外の雑多な話はこちらで更新予定です。
            </CommonAppApra>
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <AppHeading2 class="mb-2">
          About this web site
        </AppHeading2>
        <div class="flex flex-col-reverse gap-4 lg:flex-row">
          <div class="flex flex-col items-center lg:items-start justify-center">
            <div class="flex flex-col items-center justify-center">
              <NuxtPicture
                src="/images/webp/diagram.webp"
                legacy-format="jpeg"
                class="diagram"
                :img-attrs="{ alt: '当Webサイトの構成図', height: 540, width: 540, decoding: 'async' }"
              />
              <p class="w-full text-sm text-center">
                当Webサイトの構成図
              </p>
            </div>
          </div>

          <div class="flex flex-col items-start gap-2">
            <CommonAppApra>
              フロントエンドはNuxt/Vue(いずれもv3)+Typescript+Tailwind CSSで制作しています。
              Nuxt3になってから開発サーバの起動、ビルドが非常に高速になり、非常に快適な開発環境になりました。
            </CommonAppApra>
            <CommonAppApra>
              バックエンドについてはGCP上にデプロイされています。Firebase Hostingを使用しており、動的コンテンツのみGoogle Cloudrun上で動作しているNuxt(SSRモード)にリダイレクトしています。
            </CommonAppApra>
            <CommonAppApra>
              ブログ部分のコンテンツについてはMicroCMSを使用しています。画像APIとNuxt/imgモジュールの連携も可能で非常に便利です。
            </CommonAppApra>
            <CommonAppApra>
              CI/CD(Github Actions)を導入しており、Mainブランチに変更内容がPushされると自動でビルド・デプロイが行われます。
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
                Wargame: Red
                dragonを遊ぶ人向けのDiscordサーバー。気がつけば開設からもう5年以上経過したが元気に運営中。流石に8年前のゲームがメインなので他のゲームも遊ぶ事が多いが、今でも呼びかけてみると対戦相手が見つかる程度には活発。
              </CommonAppApra>
              <CommonAppApra>
                なんだかんだ言いつつWargame:
                RDで対人戦をもっとも積極的にやっている日本人鯖の一つ。CPU相手の戦闘に飽きてきた方や「俺より強いやつに会いたい」という方にもおすすめ。最近は日本以外からもお客さんが来て賑やかになった。
              </CommonAppApra>
              <CommonAppApra>
                Wargameを含めて主に遊ばれているゲームは以下の通り。他にも色々なゲームを遊ぶことがあり、管理人が触ってないものもそこそこあったりする。
              </CommonAppApra>
              <CommonLinkList :links="games" />
            </div>
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <AppHeading2 class="mb-2">
          広告欄
        </AppHeading2>
        <div class="w-full h-full">
          <Adsbygoogle ad-format="fluid" ad-slot="5859079761" ad-layout-key="-di+92-1z-c6+tf" />
        </div>
      </ContentSection>
    </CommonContentWidthBox>
  </div>
</template>

<script setup lang="ts">
import { Article } from '~~/types/articles'
import { SliderContent, Eyecatch, LinkParams } from '~~/types/components'

const latestArticles = ref<Article[]>([])
const isArticleLoading = ref<boolean>(true)
const loadingMsg = ref<'Loading...'|'記事が見つかりません。'>('Loading...')
const topContents = ref<SliderContent[]>([
  {
    pic: {
      src: '/images/webp/top-img01w2000.webp',
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
      src: '/images/webp/top-img03w2000.webp',
      alt: 'TOP画像3:GREEN MOVER',
      title: 'TOP画像3:GREEN MOVER',
      fromCMS: false
    },
    text: {
      title: 'ABOUT',
      para: [
        'いわゆるポートフォリオ'
      ],
      to: '/about'
    }
  },
  {
    pic: {
      src: '/images/webp/top-img02w2000.webp',
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
  }
])

onMounted(async () => {
  try {
    const data = await $fetch('/api/blogs', { params: { limit: 3 } })
    latestArticles.value = data.contents || []
    if (latestArticles.value.length) {
      const a = latestArticles.value[0]
      const eyecatch: Eyecatch = a.eyecatch
      const src = eyecatch.url

      const ArticleforSlider: SliderContent = {
        pic: {
          src,
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
      topContents.value.push(ArticleforSlider)
    }
    if (latestArticles.value.length === 0) {
      throw new Error('記事がありません。')
    }
    isArticleLoading.value = false
  } catch (_) {
    loadingMsg.value = '記事が見つかりません。'
  }
})

const games = ref<LinkParams[]>(
  [
    { name: 'Wargame: Red Dragon', path: 'https://store.steampowered.com/app/251060/Wargame_Red_Dragon', isExternal: true },
    { name: 'WARNO', path: 'https://store.steampowered.com/app/1611600/WARNO', isExternal: true },
    { name: 'Escape from Tarkov', path: 'https://www.escapefromtarkov.com/', isExternal: true },
    { name: 'MechWarrior Online™', path: 'https://mwomercs.com/', isExternal: true },
    { name: 'Ready or Not', path: 'https://store.steampowered.com/agecheck/app/1144200/', isExternal: true },
    { name: 'Project Zomboid', path: 'https://projectzomboid.com', isExternal: true }
  ]
)

</script>

<style scoped>
.diagram{
  width: 540px;
  height: 540px;
}

@media (max-width: 767px){
  .diagram{
    width: 100%;
    height:auto;
  }
}

</style>
