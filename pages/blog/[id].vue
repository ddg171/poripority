<!-- eslint-disable vue/no-v-html -->
<template>
  <ClientContentSection>
    <article class="flex flex-col gap-4 text-white cms-content" v-html="content" />
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
if (!value) { throw new Error('article not found') }

const content = convertContent(value.content)
const publishedAt = ref<string>(value.publishedAt)

const pageTitleStore = usePageTitleStore()
useHead({
  title: value.title,
  meta: [
    { name: 'description', content: value.subtitle || 'none' },
    { name: 'title', content: value.title }
  ]
})
const eyecatch:Eyecatch|undefined = value.eyecatch
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
  title: value.title,
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
