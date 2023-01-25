<!-- eslint-disable vue/no-v-html -->
<template>
  <ContentSection class="grid gap-6">
    <ArticleInfoBox :category="article?.category" :published-date="article?.publishedAt" class=" w-full flex flex-col items-end" />
    <article v-if="content" class="flex flex-col gap-4 text-white cms-content cms-content-width" v-html="content" />
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
  </ContentSection>
</template>

<script setup lang="ts">
import { Article } from '~~/types/articles'
import { Eyecatch, PictureBoxProp, PageTitleProp } from '~~/types/components'
import { convertContent } from '~~/utils/contentParser'
import { cropSquare, resizeWithTargetWidth } from '~~/utils/imageAPIHelpre'
import { makeDynamicMeta } from '~~/utils/useHeadHelper'

definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const pageTitleStore = usePageTitleStore()

const category = ref<string|null>(route.query?.category?.toString() || null)
const { data: article } = await useFetch<Article>(`/api/blogs/${route.params.id}`)
const value = article.value
if (!value) {
  throw createError({ statusCode: 404, statusMessage: '記事が見つかりませんでした。' })
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
      title: ''
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

onBeforeUnmount(() => {
  pageTitleStore.init()
})
</script>

<style>

.cms-content{
  display: flex;
  flex-direction: column;

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
  margin-bottom: 0.25em;
  content: "";
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

.cms-content img{
  margin: 1rem 0;
  width: fit-content;
  height: fit-content;
}
</style>
