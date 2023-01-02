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
        <div v-if="articles.length ===0" class="flex items-center justify-center w-full h-48">
          <h2>
            {{ isLoading?"Loading...":"記事が見つかりませんでした。" }}
          </h2>
        </div>
      </div>
      <ClientBottomNavigation :left="leftNav" :center="centerNav" :right="rightNav" />
    </clientcontentsection>
  </div>
</template>

<script setup lang="ts">
import TopArticleCard from '~~/components/client/TopArticleCard.vue'
import { Article, Category, LinkParams, PageTitleProp } from '~~/types'

definePageMeta({
  layout: 'blog'
})
const isLoading = ref<boolean>(true)
const pageTitleStore = usePageTitleStore()
const categoryStore = useCategoryStore()

const getCategory = (id:string):Category|null => {
  return categoryStore.get(id)
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

const leftNav = computed<LinkParams|null>(() => {
  const currentPosition = offset.value + articles.value.length
  if (offset.value <= 0) { return null }
  // const rem = currentPosition % limit.value === 0 ? limit.value : currentPosition % limit.value
  const p = currentPosition <= limit.value ? '' : `/blog?offset=${offset.value - limit.value}`
  return { path: p, name: `前の${limit.value}件` }
})
const centerNav = computed<LinkParams>(() => { return { path: '/blog', name: '記事一覧へ' } })
const rightNav = computed<LinkParams|null>(() => {
  const currentPosition = offset.value + articles.value.length
  if (totalCount.value - currentPosition <= 0) { return null }
  let p = currentPosition >= totalCount.value ? '' : `/blog?offset=${currentPosition}`
  if (category.value) {
    p = p + `&category=${category.value}`
  }
  return { path: p, name: `次の${limit.value}件` }
})

const get = async (limit: number, offset:number, category:string):Promise<number> => {
  const { data } = await useFetch('/api/blogs', { params: { limit, offset, category } })
  const totalCount = data.value?.totalCount || 0
  articles.value = data.value?.contents || []
  return totalCount
}

const loadArticles = async () => {
  isLoading.value = true
  clearArticles()
  totalCount.value = await get(limit.value, offset.value, category.value)
  const categoryName = getCategory(category.value)?.name
  const title = categoryName ? `${categoryName}の記事一覧` : '記事一覧'
  const t:PageTitleProp = {
    title,
    topImg: null,
    subtitles: [`全${totalCount.value}件中${offset.value + 1}-${offset.value + articles.value.length}件を表示中`]
  }
  pageTitleStore.set(t)
  useHead({
    title: title + '|WIP'
  })
  window.scroll(0, 0)
  isLoading.value = false
}

watch(() => route.query.category, loadArticles)
watch(() => route.query.offset, loadArticles)

const setTilte = () => {
  const categoryName = getCategory(category.value)?.name
  const title = categoryName ? `${categoryName}の記事一覧` : '記事一覧'
  const subtitle = totalCount.value === 0 ? '全0件中0件を表示中' : `全${totalCount.value}件中${offset.value + 1}-${offset.value + articles.value.length}件を表示中`
  const t:PageTitleProp = {
    title,
    topImg: null,
    subtitles: [subtitle]
  }
  pageTitleStore.set(t)
  useHead({
    title: title + '|WIP'
  })
}

const { data } = await useFetch('/api/blogs', { params: { limit: limit.value, offset: offset.value, category: category.value } })
totalCount.value = data.value?.totalCount || 0
articles.value = data.value?.contents || []
onMounted(setTilte)

isLoading.value = false

onBeforeUnmount(() => {
  return pageTitleStore.init()
})

</script>
