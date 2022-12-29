<template>
  <div
    class="flex flex-col items-center justify-center w-full max-w-full text-white"
  >
    <section class="w-full h-full p-4 mb-2 md:p-6 bg-darkblue">
      <div class="relative grid w-full grid-cols-1">
        <TopArticleCard
          v-for="a,i in articles"
          :key="a.id"
          :article="a"
          :offset="i+offset"
          :category="category"
          :heading="2"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TopArticleCard from '~~/components/client/TopArticleCard.vue'
import { Article, PageTitleProp } from '~~/types'

definePageMeta({
  layout: 'blog'
})

const pageTitleStore = usePageTitleStore()

const route = useRoute()
const params = route.params
const offset = ref<number>(Number(params?.offset) || 0)
const category = ref<string>(params?.category?.toString() || '')
const currentCount = computed<number>(() => articles.value.length)
const articles = ref<Article[]>([])
const totalCount = ref<number>(0)
const get = async () => {
  const { data } = await useFetch('/api/blogs', { params: { limit: 5, offset, category } })
  totalCount.value = data.value?.totalCount || 0
  articles.value = data.value?.contents || []
  const pageTitle:PageTitleProp = {
    title: '記事一覧',
    topImg: null,
    subtitles: [`全${totalCount.value}件中${offset.value + currentCount.value}件目までを表示中`]
  }

  pageTitleStore.set(pageTitle)
}

watch(category, get)

await get()

useHead({
  title: '記事一覧|WIP'
})

</script>
