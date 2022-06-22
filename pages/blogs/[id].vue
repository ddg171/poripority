/* eslint-disable vue/no-v-html */

<template>
  <div>
    /blog
    <div v-html="content" />
    <div>
      <nuxt-link to="/blogs">
        back
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article } from '../../types'
import { convertContent } from '~~/components/server/contentParser'
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
