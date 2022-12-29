<template>
  <div
    class="w-full max-w-full flex flex-col justify-center items-center text-white"
  >
    <section class="w-full h-full p-4 md:p-6 bg-darkblue mb-2">
      <div class="w-full grid grid-cols-1 relative">
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

const { data } = await useFetch('/api/blogs', { params: { limit: 5, offset } })

const articles = reactive<Article[]>(data.value?.contents || [])
const currentCount = computed<number>(() => articles.length)
const totalCount = ref<number>(data.value?.totalCount || 0)

const pageTitle:PageTitleProp = {
  title: '記事一覧',
  topImg: null,
  subtitles: [`全${totalCount.value}件中${offset.value + currentCount.value}件目までを表示中`]
}

pageTitleStore.set(pageTitle)

useHead({
  title: '記事一覧|WIP'
})

</script>
