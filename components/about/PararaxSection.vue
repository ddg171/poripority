<template>
  <section ref="section" class="w-full z-40 overflow-x-hidden bg-lightgray">
    <div class=" bg-lightgray py-4 flex  items-center justify-center" :style="`transform:translateX(${translateX}px);`">
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
import { Photo } from '~~/types/components'

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

const section = ref<HTMLElement | null>(null)

const translateX = computed<number>(() => {
  if (window === undefined) { return 0 }
  const translateValue = 400
  const clientHeight = window?.innerHeight || 0
  if (sectionPosition.value === 'under') { return 0 }
  if (sectionPosition.value === 'over') { return translateValue }
  return sectionTop.value / clientHeight * (translateValue * 2) - translateValue
})

const sectionTop = ref<number>(0)
const sectionHeight = ref<number>(0)
const onHandleScroll = () => {
  if (!section.value) { return }
  const rect = section.value.getClientRects()
  if (rect.length === 0) { return }
  const target = rect[0]
  sectionTop.value = target.top
  sectionHeight.value = target.height
}

const sectionPosition = computed<'under'|'inside'|'over'>(
  () => {
    const clientHeight = window?.innerHeight || 0
    if (sectionTop.value > clientHeight) { return 'under' }
    if (sectionTop.value < sectionHeight.value * -1) { return 'over' }
    return 'inside'
  }
)

onMounted(() => {
  window.addEventListener('scroll', onHandleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onHandleScroll)
})
</script>

<style scoped>
 .clip-img { margin: 0 -0.75rem; clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%); }
</style>
