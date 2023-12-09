<template>
  <article class="flex flex-col items-start md:flex-row bg-darkblue">
    <div class="w-full overflow-hidden h-36 md:w-36 md:h-36 shrink-0 bg-darkblue">
      <CommonAppLink :to="to" class="w-full h-full flex items-center justify-start md:justify-center bg-green/50" :title="props.article.title ">
        <NuxtPicture
          v-if="props.article.eyecatch?.url"
          class="article-thumb w-full opacity-100 transition-opacity duration-500"
          provider="imgix"
          :src="props.article.eyecatch?.url||``"
          format="webp"
          legacy-format="jpeg"
          fit="crop"
          height="200"
          width="200"
          :img-attrs="{ class:'w-full bg-lightgreen/25', alt:`${props.article.title}のサムネイル画像`,height:200,width:200, decoding: 'async',loading: 'lazy'}"
          :modifiers="{q: 50}"
          :data-loaded="isPictureLoaded"
          @load="isPictureLoaded = true"
        />
        <div v-else class="w-full h-full flex justify-center items-center text-sm text-white underline">
          {{ msg }}
        </div>
      </CommonAppLink>
    </div>
    <div class="flex flex-col justify-between py-1 m-0 md:h-36 md:px-2 grow">
      <div class="w-full ">
        <div class="mb-0 text-xl font-semibold">
          <h3>
            <CommonAppLink :to="to">
              {{ props.article.title }}
            </CommonAppLink>
          </h3>
        </div>
        <p class="text-md ">
          {{ props.article.subtitle }}
        </p>
      </div>

      <ArticleInfoBox :category="props.article.category" :published-date="props.article.publishedAt" class="" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { Article } from '~~/types/articles'
interface Props{
    article:Article
    category?:string
}

const props = withDefaults(defineProps<Props>(), { offset: () => 0, category: undefined })

const isPictureLoaded = ref<boolean>(false)

const msg = computed<string>(() => {
  return props.article?.eyecatch?.url ? 'loading...' : 'no image'
})

onMounted(() => {
  setTimeout(() => {
    isPictureLoaded.value = true
  }, 5000)
})

const to = computed<string>(
  () => {
    const path = `/blog/${props.article.id}`
    const params:string[] = []
    if (props.category) {
      params.push(`category=${props.category}`)
    }

    return params.length ? path + '?' + params.join('&') : path
  })

</script>

<style scoped lang="scss">
.article-thumb[data-loaded="false"]{
  @apply opacity-0
}
</style>
