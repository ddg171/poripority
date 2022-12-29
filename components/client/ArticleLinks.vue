<template>
  <div class="w-full flex justify-center items-center">
    <nuxt-link :to="next?`/blog/${next}`:'/blog'" :disabled="!next" class="p-2 mx-3 text-white bg-green hover:bg-green.75 text-lg">
      新しい記事へ
    </nuxt-link>
    <nuxt-link to="/blog" class="p-2 mx-3 text-white bg-green hover:bg-green.75 text-lg">
      記事一覧へ
    </nuxt-link>
    <nuxt-link :to="prev?`/blog/${prev}`:'/blog'" :disabled="!prev" class="p-2 mx-3 text-white bg-green hover:bg-green.75 text-lg">
      古い記事へ
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{publishedAt:string}>()
const next = ref<string|null>(null)
const prev = ref<string|null>(null)
const getNext = async (publishedAt:string) => {
  const result = await useFetch('/api/blogs/next', { params: { publishedAt } })

  const refs = result.data.value?.contents || []
  next.value = refs.length !== 0 ? refs[0].id : null
}

const getPrev = async (publishedAt:string) => {
  const result = await useFetch('/api/blogs/prev', { params: { publishedAt } })

  const refs = result.data.value?.contents || []
  prev.value = refs.length !== 0 ? refs[0].id : null
}

await Promise.allSettled([getNext(props.publishedAt), getPrev(props.publishedAt)])

</script>
