<template>
  <div class="min-h-screen flex flex-col ">
    <MyHeader />
    <div class="w-full min-h-screen flex  flex-col lg:flex-row items-center lg:items-start lg:justify-center">
      <aside class="w-full lg:w-48  h-12 lg:h-60 bg-darkblue text-white sticky top-4 m-0 lg:m-4">
        <ul class="w-full flex flex-row lg:flex-col">
          <li>hoge</li>
          <li>huga</li>
          <li>piyo</li>
        </ul>
      </aside>
      <main class="w-full flex bg-transparent max-w-4xl m-2 lg:m-4 ">
        <slot />
      </main>
      <div class="w-full lg:w-48 h-12 lg:h-60 bg-transparent" />
    </div>
    <footer class="border-t-solid border-t-4 border-red w-full h-60 bg-lightgray ">
      footer
    </footer>
  </div>
</template>

<script lang="ts" setup>
import MyHeader from '~~/components/client/MyHeader.vue'
</script>
