<template>
  <div
    class="page-blog flex flex-col items-center justify-center w-full max-w-full text-white"
  >
    <ContentSection class="h-full ">
      <div class="relative grid w-full grid-cols-1 gap-4">
        <div v-if="pending" class="flex items-center justify-center w-full h-48">
          <p>
            Loading...
          </p>
        </div>
        <template v-else>
          <ArticleCard
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
        </template>
      </div>
      <BottomNavigation :left="leftNav" :center="centerNav" :right="rightNav" />
    </contentsection>
  </div>
</template>

<script setup lang="ts">
import { FetchContext } from 'ohmyfetch'
import { ContentSection, ArticleCard, BottomNavigation } from '~~/.nuxt/components'
import { Article } from '~~/types/articles'
import { LinkParams, PictureBoxProp, PageTitleProp } from '~~/types/components'
import { makeDynamicMeta } from '~~/utils/useHeadHelper'

definePageMeta({
  layout: 'blog'
})

const route = useRoute()
const pageTitleStore = usePageTitleStore()
const config = useRuntimeConfig()

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
    source: ['/images/webp/blanktitle01w640.webp 640w', '/images/webp/blanktitle01w1270.webp 1024w'],
    jpg: '/images/blanktitle01w640.jpg',
    alt: '',
    title: ''
  }

  const subtitle = totalCount.value === 0 ? '全0件中0件を表示中' : `全${totalCount.value}件中${offset.value + 1}-${offset.value + articles.value.length}件を表示中`
  const t:PageTitleProp = {
    title,
    topImg,
    subtitles: hasSubtitles ? [subtitle] : []
  }
  pageTitleStore.set(t)
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
if (category) {
  const { data: c } = await useFetch(`/api/category/${category.value}`)
  categoryName.value = c?.value?.name || null
}
setTitle(categoryName.value)

onMounted(() => {
  setPageTitle(categoryName.value, true)
})

onBeforeUnmount(() => {
  pageTitleStore.init()
})

</script>
