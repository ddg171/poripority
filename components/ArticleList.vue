<template>
  <ul class="grid w-full gap-8 md:gap-2">
    <li v-for="(a,i) in props.articles" :key="a.id">
      <ArticleCard
        :article="a"
        :offset="i+offset"
        :category="category"
      />
    </li>
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { Article } from '~~/types/articles'

interface Props {
    articles:Article[]
    offset?:number
    category?:string
}

const props = withDefaults(defineProps<Props>(), { articles: () => [], offset: 0, category: '' })

</script>
