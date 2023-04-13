<template>
  <article class="flex flex-col items-start md:flex-row bg-darkblue">
    <div class="w-full overflow-hidden h-60 md:w-48 md:h-48 shrink-0 bg-darkblue">
      <CommonAppLink :to="to" class="flex items-center justify-start border border-transparent md:justify-center hover:border-white focus:border-white" :title="props.article.title ">
        <NuxtPicture
          class="w-full"
          provider="imgix"
          :src="props.article.eyecatch.url"
          legacy-format="jpeg"
          fit="crop"
          height="500"
          width="500"
          :img-attrs="{ class:'w-full', alt:`${props.article.title}のサムネイル画像`, decoding: 'async'}"
          :modifiers="{ fm: 'webp'}"
        />
      </CommonAppLink>
    </div>
    <div class="flex flex-col justify-between p-0 m-0 md:h-48 md:px-1 md:py-4 grow">
      <div class="w-full ">
        <div class="mb-0 text-3xl font-medium">
          <h2 v-if="props.heading===2">
            <CommonAppLink :to="to">
              {{ props.article.title }}
            </CommonAppLink>
          </h2>
          <h3 v-else>
            <CommonAppLink :to="to">
              {{ props.article.title }}
            </CommonAppLink>
          </h3>
        </div>
        <p class="text-lg ">
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
    heading?:2|3
}

const props = withDefaults(defineProps<Props>(), { offset: () => 0, category: undefined, heading: () => 3 })

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
