<template>
  <div
    class="w-full flex flex-col justify-center items-center text-white"
  >
    <div class="bg-darkblue w-full max-w-screen-xl  py-8 overflow-hidden flex justify-start items-center">
      <Header1>記事一覧</Header1>
    </div>
    <section class="w-full max-w-screen-xl  p-4 md:p-6 bg-darkblue mb-2">
      <div class="w-full grid grid-cols-1 relative">
        <TopArticleCard v-for="a in articles" :key="a.id" :article="a" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Header1 from '~~/components/client/Header1.vue'
import TopArticleCard from '~~/components/client/TopArticleCard.vue'
import { Article } from '~~/types'
definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const params = route.params
const offset = params?.offset || 0

const { data } = await useFetch('/api/blogs', { params: { limit: 3, offset } })

const articles = reactive<Article[]>(data.value?.contents || [])
const currentCount = computed<number>(() => articles.length)
const totalCount = ref<number>(data.value?.totalCount || 0)

useHead({
  title: 'MicroCMS test page|WIP'
})

</script>
