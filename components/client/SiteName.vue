<template>
  <h1 id="site-name" class="site-name text-xl md:text-3xl text-white italic flex items-center justify-center ml-2 md:ml-4">
    <a href="/">
      {{ siteName }}
    </a>
  </h1>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const siteName = computed<string>(() => {
  return config.public.siteName || 'The hut of Poripority'
})

</script>
<style></style>
