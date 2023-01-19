<template>
  <h1 id="site-name" class="flex items-center justify-center ml-1  italic   text-white site-name text-xl md:text-2xl md:ml-6">
    <a href="/">
      {{ siteName }}
    </a>
  </h1>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const siteName = computed<string>(() => {
  return (config.public.siteName || 'The hut of Poripority').toUpperCase()
})

</script>
<style></style>
