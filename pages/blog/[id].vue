<template>
  <div class="w-full">
    <ContentSection class="grid ">
      <div class="flex flex-col sm:flex-row sm:justify-between mb-2">
        <ShareBtnBox :title="title" />
        <ArticleInfoBox :category="article?.category" :published-date="article?.publishedAt" class="" />
      </div>
      <div class="mb-2 text-sm p-2 bg-gray">
        <CommonAppLink class="text-orange" to="/disclaimer">
          当webサイトの特記事項についてはこちらをご確認ください。
        </CommonAppLink>
      </div>

      <ArticleBodyBlock :content="article?.content" @img-list="setImgList" @img-click="imgClickHandler" @heading-list="headingListHandler" />
      <ArticleNavigation :published-at="article?.publishedAt" />
      <ClientOnly>
        <div v-if="!isLoading.state.value.isLoading">
          <teleport to="#side-contents">
            <AsideContentsBox v-if="headings.length>0" class="mb-2">
              <AppHeading3 class="mb-2">
                目次
              </AppHeading3>
              <ArticleHeadingList :headings="headings" />
            </AsideContentsBox>
            <AsideContentsBox v-if="imgList.length>0" class="mb-2">
              <AppHeading3 class="mb-2">
                画像
              </AppHeading3>
              <ArticleImgList :img-list="imgList" @click="imgClickHandler" />
            </AsideContentsBox>
          </teleport>
        </div>
      </ClientOnly>

      <OverlayBox :is-show="!!selectedId" @click="imgClickHandler(undefined)">
        <ArticleImgDetail :image-list="imgList" :selected-id="selectedId" />
      </OverlayBox>
    </Contentsection>
    <ContentSection>
      <AppHeading2 class="mb-2">
        広告欄
      </AppHeading2>
      <AdCard v-for="a in article?.ads" :key="a.id" :ads="a" />
    </ContentSection>
  </div>
</template>

<script setup lang="ts">
import { useState, useGtag } from 'vue-gtag-next'

import { Article, Heading, ImageList } from '~~/types/articles'
import { PageTitleProp } from '~~/types/components'
import { cropSquare } from '~~/utils/imageAPIHelper'

definePageMeta({
  layout: 'blog'
})

const config = useRuntimeConfig()
const route = useRoute()
const isLoading = useLoadingStore()

// 記事の取得
const { data: article, error: err } = await useFetch<Article>(`/api/blogs/${route.params.id}`)
if (!article.value || err?.value) {
  throw createError({ statusCode: 404, statusMessage: 'Sorry,The article is not found' })
}

// 選択カテゴリの取得
const categoryStore = useCategoryStore()
categoryStore.select(article.value.category.id || null)
const { set: setTitle } = usePageTopStore()
const pageTitle = computed<PageTitleProp>(() => {
  const title = article.value?.title || ''
  const subtitle = article.value?.subtitle || ''
  const src = article.value?.eyecatch?.url || '/images/webp/blanktitle01w2000.webp'
  return {
    title,
    subtitles: [subtitle],
    topImg: {
      src,
      alt: '',
      title: ''
    }
  }
})
setTitle(pageTitle.value)
// 自動で更新
watch(pageTitle, (v) => {
  setTitle(v)
})

// metaタグ側で使う
const title = computed<string>(() => {
  return article?.value?.title + '-' + config.public.siteName
})
const description = computed<string>(() => {
  return article?.value?.subtitle || ''
})

const seoMeta:{[T:string]:string|(()=>string)} = {
  title: () => `${title.value}`,
  ogTitle: () => `${title.value}`,
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
const selectedId = ref<string|undefined>(undefined)

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
const setImgList = (l:ImageList) => {
  imgList.value = l
}
const imgList = ref<ImageList>([])

const imgClickHandler = (id:string|undefined = undefined) => {
  selectedId.value = id
}

const headingListHandler = (h:Heading[]) => {
  headings.value = h
}

const headings = ref<Heading[]>([])

const escapeKeyEventhandler = (e:KeyboardEvent) => {
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
