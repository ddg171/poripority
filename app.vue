<template>
  <div id="app" class="bg-gray">
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
