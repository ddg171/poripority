<template>
  <div id="app" class="bg-darkblue">
    <NuxtLayout>
      <NuxtPage @click-img="imgClick" />
    </NuxtLayout>
    <div v-if="imgUrl">
      <img :src="imgUrl" alt="" @click="imgUrl=null">
    </div>
  </div>
</template>

<script lang="ts" setup>

const imgUrl = ref<string|null>(null)

const imgClick = (url:string|null) => {
  imgUrl.value = url || null
}

</script>
