<template>
  <article class="max-w-xl flex flex-col md:flex-row items-start bg-darkblue my-4 mx-0 md:my-2 md:mx-2">
    <div class="w-full h-48  md:w-48 md:h-48  shrink-0 flex justify-center items-center overflow-hidden">
      <picture class="w-full">
        <source :srcset="cropEyecatch(props.article.eyecatch).url" type="image/webp">
        <img :src=" cropEyecatch(props.article.eyecatch,false).url " height="400" width="400" alt="">
      </picture>
    </div>
    <div class="h-full ml-2 flex flex-col justify-between">
      <div>
        <h3 class="text-xl mb-2 md:mb-4">
          <NuxtLink :to="`/blog/${props.article.id}`" class="hover:underline" tabindex="0">
            {{ props.article.title }}
          </NuxtLink>
        </h3>
        <p class="text-lg">
          {{ props.article.subtitle }}
        </p>
      </div>
      <div class="mt-1 md:mt-0">
        <p class="text-sm">
          {{ props.article.createdAt }}
        </p>
        <p class="text-sm">
          {{ props.article.category.name }}
        </p>
        <blockquote>
          <p />
        </blockquote>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { cropSquare } from '../imageAPIHelpre'
import { Article } from '~~/types'

interface Props{
    article:Article
}

const props = defineProps<Props>()

const cropEyecatch = cropSquare
</script>
