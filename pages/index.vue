<template>
  <div class="w-full flex flex-col justify-center text-white">
    <div
      class="firstview w-full h-full flex justify-center items-center overflow-hidden bg-darkblue  mb-6"
    >
      <PictureBox
        :souce="['/images/webp/top-img01w640.webp 640w,/images/webp/top-img01w1270.webp 1024w,']"
        alt="TOP画像。鳩"
        title="TOP画像"
        webp="/images/webp/top-img01w2000.webp"
        jpg="/images/webp/top-img01w640.jpg"
      />
    </div>
    <Header1>
      Latest topics
    </Header1>
    <section v-for="i in 5" :key="i" class="w-full h-80 bg-darkblue my-2 p-4">
      <h3>Empty article-{{ i }}</h3>
    </section>
  </div>
</template>

<script setup>
import PictureBox from '~~/components/client/PictureBox.vue'
import Header1 from '~~/components/client/Header1.vue'

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
