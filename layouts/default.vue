<template>
  <div class="w-screen h-screen flex flex-col">
    <MyHeader />
    <div class="w-full h-full flex  flex-col lg:flex-row justify-center">
      <aside class="w-full lg:w-48  h-12 lg:h-60  bg-darkblue m-0 lg:m-4" />
      <main class="w-full flex bg-transparent max-w-4xl m-2 lg:m-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyHeader from '~~/components/client/MyHeader.vue'
</script>
