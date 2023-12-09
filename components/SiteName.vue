<template>
  <component :is="isTop?'h1':'div'" id="site-name" class="flex items-center justify-center ml-1 text-xl italic text-white site-name md:text-2xl md:ml-6">
    <a href="/">
      {{ siteName }}
    </a>
  </component>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

const isTop = computed<boolean>(() => {
  return route.path === '/'
})

const siteName = computed<string>(() => {
  return (config.public.siteName || 'The hut of Poripority').toUpperCase()
})

</script>
<style></style>
