<template>
  <div>
    <ClientOnly>
      <blockquote>
        <a
          class="twitter-timeline"
          data-lang="ja"
          data-width="350"
          data-height="500"
          data-theme="dark"
          href="https://twitter.com/hata_kaze?ref_src=twsrc%5Etfw"
        >Tweets by hata_kaze</a>
      </blockquote>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// import '~~/types/window'
useHead({
  script: [
    {
      type: 'text/javascript',
      async: true,
      src: 'https://platform.twitter.com/widgets.js'

    }
  ]
})

onMounted(() => {
  nextTick(() => {
    window.twttr?.widgets.load()
  })
})

</script>

<style>
.twitter-timeline{
    margin: 0 !important;
}
</style>
