<template>
  <div class="w-full">
    <ContentSection class="w-full h-full">
      <PlaceHolder v-if="pending" />
      <ArticleList v-else :articles="articles" :category="category" class="grid-cols-1">
        <div v-if="totalCount===0" class="flex items-center justify-center w-full h-48">
          <p>
            記事が見つかりませんでした。
          </p>
        </div>
      </ArticleList>
      <BottomNavigation :left="leftNav" :center="centerNav" :right="rightNav" />
    </Contentsection>
    <ContentSection>
      <AppHeading2 class="mb-2">
        広告欄
      </AppHeading2>
    </ContentSection>
  </div>
</template>

<script setup lang="ts">
import { FetchContext } from 'ohmyfetch'
import { Article } from '~~/types/articles'
import { LinkParams, PageTitleProp } from '~~/types/components'

definePageMeta({
  layout: 'blog'
})

const isLoading = useLoadingStore()
const config = useRuntimeConfig()

const limit = ref<number>(5)

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
const articleAPI = await useFetch('/api/blogs', {
  params: { limit: limit.value, offset: offset.value, category: category.value },
  onRequest (ctx: FetchContext): void {
    ctx.options.params = {
      limit: limit.value, offset: offset.value, category: category.value
    }
  }
})
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

// ページ上部
const { set: setTitle } = usePageTopStore()
const pageTitle = computed<PageTitleProp>(() => {
  const title = (category.value ? `${categoryName.value}の記事一覧` : '記事一覧')
  const subtitle = totalCount.value === 0 ? '全0件中0件を表示中' : `全${totalCount.value}件中${offset.value + 1}-${offset.value + articles.value.length}件を表示中`
  return {
    title,
    subtitles: [subtitle],
    topImg: {
      src: '/images/webp/blanktitle01w2000.webp',
      alt: '',
      title: ''
    }
  }
})
setTitle(pageTitle.value)
// 自動で更新
watch(pageTitle, (v) => {
  setTitle(v)
})

// metaタグ側で使う
const title = computed<string>(() => {
  return (category.value ? `${categoryName.value}の記事一覧` : '記事一覧') + '-' + config.public.siteName
})
const description = computed<string>(() => {
  return (`${categoryName.value ? categoryName.value + 'に関する' : '全'}記事一覧/`) + (totalCount.value === 0 ? '全0件中0件を表示' : `全${totalCount.value}件中${offset.value + 1}-${offset.value + articles.value.length}件目を表示`)
})
useSeoMeta({
  title: () => `${title.value}`,
  ogTitle: () => `${title.value}`,
  description: () => `${description.value}`,
  ogDescription: () => `${description.value}`,
  robots: 'all',
  ogType: 'article',
  ogSiteName: config.public.siteName,
  twitterCard: 'summary_large_image'
})

// ページネーション
const rightNav = computed<LinkParams|null>(() => {
  return prev(offset.value, articles.value.length, totalCount.value, limit.value, category.value)
})
const centerNav = ref<LinkParams>({ path: '/blog', name: '記事一覧へ' })
const leftNav = computed<LinkParams|null>(() => {
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
