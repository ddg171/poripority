
<template>
  <ClientBottomNavigation
    :left="left"
    :center="center"
    :right="right"
  />
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types'

const props = defineProps<{publishedAt:string|null}>()
const next = ref<string|null>(null)
const prev = ref<string|null>(null)
const getNext = async (publishedAt:string|null) => {
  if (!publishedAt) {
    next.value = ''
    return
  }
  const result = await useFetch('/api/blogs/next', { params: { publishedAt } })

  const refs = result.data.value?.contents || []
  next.value = refs.length !== 0 ? refs[0].id : null
}

const getPrev = async (publishedAt:string|null) => {
  if (!publishedAt) {
    next.value = ''
    return
  }
  const result = await useFetch('/api/blogs/prev', { params: { publishedAt } })
  const refs = result.data.value?.contents || []
  prev.value = refs.length !== 0 ? refs[0].id : null
}

await Promise.allSettled([getNext(props.publishedAt), getPrev(props.publishedAt)])

const center = ref<LinkParams>({ path: '/blog', name: '記事一覧へ' })
const left = computed<LinkParams|null>(() => {
  if (!next.value) { return null }
  return {
    name: '新しい記事へ',
    path: `/blog/${next.value}`
  }
})
const right = computed<LinkParams|null>(() => {
  if (!prev.value) { return null }
  return {
    name: '古い記事へ',
    path: `/blog/${prev.value}`
  }
})

</script>
