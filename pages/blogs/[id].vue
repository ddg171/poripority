<template>
  <div>
    /blog

      <div v-html="article.content"></div>
    <div>
      <nuxt-link to="/blogs">back</nuxt-link>
    </div>

  </div>
</template>

<script setup lang="ts">
import {Article} from "../../types"
const route = useRoute()

 const {data}= await useFetch<Article>(`/api/blogs/${route.params.id}`);
 const article =data
useHead({
  title: article.value.title,
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: article.value.subtitle||"none" }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>