<template>
  <div class="w-full grid grid-cols-1 text-white">
    <PageHeader>
      Latest topics
    </PageHeader>
    <section v-for="i in 5" :key="i" class="w-full h-80 bg-darkblue my-2 p-4">
      <h3>Empty article-{{ i }}</h3>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '~~/components/client/PageHeader.vue'

useHead({
  title: 'WIP|poripority.com'
})

</script>
