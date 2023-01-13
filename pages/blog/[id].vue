<!-- eslint-disable vue/no-v-html -->
<template>
  <ClientContentSection>
    <article v-if="content" class="flex flex-col gap-4 text-white cms-content" v-html="content" />
    <hr class="my-4">
    <suspense>
      <template #default>
        <client-article-Navigation :published-at="publishedAt" :category="category" />
      </template>
      <template #fallback>
        <div class="flex items-center justify-center w-full text-lg text-white">
          Loading...
        </div>
      </template>
    </suspense>
  </ClientContentSection>
</template>

<script setup lang="ts">
import { Article, Eyecatch, PageTitleProp, PictureBoxProp } from '../../types'
import { convertContent } from '~~/components/contentParser'
import { cropSquare, resizeWithTargetWidth } from '~~/components/imageAPIHelpre'
import { makeDynamicMeta } from '~~/components/useHeadHelper'

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
      souce: [`${resizeWithTargetWidth(eyecatch, 640).url} 640w`, `${resizeWithTargetWidth(eyecatch, 1270).url} 1024w`],
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

onUnmounted(() => {
  pageTitleStore.init()
})
</script>

<style>
.cms-content{
  display: flex;
  flex-direction: column;

}

.cms-content>p,
.cms-content>img{
  margin-bottom: 1.5rem;
}

.cms-content h1{
  font-size: 1.5rem !important;
}

.cms-content h2{
  font-size: 1.5rem !important;
}

.cms-content h3{
  font-size: 1.25rem !important;
}

.cms-content img{
  height:500px;
}
</style>
