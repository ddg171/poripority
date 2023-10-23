<template>
  <div class="w-full">
    <ContentSection class="grid">
      <div class="flex flex-col sm:flex-row sm:justify-between mb-2">
        <ShareBtnBox :title="title" />
        <ArticleInfoBox :category="article?.category" :published-date="article?.publishedAt" class="" />
      </div>
      <ArticleBodyBlock :content="article?.content" @img-list="setImgList" @img-click="imgClickHandler" @heading-list="headingListHandler" />
      <ArticleNavigation :published-at="article?.publishedAt" />
      <ClientOnly>
        <teleport to="#side-contents">
          <AsideContentsBox v-if="headings.length>0" class="mb-2">
            <AppHeading3 class="mb-2">
              目次
            </AppHeading3>
            <ClientOnly>
              <ArticleHeadingList :headings="headings" />
            </ClientOnly>
          </AsideContentsBox>
          <AsideContentsBox v-if="imgList.length>0" class="mb-2">
            <AppHeading3 class="mb-2">
              画像
            </AppHeading3>
            <ClientOnly>
              <ArticleImgList :img-list="imgList" @click="imgClickHandler" />
            </ClientOnly>
          </AsideContentsBox>
        </teleport>
      </ClientOnly>
      <OverlayBox :is-show="!!selectedId" @click="imgClickHandler(undefined)">
        <ArticleImgDetail :image-list="imgList" :selected-id="selectedId" />
      </OverlayBox>
      <ArticleCard v-if="article" :article="article" />
    </Contentsection>
  </div>
</template>

<script setup lang="ts">
import { Article, Heading, ImageList } from '~~/types/articles'
import { PageTitleProp } from '~~/types/components'
import { cropSquare } from '~~/utils/imageAPIHelper'

definePageMeta({
  layout: 'preview'
})

const config = useRuntimeConfig()
const route = useRoute()
const isLoading = useLoadingStore()

const { data: article, error: err } = await useFetch<Article>(`/api/blogs/preview/${route.params.id}`, { query: { key: route.query?.key } })
const value = article?.value
if (!value || err?.value) {
  throw createError({ statusCode: 404, statusMessage: 'Sorry,The article is not found' })
}
// 選択カテゴリの取得
const categoryStore = useCategoryStore()
categoryStore.set([])

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

// metaタグ側で使う
const title = computed<string>(() => {
  return article?.value?.title + '|' + config.public.siteName
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
  isLoading.set(false)
  window.addEventListener('keyup', escapeKeyEventhandler)
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
