<template>
  <component :is="isTop?'h1':'div'" id="site-name" class=" flex items-center justify-center ml-1 md:text-2xl md:ml-6">
    <a href="/" class="flex flex-row justify-center gap-1">
      <div class="w-12 h-12 bg-darkblue border-lightgreen border flex items-center justify-center">
        <Icon name="charm:tent" class="w-6 h-6 font-thin"/>
      </div>
      <div class="flex flex-col justify-center">
        <span class="block text-lg md:text-xl font-medium italic tracking-tighter font-mono text-white">{{ siteName }}</span>
        <span class="block text-xs/3  md:text-sm/2 font-thin text-lightgray  opacity-50">Hata_kaze's website.</span>
      </div>  
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
