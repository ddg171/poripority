<template>
  <div class="w-full flex flex-col justify-center text-white">
    <div
      class="firstview w-full flex justify-center items-center bg-darkblue  mb-6"
    >
      <img
        src="
      "
        alt="firstview"
      >
    </div>
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
<style>
.firstview{
  height: 80vh;
}

@media screen and (min-width:768px){
.firstview{
  height: 50vh;
}
}
</style>
