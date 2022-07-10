<template>
  <section class="px-2">
    <h2>Micro CMS test page</h2>
    <div>articles: {{ currentCount }}/{{ totalCount }}</div>
    <hr>
    <ul>
      <li v-for="a in articles" :key="a.id" class="my-2 bg-neutral-400">
        <nuxt-link :to="`/blog/${a.id}`">
          {{ a.title }}/{{ a.subtitle }}
        </nuxt-link>
      </li>
    </ul>
    <div>
      <button class="rounded-2x1 border-2 border-black m-2" :disabled="currentCount === totalCount " @click="more(currentCount)">
        more
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Article } from '../../types'

const { data } = await useFetch('/api/blogs', { params: { limit: 3 } })
const articles = reactive<Article[]>(data.value.contents)
const currentCount = computed<number>(() => articles.length)
const totalCount = ref<number>(data.value.totalCount)

const more = async (currentCount:number = 0) => {
  const result = await $fetch('/api/blogs', { params: { limit: 3, offset: currentCount } })
  result.contents.forEach((a:Article) => articles.push(a))
}

useHead({
  title: 'MicroCMS test page|WIP'
})

</script>
