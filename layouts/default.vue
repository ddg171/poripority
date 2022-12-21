<template>
  <div class="w-screen h-screen flex flex-col">
    <MyHeader />
    <div class="flex h-full">
      <main class="w-full flex justify-center bg-slate-400">
        <div class=" h-full container mx-auto bg-white">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyHeader from '~~/components/client/MyHeader.vue'
</script>
