
<template>
  <BottomNavigation
    :left="left"
    :center="center"
    :right="right"
  />
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types/components'

interface Props {
  publishedAt:string|null,
  category:string|null
}

type Params ={
  publishedAt:string|null
  category?:string|null
}

const props = withDefaults(defineProps<Props>(), { publishedAt: null, category: null })
const next = ref<string|null>(null)
const prev = ref<string|null>(null)
const getNext = async (publishedAt:string|null, category:string|null = null) => {
  if (!publishedAt) {
    next.value = ''
    return
  }
  const params:Params = { publishedAt }
  if (category) {
    params.category = category
  }
  const result = await useFetch('/api/blogs/next', { params })
  const refs = result.data.value?.contents || []
  next.value = refs.length !== 0 ? refs[0].id : null
}

const getPrev = async (publishedAt:string|null, category:string|null = null) => {
  if (!publishedAt) {
    next.value = ''
    return
  }
  const params:Params = { publishedAt }
  if (category) {
    params.category = category
  }
  const result = await useFetch('/api/blogs/prev', { params })
  const refs = result.data.value?.contents || []
  prev.value = refs.length !== 0 ? refs[0].id : null
}

await Promise.allSettled([getNext(props.publishedAt, props.category), getPrev(props.publishedAt, props.category)])
const centerPath = props.category ? `/blog?category=${props.category}` : '/blog'

const center = ref<LinkParams>({ path: centerPath, name: '記事一覧へ' })
const left = computed<LinkParams|null>(() => {
  if (!next.value) { return null }
  const p = `/blog/${next.value}`
  return {
    name: '新しい記事へ',
    path: props.category ? p + `&categpry=${props.category}` : p
  }
})
const right = computed<LinkParams|null>(() => {
  if (!prev.value) { return null }
  const p = `/blog/${prev.value}`
  return {
    name: '古い記事へ',
    path: props.category ? p + `&categpry=${props.category}` : p
  }
})

</script>
