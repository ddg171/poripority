<template>
  <div class="min-h-screen flex flex-col items-center">
    <MyHeader />
    <div class="w-full min-h-screen flex  flex-col   items-center">
      <main class="w-full min-h-screen flex flex-col items-center  bg-transparent  ">
        <slot />
      </main>
      <aside class="w-full lg:w-48  h-12 lg:h-60 bg-darkblue text-white sticky top-4 m-0 lg:m-4" />

      <footer class="border-t-solid border-t-4 border-red w-full h-32 bg-lightgray ">
        footer
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyHeader from '~~/components/client/MyHeader.vue'

</script>
