<template>
  <div
    class="flex flex-col items-center justify-center w-full max-w-full text-white"
  >
    <ClientContentSection class="h-full ">
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
    </clientcontentsection>
  </div>
</template>

<script setup lang="ts">
import TopArticleCard from '~~/components/client/TopArticleCard.vue'
import { Article, Category, PageTitleProp } from '~~/types'

definePageMeta({
  layout: 'blog'
})

const setTitle = (pageTitle:PageTitleProp) => {
  const pageTitleStore = usePageTitleStore()
  pageTitleStore.set(pageTitle)
}

const getCategory = (id:string):Category|null => {
  const store = useCategoryStore()
  return store.get(id)
}

const clearArticles = () => {
  articles.value = []
}

const articles = ref<Article[]>([])

const route = useRoute()

const offset = computed<number>(() => {
  const o = Number(route.query?.offset)
  return !isNaN(o) ? o : 0
})
const limit = ref<number>(5)
const category = computed<string>(() => {
  const c = route.query?.category
  return typeof c === 'string' ? c : ''
})
const totalCount = ref<number>(0)
const currentCount = computed<number>(() => articles.value.length)

const get = async (limit: number, offset:number, category:string):Promise<number> => {
  const { data } = await useFetch('/api/blogs', { params: { limit, offset, category } })
  const totalCount = data.value?.totalCount || 0
  articles.value = data.value?.contents || []
  return totalCount
}

const loadArticles = async () => {
  clearArticles()
  totalCount.value = await get(limit.value, offset.value, category.value)
  const categoryName = getCategory(category.value)?.name
  const title = categoryName ? `${categoryName}の記事一覧` : '記事一覧'
  const t:PageTitleProp = {
    title,
    topImg: null,
    subtitles: [`全${totalCount.value}件中${offset.value + currentCount.value}件目までを表示中`]
  }
  setTitle(t)
  useHead({
    title: title + '|WIP'
  })
  window.scroll(0, 0)
}

watch(() => route.query.category, loadArticles)
watch(() => route.query.offset, loadArticles)

await loadArticles()

</script>
