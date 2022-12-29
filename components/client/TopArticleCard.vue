<template>
  <article class="flex flex-col items-start max-w-xl mx-0 my-4 md:flex-row bg-darkblue md:my-2 md:mx-2">
    <div class="flex items-center justify-center w-full h-48 overflow-hidden md:w-48 md:h-48 shrink-0">
      <NuxtLink class="w-full" :to="to">
        <picture class="w-full">
          <source :srcset="cropEyecatch(props.article.eyecatch).url" type="image/webp">
          <img :src=" cropEyecatch(props.article.eyecatch,false).url " height="400" width="400" alt="">
        </picture>
      </NuxtLink>
    </div>
    <div class="flex flex-col justify-between h-full ml-2">
      <div>
        <h2 v-if="props.heading===2" class="mb-2 text-xl md:mb-4">
          <NuxtLink :to="to" class="hover:underline" tabindex="0">
            {{ props.article.title }}
          </NuxtLink>
        </h2>
        <h3 v-else class="mb-2 text-xl md:mb-4">
          <NuxtLink :to="to" class="hover:underline" tabindex="0">
            {{ props.article.title }}
          </NuxtLink>
        </h3>
        <p class="text-lg">
          {{ props.article.subtitle }}
        </p>
      </div>
      <div class="mt-1 md:mt-0">
        <p class="text-sm">
          {{ publishedAt }}
        </p>
        <p class="text-sm">
          Category:
          <NuxtLink v-if="props.article.category" :to="`/blog?category=${props.article.category.id}`" class="hover:underline focus:underline">
            {{ props.article.category.name }}
          </NuxtLink>
          <span v-else>n/a</span>
        </p>
        <blockquote>
          <p />
        </blockquote>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { parseISO, format, isValid } from 'date-fns'
import { cropSquare } from '../imageAPIHelpre'
import { publishedAtFormat } from '~~/utils/util'
import { Article } from '~~/types'

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
  return isValid(d) ? format(d, publishedAtFormat) : 'n/a'
})

const cropEyecatch = cropSquare
</script>
