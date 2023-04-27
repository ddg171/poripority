<template>
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
    <ClientOnly>
      <teleport to="#top-box">
        <PageTop :title="pageTitle.title" :top-img="pageTitle.topImg" :subtitles="pageTitle.subtitles" />
      </teleport>
    </ClientOnly>
  </contentsection>
</template>

<script setup lang="ts">
import { FetchContext } from 'ohmyfetch'
import { Article } from '~~/types/articles'
import { LinkParams, PictureBoxProp, PageTitleProp } from '~~/types/components'
import { makeDynamicMeta } from '~~/utils/useHeadHelper'

definePageMeta({
  layout: 'blog'
})

const route = useRoute()

const isLoading = useLoadingStore()
const config = useRuntimeConfig()
const pageTitle = ref<PageTitleProp>({
  title: '記事一覧',
  subtitles: [],
  topImg: {
    webp: '/images/webp/blanktitle01w2000.webp',
    alt: '',
    title: ''

  }
})

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
const categoryName = ref<string|null>(null)

const rightNav = computed<LinkParams|null>(() => {
  return prev(offset.value, articles.value.length, totalCount.value, limit.value, category.value)
})
const centerNav = computed<LinkParams>(() => { return { path: '/blog', name: '記事一覧へ' } })
const leftNav = computed<LinkParams|null>(() => {
  return next(offset.value, articles.value.length, limit.value, category.value)
})

const setPageTitle = (category:string|null|undefined = null, hasSubtitles = true) => {
  const title = category ? `${category}の記事一覧` : '記事一覧'
  const topImg:PictureBoxProp = {
    webp: '/images/webp/blanktitle01w2000.webp',
    alt: '',
    title: ''
  }
  const subtitle = totalCount.value === 0 ? '全0件中0件を表示中' : `全${totalCount.value}件中${offset.value + 1}-${offset.value + articles.value.length}件を表示中`
  const t:PageTitleProp = {
    title,
    topImg,
    subtitles: hasSubtitles ? [subtitle] : []
  }
  pageTitle.value = t
}

const setTitle = (category:string|null) => {
  const title = (category ? `${category}の記事一覧` : '記事一覧') + '|' + config.public.siteName
  const subtitle = '記事一覧'
  const dynamicMeta = makeDynamicMeta(title, subtitle)
  useHead(dynamicMeta)
}

watch(() => route.query.category, async () => {
  await articleAPI?.refresh()
  const { data } = await useFetch(`/api/category/${category.value}`)
  categoryName.value = data.value?.name || null
  setPageTitle(categoryName.value)
  setPageTitle(categoryName.value, true)
  window.scroll(0, 0)
})
watch(() => route.query.offset, async () => {
  await articleAPI?.refresh()
  setPageTitle(categoryName.value, true)
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
// カテゴリの取得
const { data } = await useFetch('/api/category')

const categoryStore = useCategoryStore()
categoryStore.set(data.value?.contents || [])
categoryName.value = data.value?.contents?.find(c => c.id === category.value)?.name || null
setTitle(categoryName.value)

onMounted(() => {
  setPageTitle(categoryName.value, true)
  isLoading.set(false)
})

</script>
