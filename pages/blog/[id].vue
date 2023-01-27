<!-- eslint-disable vue/no-v-html -->
<template>
  <ContentSection class="grid">
    <ArticleInfoBox :category="article?.category" :published-date="article?.publishedAt" class=" w-full flex flex-col items-end" />
    <article v-if="content" class="flex flex-col gap-4 text-white cms-content cms-content-width mb-6" v-html="content" />
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
    <div>
      <ul>
        <li v-for="i in imgList" :key="i.id">
          {{ i.id }}
        </li>
      </ul>
    </div>
  </ContentSection>
</template>

<script setup lang="ts">
import { Article, ImageList } from '~~/types/articles'
import { Eyecatch, PictureBoxProp, PageTitleProp } from '~~/types/components'
import { convertContent, convertStrToDocument, getImgList } from '~~/utils/contentParser'
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
    title: value?.title || '記事が見つかりませんでした',
    topImg,
    subtitles: article.value?.subtitle ? [article.value.subtitle] : []
  }
  pageTitleStore.set(pageTitle)
})

const content = computed(() => {
  return convertContent(value.content) || null
})

const imgList = computed<ImageList>(() => {
  if (!content.value) { return [] }
  const doc = convertStrToDocument(content.value)
  return getImgList(doc)
})

onBeforeUnmount(() => {
  pageTitleStore.init()
})
</script>

<style>

.cms-content{
  display: flex;
  flex-direction: column;

}

.cms-content .img-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cms-content img{
  max-width: 500px;
  margin: 1rem 0;
}

@media screen and (max-width:532px) {
  .cms-content img{
  max-width: 100%;
}
}

.cms-content ul{
  margin-left: 1rem;
}
.cms-content li{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.cms-content a:hover,
.cms-content a:focus{
  text-decoration: underline;
  font-weight: 500;
}
.cms-content li::before{
  display: block;
  background-color: white;
  width: 0.5em;
  height: 0.5em;
  margin-right: 0.25em;
  margin-bottom: 0.125em;
  content: "";
}

.cms-content h1,
.cms-content h2,
.cms-content h3{
  padding-left: 0.5rem;
  border-left-style: solid;
  border-color: white;
  border-left-width: 4px;
}

.cms-content h1{
  font-size: 2.5rem !important;
}

.cms-content h2{
  font-size: 2rem !important;
}

.cms-content h3{
  font-size: 1.5rem !important;
}
@media screen and (max-width:767px) {
 .cms-content h1{
  font-size: 2rem !important;
}

.cms-content h2{
  font-size: 1.5rem !important;
}

.cms-content h3{
  font-size: 1.25rem !important;
}
}

</style>
