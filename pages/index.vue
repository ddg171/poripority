<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-index">
    <TopSlider :slider-contents="topContents" :duration="5000" />
    <CommonContentWidthBox class="flex flex-col items-center ">
      <!-- 新規コンポーネント -->
      <V2CommonContentSection header-text="Latest Articles" :is-important="true">
        <template #header>
          <NuxtLink to="/blog" class="block p-1 ml-auto text-md text-lightgray hover:bg-lightgreen/25 text-middle">
            <Icon name="akar-icons:arrow-right" class="inline-block w-3 h-3 mr-1" />
            See All
          </NuxtLink>
        </template>
        <template #content>
          <V2ArticleList v-if="!isArticleLoading" :articles="latestArticles" />
          <V2ArticleListSkelton v-else />
        </template>
      </V2CommonContentSection>
      <V2CommonContentSection header-text="Welcome!" :is-important="false">
        <template #content>
          <div class=" bg-darkblue border border-lightgreen">
            <div class="flex flex-col-reverse gap-2 lg:flex-row items-center md:items-start">
              <div class="bg-white w-72 h-72 sm:w-96 sm:h-96 shrink-0">
                <div class="relative w-72 h-full">
                  <NuxtPicture src="/images/webp/shrimp.webp" legacy-format="jpeg" class="absolute top-0 left-0"
                    :img-attrs="{ alt: '管理人の写真', height: 540, width: 540, decoding: 'async' }" />
                  <p class="absolute bottom-0 left-0 block  w-full text-sm text-center bg-darkblue/75 py-1">
                    管理人の写真
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-start gap-1 p-4 grow">
                <CommonAppApra>
                  "The hut of Poripority"にようこそ。このWebサイトは"<span
                    class="font-bold">Hata_kaze</span>"が趣味で色々フロントエンドの実験をしたり、ブログをやったりする個人サイトです。
                  以前はBloggerでブログをやっていましたが放置気味になってしまったので、心機一転ということでこちらに移転しました。
                </CommonAppApra>
                <CommonAppApra>
                  技術的な内容はおそらくQitta等に投稿しますが、それ以外の雑多な話はこちらで更新予定です。
                </CommonAppApra>
              </div>
            </div>
          </div>
        </template>
      </V2CommonContentSection>
      <V2CommonContentSection header-text="About this web site" :is-important="false">
        <template #content>
          <div class=" bg-darkblue border border-lightgreen">
            <div class="flex flex-col-reverse gap-2 lg:flex-row items-center md:items-start">
              <div class=" flex items-center justify-center">
                <div class="relative w-72 h-72 sm:w-96 sm:h-96   shrink-0">
                  <NuxtPicture src="/images/webp/diagram.webp" legacy-format="jpeg"
                    :img-attrs="{ alt: '当Webサイトの構成図', height: 540, width: 540, decoding: 'async' }" />
                  <p class="block absolute bottom-0 left-0 w-full text-sm text-center bg-darkblue/50 py-1">
                    当Webサイトの構成図
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-start gap-1 p-4">
                <CommonAppApra>
                  フロントエンドはNuxt/Vue(いずれもv3)+Typescript+Tailwind CSSで制作しています。
                  Nuxt3になってから開発サーバの起動、ビルドが非常に高速になり、非常に快適な開発環境になりました。
                </CommonAppApra>
                <CommonAppApra>
                  バックエンドについてはGCP上にデプロイされています。Firebase Hostingを使用しており、動的コンテンツのみGoogle
                  Cloudrun上で動作しているNuxt(SSRモード)にリダイレクトしています。
                </CommonAppApra>
                <CommonAppApra>
                  ブログ部分のコンテンツについてはMicroCMSを使用しています。画像APIとNuxt/imgモジュールの連携も可能で非常に便利です。
                </CommonAppApra>
                <CommonAppApra>
                  CI/CD(Github Actions)を導入しており、Mainブランチに変更内容がPushされると自動でビルド・デプロイが行われます。
                </CommonAppApra>
              </div>
            </div>
          </div>
        </template>
      </V2CommonContentSection>
    </CommonContentWidthBox>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~~/types/articles'
import type { MicroCMSImage, SliderContent } from '~~/types/components'



const latestArticles = ref<Article[]>([])
const isArticleLoading = ref<boolean>(true)
const loadingMsg = ref<'Loading...' | '記事が見つかりません。'>('Loading...')
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
    const data = await $fetch('/api/blogs', { params: { limit: 4 } })
    latestArticles.value = data.contents || []
    if (latestArticles.value.length) {
      const a = latestArticles.value[0]
      if (!a) return
      const eyecatch: MicroCMSImage = a.eyecatch
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
  } catch {
    loadingMsg.value = '記事が見つかりません。'
  }
})

</script>
