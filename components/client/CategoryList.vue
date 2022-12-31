<template>
  <div>
    <ClientHeader3>カテゴリ</ClientHeader3>
    <ul>
      <li class="w-full p-2 text-lg hover:bg-green focus-within:bg-green md:my-1">
        <NuxtLink :to="`/blog`" class="block w-full h-full hover:underline focus:underline" tabindex="0">
          全て
        </NuxtLink>
      </li>
      <li v-for="c ,i in state" :key="i" class="w-full p-2 text-lg hover:bg-green focus-within:bg-green md:my-1">
        <NuxtLink :to="`/blog?category=${c.id}`" class="block w-full h-full hover:underline focus:underline" tabindex="0">
          {{ c.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const { state, set } = useCategoryStore()

const { data } = await useFetch('/api/category')

set(data.value?.contents || [])

</script>
