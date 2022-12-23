<template>
  <div class="min-h-screen flex flex-col items-center">
    <MyHeader />
    <div class="w-full min-h-screen flex  flex-col   items-center">
      <main class="w-full min-h-screen flex flex-col items-center  bg-transparent  ">
        <slot />
      </main>
      <footer class="border-t-solid border-t-4 border-red w-full h-32 bg-lightgray ">
        footer
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyHeader from '~~/components/client/MyHeader.vue'
</script>
