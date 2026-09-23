<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-index">
    <TopSlider :slider-contents="topContents" :duration="5000" />
    <CommonContentWidthBox class="flex flex-col items-center ">
      <!-- 新規コンポーネント -->
      <section class="w-full p-4 xl:px-2  flex flex-col gap-8">
        <div class="pb-2  border-b border-lightgreen border-solid">
          <div class="flex items-center gap-2">
            <span class="block h-5 w-5 bg-orange" />
            <h2 class="block text-2xl font-semibold text-white ">
              Latest Articles
            </h2>
            <NuxtLink to="/blog" class="block p-1 ml-auto text-md text-lightgray hover:bg-lightgreen/25 text-middle">
              <Icon name="akar-icons:arrow-right" class="inline-block w-3 h-3 mr-1" />
              See All
            </NuxtLink>
          </div>
        </div>
        <div>
          <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <li v-for="a in latestArticles" :key="a.id">
              <!-- 新記事カード -->
              <article class="relative aspect-square bg-darkblue border-2 article-card border-lightgreen"
                @click.stop="router.push(`/blog/${a.id}`)">
                <NuxtPicture v-if="a.eyecatch?.url" class="object-cover opacity-100 transition-opacity duration-500"
                  provider="imgix" :src="a.eyecatch?.url || ``" format="webp" legacy-format="jpeg" fit="crop"
                  height="200" width="200"
                  :img-attrs="{ class: 'w-full bg-lightgreen/25', alt: `${a.title}のサムネイル画像`, height: 200, width: 200, decoding: 'async', loading: 'lazy' }"
                  :modifiers="{ q: 50 }" />
                <div class="absolute bottom-0 left-0 w-full h-1/2 px-2 pb-4 article-title-bg flex flex-col justify-end">
                  <NuxtLink :to="`/blog?category=${a.category.id}`"
                    class="w-fit p-2 bg-gray/75 text-xs text-orange hover:bg-gray hover:font-bold hover:cursor-pointer"
                    @click.stop="() => { }">{{ a.category.name }}</NuxtLink>
                  <h3 class="text-md font-semibold text-white">
                    {{ a.title }}
                  </h3>
                  <p class="text-sm text-lightgray mt-1">
                    updated: 2026/03/15 16:27
                  </p>
                </div>
              </article>

            </li>
          </ul>
        </div>
      </section>

      <section class="w-full p-4 xl:px-2  flex flex-col gap-8">
        <div class="pb-2  border-b border-lightgreen border-solid">
          <div class="flex items-center gap-2">
            <span class="block h-5 w-5 bg-lightgreen" />
            <h2 class="block text-2xl font-semibold text-white ">
              Welcome!
            </h2>
          </div>
        </div>
        <div class=" bg-darkblue border border-lightgreen">
          <div class="flex flex-col-reverse gap-2 lg:flex-row items-center md:items-start">
            <div class="bg-white w-72 h-72 shrink-0">
              <div class="relative w-72 h-full">
                <NuxtPicture src="/images/webp/shrimp.webp" legacy-format="jpeg" class="absolute top-0 left-0"
                  :img-attrs="{ alt: '管理人の写真', height: 288, width: 288, decoding: 'async' }" />
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
      </section>

      <section class="w-full p-4 xl:px-2  flex flex-col gap-8">
        <div class="pb-2  border-b border-lightgreen border-solid">
          <div class="flex items-center gap-2">
            <span class="block h-5 w-5 bg-lightgreen" />
            <h2 class="block text-2xl font-semibold text-white ">
              About this web site
            </h2>
          </div>
        </div>
        <div class=" bg-darkblue border border-lightgreen">
          <div class="flex flex-col-reverse gap-2 lg:flex-row items-center md:items-start">
            <div class=" flex items-center justify-center">
              <div class="relative w-72 h-72 sm:w-96 sm:h-96   shrink-0">
                <NuxtPicture src="/images/webp/diagram.webp" legacy-format="jpeg" class="diagram"
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
      </section>
    </CommonContentWidthBox>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~~/types/articles'
import type { MicroCMSImage, SliderContent } from '~~/types/components'

const router = useRouter()

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

<style scoped>
.article-card:hover img {
  transform: scale(2);
  transition: transform 0.3s ease-in-out;
}

.article-title-bg {
  background: linear-gradient(to top, #002130, #002130 20%, rgba(0, 0, 0, 0.0));
}
</style>
