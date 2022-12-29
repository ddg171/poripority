<template>
  <div>
    <ClientHeader3>カテゴリ</ClientHeader3>
    <ul>
      <li v-for="c ,i in categories" :key="i" class="w-full text-lg hover:bg-green focus-within:bg-green p-2 md:my-1">
        <NuxtLink :to="`/blog?category=${c.id}`" class="w-full h-full hover:underline focus:underline" tabindex="0">
          {{ c.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">import { Category } from '~~/types'

const { data } = await useFetch('/api/category')

const contents = data.value?.contents || []
const categories = reactive<Array<Category>>(contents)
</script>
