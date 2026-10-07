<template>
  <V2CommonPageContainer>
    <V2CommonContentSectionFrame class="w-full h-full py-10">
      <V2CommonContentSectionHeaderFrame class="w-full">
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-1">
            <V2CommonAppHeadingH1 is-important>{{ title }}</V2CommonAppHeadingH1>
            <p class="text-xs sm:text-sm text-lightgray font-mono mt-1">{{ subtitle }}</p>
          </div>
        </div>
      </V2CommonContentSectionHeaderFrame>
      <V2CategoryList :categories="categories" :selected-category="category" />
      <V2ArticleListSkelton v-if="isLoading" :number-of-items="12" />
      <V2ArticleList v-else :articles="articles" :category="category" class="grid-cols-1">
        <div v-if="!isLoading && totalCount === 0" class="flex items-center justify-center w-full h-48">
          <p>
            記事が見つかりませんでした。
          </p>
        </div>
      </V2ArticleList>
      <V2ArticleBottomNavigation :left="leftNav" :center="centerNav" :right="rightNav" />
    </V2CommonContentSectionFrame>
  </V2CommonPageContainer>
</template>

<script setup lang="ts">
import type { Article } from '~~/types/articles'
import type { LinkParams } from '~~/types/components'

definePageMeta({
  layout: 'v2-blog'
})




const { state: categories, } = useCategoryStore()


const isLoading = ref<boolean>(false)
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
const articleAPI = useAsyncData('blogs', async () => {
  const articles = await $fetch('/api/blogs', {
    params: {
      limit: limit.value,
      offset: offset.value,
      category: category.value
    }
  })
  isLoading.value = false
  return articles
}
)
const articles = computed<Article[]>(() => {
  return articleAPI.data?.value?.contents || []
})
const totalCount = computed<number>(() => {
  return articleAPI?.data?.value?.totalCount || 0
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
  isLoading.value = false
})

</script>
