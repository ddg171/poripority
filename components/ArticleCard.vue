<template>
  <article class="flex flex-col items-start md:flex-row bg-darkblue ">
    <div class=" w-full h-60 overflow-hidden md:w-48 md:h-48 shrink-0 bg-darkblue">
      <CommonAppLink :to="to" class="flex items-center justify-start md:justify-center">
        <picture v-if="props.article.eyecatch">
          <source :srcset="cropEyecatch(props.article.eyecatch,true,500).url" type="image/webp">
          <img class="w-full" :src=" cropEyecatch(props.article.eyecatch,false,500).url " height="400" width="400" alt="">
        </picture>
      </CommonAppLink>
    </div>
    <div class="flex flex-col justify-between  md:h-48 p-0 m-0 md:px-2 py-2 grow">
      <div class="w-full mb-2 md:mb-0">
        <div class="mb-0 text-2xl font-medium md:mb-1">
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
        <p class="text-md ">
          {{ props.article.subtitle }}
        </p>
      </div>
      <ArticleInfoBox :category="props.article.category" :published-date="props.article.publishedAt" class="mt-1 md:mt-0" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { parseISO } from 'date-fns'
import { cropSquare } from '../utils/imageAPIHelpre'
import { articleDate } from '~~/utils/formatter'
import { Article } from '~~/types/articles'

interface Props{
    article:Article
    offset?:number
    category?:string
    heading?:2|3
}

const props = withDefaults(defineProps<Props>(), { offset: () => 0, category: undefined, heading: () => 3 })

const to = computed<string>(
  () => {
    const path = `/blog/${props.article.id}`
    const params:string[] = []
    if (props.offset) {
      params.push(`offset=${props.offset}`)
    }
    if (props.category) {
      params.push(`category=${props.category}`)
    }

    return params.length ? path + '?' + params.join('&') : path
  })

const publishedAt = computed(() => {
  const d = parseISO(props.article?.publishedAt)
  return articleDate(d)
})

const cropEyecatch = cropSquare
</script>
