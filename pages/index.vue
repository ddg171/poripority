<template>
  <div class="w-full grid grid-cols-1 text-white">
    <h1
      class="border-solid border-white border-l-4 text-xl pl-4"
    >
      Latest Topics
    </h1>
    <article v-for="i in 5" :key="i" class="w-full h-80 bg-darkblue my-2 p-4">
      <h3>Empty article-{{ i }}</h3>
    </article>
  </div>
</template>

<script setup>

useHead({
  title: 'WIP|poripority.com'
})

</script>
