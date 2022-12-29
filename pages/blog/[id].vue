<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="w-full  h-full  min-h-screen p-4 md:p-6 bg-darkblue mb-2">
    <article class="cms-content flex flex-col gap-4 text-white" v-html="content" />
    <hr class="my-4">
    <div class="w-full flex justify-center items-center">
      <nuxt-link to="/blog" class="border-2 text-white hover:bg-green text-lg">
        新しい記事へ
      </nuxt-link>
      <nuxt-link to="/blog" class="border-2 text-white hover:bg-green text-lg">
        記事一覧へ
      </nuxt-link>
      <nuxt-link to="/blog" class="border-2 text-white hover:bg-green text-lg">
        古い記事へ
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Article, Eyecatch, PageTitleProp, PictureBoxProp } from '../../types'
import { convertContent } from '~~/components/contentParser'
import { resizeWithTargetWidth } from '~~/components/imageAPIHelpre'

definePageMeta({
  layout: 'blog'
})

const route = useRoute()

const { data } = await useFetch<Article>(`/api/blogs/${route.params.id}`)
const article = data
const value = article.value
if (!value) { throw new Error('article not found') }

const content = convertContent(value.content)

const pageTitleStore = usePageTitleStore()
useHead({
  title: value.title,
  meta: [
    { name: 'description', content: value.subtitle || 'none' },
    { name: 'title', content: value.title }
  ],
  bodyAttrs: {
    class: 'test'
  }
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
