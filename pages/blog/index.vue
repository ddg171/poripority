<template>
  <div
    class="page-blog flex flex-col items-center justify-center w-full max-w-full text-white"
  >
    <ClientContentSection class="h-full ">
      <div class="relative grid w-full grid-cols-1">
        <div v-if="pending" class="flex items-center justify-center w-full h-48">
          <h2>
            Loading...
          </h2>
        </div>
        <div v-else>
          <TopArticleCard
            v-for="a,i in articles"
            :key="a.id"
            :article="a"
            :offset="i+offset"
            :category="category"
            :heading="2"
          />
          <div v-if="totalCount===0" class="flex items-center justify-center w-full h-48">
            <p>
              記事が見つかりませんでした。
            </p>
          </div>
        </div>
      </div>
      <ClientBottomNavigation :left="leftNav" :center="centerNav" :right="rightNav" />
    </clientcontentsection>
  </div>
</template>

<script setup lang="ts">
import { FetchContext } from 'ohmyfetch'
import TopArticleCard from '~~/components/client/TopArticleCard.vue'
import { Article, LinkParams, PageTitleProp } from '~~/types'

definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const pageTitleStore = usePageTitleStore()

const limit = ref<number>(5)
const articles = computed<Article[]>(() => {
  return articleAPI.data?.value?.contents || []
})
const totalCount = computed<number>(() => {
  return articleAPI?.data?.value?.totalCount || 0
})
const pending = computed<boolean>(() => {
  return !!articleAPI?.pending.value
})

const offset = computed<number>(() => {
  const o = Number(route.query?.offset)
  return !isNaN(o) ? o : 0
})
const category = computed<string>(() => {
  const c = route.query?.category
  return typeof c === 'string' ? c : ''
})

const rightNav = computed<LinkParams|null>(() => {
  return prev(offset.value, articles.value.length, totalCount.value, limit.value, category.value)
})
const centerNav = computed<LinkParams>(() => { return { path: '/blog', name: '記事一覧へ' } })
const leftNav = computed<LinkParams|null>(() => {
  return next(offset.value, articles.value.length, limit.value, category.value)
})

const setTilte = (category:string|null|undefined = null) => {
  const title = category ? `${category}の記事一覧` : '記事一覧'
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

watch(() => route.query.category, async () => {
  await articleAPI?.refresh()
  const { data } = await useFetch(`/api/category/${category.value}`)
  const categoryName:string|null = data.value?.name || null
  setTilte(categoryName)
  window.scroll(0, 0)
})
watch(() => route.query.offset, async () => {
  await articleAPI?.refresh()
  window.scroll(0, 0)
})

// 記事の取得
const articleAPI = await useFetch('/api/blogs', {
  params: { limit: limit.value, offset: offset.value, category: category.value },
  onRequest (ctx: FetchContext): void {
    ctx.options.params = {
      limit: limit.value, offset: offset.value, category: category.value
    }
  }
})

// カテゴリがある場合はカテゴリの取得
const categoryName:string|null|undefined = category.value ? useFetch(`/api/category/${category.value}`)?.data?.value?.name : null || null

setTilte(categoryName)

onBeforeUnmount(() => {
  return pageTitleStore.init()
})

</script>
