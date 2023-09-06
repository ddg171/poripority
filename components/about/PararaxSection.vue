<template>
  <section class="w-full z-40 overflow-x-hidden bg-lightgray">
    <div class=" bg-lightgray py-4 flex  items-center justify-center" style="transform:translateX(0px);">
      <div v-for="p,i in photos" :key="i" class="clip-img w-72 h-96 bg-green shrink-0 text-white text-2xl">
        <NuxtPicture
          :src="p.src"
          class="object-cover w-full h-full"
          legacy-format="jpeg"
          :img-attrs="{ class:'h-full w-full object-cover', alt:''}"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Photo {
  isShow:boolean
  src:string
}
const photos = ref<Photo[]>(
  [
    { isShow: false, src: '/images/webp/about/photo001.webp' },
    { isShow: false, src: '/images/webp/about/photo002.webp' },
    { isShow: false, src: '/images/webp/about/photo003.webp' },
    { isShow: false, src: '/images/webp/about/photo004.webp' },
    { isShow: false, src: '/images/webp/about/photo005.webp' },
    { isShow: false, src: '/images/webp/about/photo006.webp' },
    { isShow: false, src: '/images/webp/about/photo007.webp' },
    { isShow: false, src: '/images/webp/about/photo008.webp' },
    { isShow: false, src: '/images/webp/about/photo009.webp' },
    { isShow: false, src: '/images/webp/about/photo010.webp' },
    { isShow: false, src: '/images/webp/about/photo011.webp' },
    { isShow: false, src: '/images/webp/about/photo012.webp' },
    { isShow: false, src: '/images/webp/about/photo013.webp' },
    { isShow: false, src: '/images/webp/about/photo014.webp' },
    { isShow: false, src: '/images/webp/about/photo015.webp' },
    { isShow: false, src: '/images/webp/about/photo016.webp' }

  ]
)
</script>

<style scoped>
 .clip-img { margin: 0 -0.75rem; clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%); }
</style>
