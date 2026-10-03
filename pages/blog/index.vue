<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-index gap-2">
    <CommonContentWidthBox class="flex flex-col items-center ">
      <V2CommonContentSectionFrame class="w-full h-full">
        <V2CommonContentSectionHeaderFrame class="w-full">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <h1 class="text-3xl font-semibold text-white">{{ title }}</h1>
              <p class="text-xs sm:text-sm text-lightgray font-mono mt-1">{{ subtitle }}</p>
            </div>
          </div>
        </V2CommonContentSectionHeaderFrame>
        <ul class="flex flex-wrap gap-2">
          <li>
            <CommonAppLink :to="`/blog`">
              全て
            </CommonAppLink>
          </li>
          <li v-for="c in categories" :key="c.id">
            <CommonAppLink :to="`/blog?category=${c.id}`">
              {{ c.name }}
            </CommonAppLink>
          </li>
        </ul>
        <V2ArticleListSkeleton v-if="pending" />
        <V2ArticleList v-else :articles="articles" :category="category" class="grid-cols-1">
          <div v-if="totalCount === 0" class="flex items-center justify-center w-full h-48">
            <p>
              記事が見つかりませんでした。
            </p>
          </div>
        </V2ArticleList>
        <BottomNavigation :left="leftNav" :center="centerNav" :right="rightNav" />
      </V2CommonContentSectionFrame>
    </CommonContentWidthBox>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~~/types/articles'
import type { LinkParams } from '~~/types/components'

definePageMeta({
  layout: 'v2-blog'
})




const { state: categories, } = useCategoryStore()


const isLoading = useLoadingStore()
const config = useRuntimeConfig()

const limit = ref<number>(10)

// 記事取得処理用のクエリパラメータ
const route = useRoute()
const offset = computed<number>(() => {
  const o = Number(route.query?.offset)
  return !isNaN(o) ? o : 0
})
const category = computed<string>(() => {
  const c = route.query?.category
  return typeof c === 'string' ? c : ''
})
// 記事の取得
const articleAPI = useAsyncData('blogs', () => {
  return $fetch('/api/blogs', {
    params: {
      limit: limit.value,
      offset: offset.value,
      category: category.value
    }
  })
}
)
const articles = computed<Article[]>(() => {
  return articleAPI.data?.value?.contents || []
})
const totalCount = computed<number>(() => {
  return articleAPI?.data?.value?.totalCount || 0
})
const pending = computed<boolean>(() => {
  return !!articleAPI?.pending.value
})

// 選択カテゴリの取得
const categoryStore = useCategoryStore()
categoryStore.select(category.value || null)

// カテゴリ名
const categoryName = computed<string>(() => {
  if (!category.value) { return '' }
  if (!categoryStore.state.value.length) { return '' }
  return categoryStore.state.value?.find(c => c.id === category.value)?.name || ''
})

const subtitle = computed(() => {
  return totalCount.value === 0 ? '全0件中0件を表示中' : `全${totalCount.value}件中${offset.value + 1}-${offset.value + articles.value.length}件を表示中`
})


// metaタグ側で使う
const title = computed<string>(() => {
  return (category.value ? `${categoryName.value}の記事一覧` : '記事一覧')
})
const description = computed<string>(() => {
  return (`${categoryName.value ? categoryName.value + 'に関する' : '全'}記事一覧/`) + (totalCount.value === 0 ? '全0件中0件を表示' : `全${totalCount.value}件中${offset.value + 1}-${offset.value + articles.value.length}件目を表示`)
})
useSeoMeta({
  title: () => `${title.value}` + '-' + config.public.siteName,
  ogTitle: () => `${title.value}` + '-' + config.public.siteName,
  description: () => `${description.value}`,
  ogDescription: () => `${description.value}`,
  robots: 'all',
  ogType: 'article',
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image'
})

// ページネーション
const rightNav = computed<LinkParams | null>(() => {
  return prev(offset.value, articles.value.length, totalCount.value, limit.value, category.value)
})
const centerNav = ref<LinkParams>({ path: '/blog', name: '記事一覧へ' })
const leftNav = computed<LinkParams | null>(() => {
  return next(offset.value, articles.value.length, limit.value, category.value)
})

watch(() => route.query.category, async () => {
  await articleAPI?.refresh()
  categoryStore.select(category.value)
  window.scroll(0, 0)
})
watch(() => route.query.offset, async () => {
  await articleAPI?.refresh()

  window.scroll(0, 0)
})

onMounted(() => {
  isLoading.set(false)
})

</script>
