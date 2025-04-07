<template>
  <section ref="section" class="w-full z-20 overflow-x-hidden bg-lightgray">
    <div class=" bg-lightgray py-4 flex  items-center justify-center" :style="`transform:translateX(${translateX}px);`">
      <div v-for="p,i in photos" :key="i" class="clip-img  h-48 w-48 md:w-96 md:h-96 bg-green shrink-0">
        <NuxtPicture
          :src="p"
          class="object-cover w-full h-full"
          height="384px"
          width="384px"
          legacy-format="jpeg"
          :img-attrs="{ class:'h-full w-full object-cover', alt:''}"
        />
      </div>
      <div v-for="p,i in photos" :key="i" class="clip-img  h-48 w-48 md:w-96 md:h-96 bg-green shrink-0">
        <NuxtPicture
          :src="p"
          class="object-cover w-full h-full"
          height="384px"
          width="384px"
          legacy-format="jpeg"
          :img-attrs="{ class:'h-full w-full object-cover', alt:''}"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const photos = ref<string[]>(
  [
    '/images/webp/about/hato_001.webp',
    '/images/webp/about/hato_002.webp',
    '/images/webp/about/hato_003.webp',
    '/images/webp/about/hato_004.webp',
    '/images/webp/about/hato_008.webp',
    '/images/webp/about/hato_009.webp',
    '/images/webp/about/hato_010.webp'
  ]
)

const section = ref<HTMLElement | null>(null)

const translateX = computed<number>(() => {
  if (window === undefined) { return 0 }
  const translateValue = 130
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
 .clip-img { margin: 0 -1.5rem; clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%); }
</style>
