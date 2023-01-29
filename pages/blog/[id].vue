<template>
  <ContentSection class="grid">
    <ArticleInfoBox :category="article?.category" :published-date="article?.publishedAt" class=" w-full flex flex-col items-end" />
    <ArticleBodyBlock :content="article?.content" @img-list="setImgList" @img-click="imgClickHandler" @heading-list="headingListHandler" />
    <ClientOnly>
      <ArticleNavigation :published-at="article?.publishedAt" :category="category" />
    </ClientOnly>
    <ClientOnly>
      <teleport to="#side-contents">
        <AsideContentsBox v-if="headings.length>0">
          <AppHeading3>目次</AppHeading3>
          <ClientOnly>
            <ArticleHeadingList :headings="headings" />
          </ClientOnly>
        </AsideContentsBox>
        <AsideContentsBox v-if="imgList.length>0">
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
  </contentsection>
</template>

<script setup lang="ts">
import { Article, Heading, ImageList } from '~~/types/articles'
import { Eyecatch, PictureBoxProp, PageTitleProp } from '~~/types/components'
import { cropSquare, resizeWithTargetWidth } from '~~/utils/imageAPIHelpre'
import { makeDynamicMeta } from '~~/utils/useHeadHelper'

definePageMeta({
  layout: 'blog'
})

// カテゴリの取得
const { data: categoryList } = await useFetch('/api/category')
const categoryStore = useCategoryStore()
categoryStore.set(categoryList.value?.contents || [])

const route = useRoute()
const pageTitleStore = usePageTitleStore()

const category = ref<string|null>(route.query?.category?.toString() || null)
const { data: article, error: err } = await useFetch<Article>(`/api/blogs/${route.params.id}`)
const value = article.value
if (!value || err?.value) {
  throw createError({ statusCode: 404, statusMessage: 'Sorry,The article is not found' })
}
const selectedId = ref<string|undefined>(undefined)

const config = useRuntimeConfig()
const headTitle = value.title + '|' + config.public.siteName
const description = value.subtitle || ''
const image:string|undefined = value.eyecatch ? cropSquare(value.eyecatch).url : undefined

const dynamicMeta = makeDynamicMeta(headTitle, description, 'all', 'article', image)
useHead(dynamicMeta)

const eyecatch:Eyecatch|undefined = value?.eyecatch || undefined
const topImg:PictureBoxProp|null = eyecatch
  ? {
      webp: resizeWithTargetWidth(eyecatch, 2000).url,
      source: [`${resizeWithTargetWidth(eyecatch, 640).url} 640w`, `${resizeWithTargetWidth(eyecatch, 1270).url} 1024w`],
      jpg: resizeWithTargetWidth(eyecatch, 640, false).url,
      alt: '',
      title: '',
      fromCMS: true
    }
  : null
onMounted(() => {
  const pageTitle:PageTitleProp = {
    title: article.value?.title || '記事が見つかりませんでした',
    topImg,
    subtitles: article.value?.subtitle ? [article.value.subtitle] : []
  }
  pageTitleStore.set(pageTitle)
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

onBeforeUnmount(() => {
  pageTitleStore.init()
})
</script>
