/* eslint-disable vue/no-v-html */
<template>
  <section class="p-4 h-full">
    <article class="flex flex-col gap-4" v-html="content" />
    <hr class="my-4">
    <div>
      <nuxt-link to="/blog" class="border-2">
        back
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Article } from '../../types'
import { convertContent } from '~~/components/contentParser'
const route = useRoute()

const { data } = await useFetch<Article>(`/api/blogs/${route.params.id}`)
const article = data
const content = convertContent(article.value.content)

useHead({
  title: article.value.title,
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: article.value.subtitle || 'none' },
    { name: 'title', content: article.value.title }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>

<style scoped>
article h2{
  font-size: 1.5rem !important;
}

article h3{
  font-size: 1.25rem !important;
}

</style>
