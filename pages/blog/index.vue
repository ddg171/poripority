<template>
  <div
    class="w-full max-w-full flex flex-col justify-center items-center text-white"
  >
    <section class="w-full h-full p-4 md:p-6 bg-darkblue mb-2">
      <div class="w-full grid grid-cols-1 relative">
        <TopArticleCard v-for="a in articles" :key="a.id" :article="a" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TopArticleCard from '~~/components/client/TopArticleCard.vue'
import { Article } from '~~/types'
definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const params = route.params
const offset = params?.offset || 0

const { data } = await useFetch('/api/blogs', { params: { limit: 5, offset } })

const articles = reactive<Article[]>(data.value?.contents || [])
const currentCount = computed<number>(() => articles.length)
const totalCount = ref<number>(data.value?.totalCount || 0)

useHead({
  title: 'MicroCMS test page|WIP'
})

</script>
