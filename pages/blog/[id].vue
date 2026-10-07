<template>
  <V2CommonPageContainer>
    <V2CommonContentSectionFrame class="w-full h-full py-10">
      <V2CommonContentSectionHeaderFrame class="w-full">
        <div class="flex flex-col gap-1">
          <V2CommonAppHeadingH1 is-important>{{ title }}</V2CommonAppHeadingH1>
          <p class="text-xs sm:text-sm text-lightgray font-mono mt-1">{{ description }}</p>
        </div>
      </V2CommonContentSectionHeaderFrame>
      <V2CommonContentSectionFrame>
        <V2CommonContentBoxFrame v-if="article.eyecatch?.url" class="">
          <NuxtPicture :src="article.eyecatch.url" :alt="article?.title" :width="article.eyecatch.width"
            :height="article.eyecatch.width" legacy-format="jpeg" class="w-full h-full"
            :img-attrs="{ alt: 'アイキャッチ画像', height: article.eyecatch.width, width: article.eyecatch.width, decoding: 'async', class: 'w-full h-auto' }" />
        </V2CommonContentBoxFrame>
        <V2ArticleContentBox>
          <div class="w-full flex flex-col sm:flex-row sm:justify-between mb-2 gap-2">
            <ShareBtnBox :title="title" />
            <V2ArticleInfoBox :category="article?.category" :published-date="article?.publishedAt" class="" />
          </div>
          <div class="w-full mb-2 text-sm p-2 bg-gray">
            <CommonAppLink class="text-orange" to="/disclaimer">
              当webサイトの特記事項についてはこちらをご確認ください。
            </CommonAppLink>
          </div>

        </V2ArticleContentBox>
        <V2ArticleContentBox>
          <ArticleBodyBlock :content="article?.content" @img-list="setImgList" @img-click="imgClickHandler"
            @heading-list="headingListHandler" />

          <ArticleNavigation :published-at="article?.publishedAt" />
        </V2ArticleContentBox>
        <OverlayBox :is-show="!!selectedId" @click="imgClickHandler(undefined)">
          <ArticleImgDetail :image-list="imgList" :selected-id="selectedId" />
        </OverlayBox>
      </V2CommonContentSectionFrame>
      <V2CommonContentSection v-if="article?.ads?.length" header-text="広告欄" class="">
        <template #content>
          <div class="w-full flex flex-col gap-4 ">
            <AdCard v-for="a in article?.ads" :key="a.id" :ads="a" />
          </div>
        </template>

      </V2CommonContentSection>
    </V2CommonContentSectionFrame>
  </V2CommonPageContainer>
</template>

<script setup lang="ts">
import { useGtag, useState } from 'vue-gtag-next'

import type { Article, Heading, ImageList } from '~~/types/articles'
import { cropSquare } from '~~/utils/imageAPIHelper'

definePageMeta({
  layout: 'v2-blog'
})


const config = useRuntimeConfig()
const route = useRoute()

// 記事の取得
const { data: article, error: err } = await useFetch<Article>(`/api/blogs/${route.params.id}`)
if (!article.value || err?.value) {
  throw createError({ statusCode: 404, statusMessage: 'Sorry,The article is not found' })
}

// 選択カテゴリの取得
const categoryStore = useCategoryStore()
categoryStore.select(article.value.category.id || null)



// metaタグ側で使う
const title = computed<string>(() => {
  return article?.value?.title
})
const description = computed<string>(() => {
  return article?.value?.subtitle || ''
})

const seoMeta: { [T: string]: string | (() => string) } = {
  title: () => `${title.value}` + '-' + config.public.siteName,
  ogTitle: () => `${title.value}` + '-' + config.public.siteName,
  description: () => `${description.value}`,
  ogDescription: () => `${description.value}`,
  robots: 'all',
  ogType: 'article',
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image'
}

const ogpImg = cropSquare(article?.value?.eyecatch, false, 1200)?.url
if (ogpImg) {
  seoMeta.ogImage = () => ogpImg
}

useSeoMeta(seoMeta)

// 画像拡大表示用
const selectedId = ref<string | undefined>(undefined)

onMounted(() => {
  window.addEventListener('keyup', escapeKeyEventhandler)

  // Gtagのページビューイベント対応
  const gtagState = useState()
  if (!gtagState.isEnabled) { return }
  const gtag = useGtag()

  gtag.pageview({
    page_title: article.value?.title,
    page_path: window.location.pathname
  })
})
const setImgList = (l: ImageList) => {
  imgList.value = l
}
const imgList = ref<ImageList>([])

const imgClickHandler = (id: string | undefined = undefined) => {
  selectedId.value = id
}

const headingListHandler = (h: Heading[]) => {
  headings.value = h
}

const headings = ref<Heading[]>([])

const escapeKeyEventhandler = (e: KeyboardEvent) => {
  const key = e.key
  if (key !== 'Escape') { return }
  if (!selectedId.value) {
    return
  }
  selectedId.value = undefined
}

onUnmounted(() => {
  window.removeEventListener('keyup', escapeKeyEventhandler)
})

</script>
