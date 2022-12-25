<template>
  <div class="w-full grid grid-cols-1 text-white">
    <h1
      class="border-solid border-white border-l-4 text-xl pl-4"
    >
      Latest Topics
    </h1>
    <div>articles: {{ currentCount }}/{{ totalCount }}</div>

    <article v-for="a in articles" :key="a.id" class="w-full bg-darkblue my-2 p-4">
      <h3>
        <nuxt-link :to="`/blog/${a.id}`">
          {{ a.title }}/{{ a.subtitle }}
        </nuxt-link>
      </h3>
    </article>
    <div>
      <button class="rounded-2x1 border-2 border-black m-2" :disabled="currentCount === totalCount " @click="more(currentCount)">
        more
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article } from '~~/types'

const { data } = await useFetch('/api/blogs', { params: { limit: 3 } })
const articles = reactive<Article[]>(data.value?.contents || [])
const currentCount = computed<number>(() => articles.length)
const totalCount = ref<number>(data.value?.totalCount || 0)

const more = async (currentCount:number = 0) => {
  const result = await $fetch('/api/blogs', { params: { limit: 3, offset: currentCount } })
  result.contents.forEach((a:Article) => articles.push(a))
}

useHead({
  title: 'MicroCMS test page|WIP'
})

</script>
