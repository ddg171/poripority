<template>
  <h1 id="site-name" class="flex items-center justify-center ml-2 text-xl italic font-medium text-white site-name md:text-3xl md:ml-4">
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
