<template>
  <div id="app" class="min-h-screen bg-gray">
    <NuxtLayout :categories="categories">
      <NuxtPage @click-img="imgClick" />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { LinkParams } from '~~/types'

const categories = ref<LinkParams[]>(
  [
    { name: 'Game', path: '/blog' },
    { name: 'camera', path: '/blog' },
    { name: 'others', path: '/blog' }]
)

const imgUrl = ref<string|null>(null)

const imgClick = (url:string|null) => {
  imgUrl.value = url || null
}

</script>

<style>
p{
    overflow-wrap: anywhere !important;
}
</style>
