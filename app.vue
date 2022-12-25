<template>
  <div id="app" class="min-h-screen bg-gray">
    <html lang="ja" />
    <NuxtLayout>
      <NuxtPage @click-img="imgClick" />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>

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
