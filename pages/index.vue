<template>
  <div class="w-full flex flex-col justify-center items-center text-white">
    <div
      class="firstview w-full  h-3/4h md:h-1/2h flex justify-center items-center overflow-hidden bg-darkblue  mb-6"
    >
      <PictureBox
        :souce="['/images/webp/top-img01w640.webp 640w,/images/webp/top-img01w1270.webp 1024w,']"
        alt="TOP画像。鳩"
        title="TOP画像"
        webp="/images/webp/top-img01w2000.webp"
        jpg="/images/webp/top-img01w640.jpg"
      />
    </div>
    <section class="max-w-4xl  flex flex-col justify-center p-2 bg-darkblue mb-6">
      <Header1>
        Latest topics
      </Header1>
      <article v-for="i in 3" :key="i" class="w-full bg-darkblue mb-4 p-4">
        <h3>Empty article-{{ i }}</h3>
        <p class="max-w-full article-p break-words">
          hogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypohogehogehugahugapiypiypo
        </p>
      </article>
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
.article-p{
    overflow-wrap: anywhere;
}

</style>
