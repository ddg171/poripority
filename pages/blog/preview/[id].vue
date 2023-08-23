<template>
  <ContentSection class="grid">
    <div class="flex justify-between mb-2">
      <ShareBtnBox :title="headTitle" />
      <ArticleInfoBox :category="article?.category" :published-date="article?.publishedAt" class="" />
    </div>
    <ArticleBodyBlock :content="article?.content" @img-list="setImgList" @img-click="imgClickHandler" @heading-list="headingListHandler" />
    <ArticleNavigation :published-at="article?.publishedAt" :category="category" />
    <ClientOnly>
      <teleport to="#top-box">
        <PageTop :title="pageTitle.title" :top-img="pageTitle.topImg" :subtitles="pageTitle.subtitles" />
      </teleport>
      <teleport to="#side-contents">
        <AsideContentsBox v-if="headings.length>0" class="mb-2">
          <AppHeading3>目次</AppHeading3>
          <ClientOnly>
            <ArticleHeadingList :headings="headings" />
          </ClientOnly>
        </AsideContentsBox>
        <AsideContentsBox v-if="imgList.length>0" class="mb-2">
          <AppHeading3>画像</AppHeading3>
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
</template>

<script setup lang="ts">
import { setPageMetaData } from '~~/composables/helper/head'
import { Article, Heading, ImageList } from '~~/types/articles'
import { Eyecatch, PictureBoxProp, PageTitleProp } from '~~/types/components'
import { cropSquare, resizeWithTargetWidth } from '~~/utils/imageAPIHelper'

definePageMeta({
  layout: 'preview'
})
// カテゴリの取得

const route = useRoute()
const isLoading = useLoadingStore()
const pageTitle = ref<PageTitleProp>({
  title: '記事',
  subtitles: [],
  topImg: {
    webp: '/images/webp/blanktitle01w2000.webp',
    alt: '',
    title: ''

  }
})

const category = ref<string|null>(route.query?.category?.toString() || null)
const { data: article, error: err } = await useFetch<Article>(`/api/blogs/preview/${route.params.id}`, { query: { key: route.query?.key } })
const value = article?.value
if (!value || err?.value) {
  throw createError({ statusCode: 404, statusMessage: 'Sorry,The article is not found' })
}
const selectedId = ref<string|undefined>(undefined)

const config = useRuntimeConfig()
const headTitle = ref<string>(value.title + '|' + config.public.siteName)
const description = value.subtitle || ''
const image:string|undefined = value.eyecatch ? cropSquare(value.eyecatch).url : undefined
setPageMetaData(headTitle.value, description, 'all', 'article', image)

const eyecatch:Eyecatch|undefined = value?.eyecatch || undefined
const topImg:PictureBoxProp|null = eyecatch
  ? {
      webp: eyecatch.url,
      source: [`${resizeWithTargetWidth(eyecatch, 640).url} 640w`, `${resizeWithTargetWidth(eyecatch, 1270).url} 1024w`],
      jpg: resizeWithTargetWidth(eyecatch, 640, false).url,
      alt: '',
      title: '',
      fromCMS: true
    }
  : null
onMounted(() => {
  const t:PageTitleProp = {
    title: article.value?.title || '記事が見つかりませんでした',
    topImg,
    subtitles: article.value?.subtitle ? [article.value.subtitle] : []
  }
  pageTitle.value = t
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

onMounted(() => {
  isLoading.set(false)
})

</script>
