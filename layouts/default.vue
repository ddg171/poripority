<template>
  <div class="min-h-screen flex flex-col ">
    <MyHeader />
    <div class="w-full min-h-screen flex  flex-col  items-center justify-center">
      <main class="w-full flex bg-transparent max-w-4xl ">
        <slot />
      </main>
      <footer class="border-t-solid border-t-4 border-red w-full h-60 bg-lightgray ">
        footer
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyHeader from '~~/components/client/MyHeader.vue'
</script>
