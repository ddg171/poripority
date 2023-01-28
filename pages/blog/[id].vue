<!-- eslint-disable vue/no-v-html -->
<template>
  <ContentSection class="grid">
    <ArticleInfoBox :category="article?.category" :published-date="article?.publishedAt" class=" w-full flex flex-col items-end" />
    <ArticleBodyBlock :content="article?.content" @img-list="setImgList" @img-click="imgClickHandler" />
    <suspense>
      <template #default>
        <ArticleNavigation :published-at="publishedAt" :category="category" />
      </template>
      <template #fallback>
        <div class="flex items-center justify-center w-full text-lg text-white">
          Loading...
        </div>
      </template>
    </suspense>
    <teleport to="#side">
      <ClientOnly>
        <div v-if="imgList.length>0" class="w-full p-4 text-white  min-h-96 bg-darkblue md:p-6 ">
          <AppHeading3>画像</AppHeading3>
          <ArticleImgList :img-list="imgList" />
        </div>
      </ClientOnly>
    </teleport>
    <OverlayBox :is-show="!!selectedId" @click="imgClickHandler(undefined)">
      <ArticleImgDetail :image-list="imgList" :selected-id="selectedId" />
    </OverlayBox>
  </contentsection>
</template>

<script setup lang="ts">
import { Article, ImageList } from '~~/types/articles'
import { Eyecatch, PictureBoxProp, PageTitleProp } from '~~/types/components'
import { cropSquare, resizeWithTargetWidth } from '~~/utils/imageAPIHelpre'
import { makeDynamicMeta } from '~~/utils/useHeadHelper'

definePageMeta({
  layout: 'blog'
})

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

const publishedAt = computed<string|null>(() => { return value.publishedAt || null })

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

onBeforeUnmount(() => {
  pageTitleStore.init()
})
</script>
