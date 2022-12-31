<!-- eslint-disable vue/no-v-html -->
<template>
  <ClientContentSection>
    <article v-if="content" class="flex flex-col gap-4 text-white cms-content" v-html="content" />
    <article v-else class="flex flex-col gap-4 text-white cms-content">
      記事が見つかりませんでした。
    </article>>
    <hr class="my-4">
    <suspense>
      <template #default>
        <client-article-Navigation :published-at="publishedAt" />
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
import { resizeWithTargetWidth } from '~~/components/imageAPIHelpre'

definePageMeta({
  layout: 'blog'
})

const route = useRoute()

const articleData = await useFetch<Article>(`/api/blogs/${route.params.id}`)
const article = articleData.data
const value = article.value
if (!value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const content = convertContent(value.content) || null
const publishedAt = ref<string|null>(value.publishedAt || null)

const pageTitleStore = usePageTitleStore()
useHead({
  title: value?.title || '記事が見つかりませんでした。',
  meta: [
    { name: 'description', content: value?.subtitle || '' },
    { name: 'title', content: value?.title || '記事が見つかりませんでした。' }
  ]
})
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

const pageTitle:PageTitleProp = {
  title: value?.title || '記事が見つかりませんでした',
  topImg,
  subtitles: article.value?.subtitle ? [article.value.subtitle] : []
}

pageTitleStore.set(pageTitle)

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
