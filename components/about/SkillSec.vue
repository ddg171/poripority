<template>
  <AboutContentSection id="skill" class=" bg-green z-30" @in="isShown=true">
    <template #heading>
      <AppHeading2 class="z-40">
        Skill
      </AppHeading2>
    </template>
    <template #default>
      <div class="overflow-x-hidden">
        <div ref="content" :style="style" class=" w-full z-30 md:h-screen bg-lightgreen text-white flex justify-center items-start flex-wrap">
          <p class="text-white text-2xl">
            kokoni iroiro kaku!
          </p>
        </div>
      </div>
    </template>
  </AboutContentSection>
</template>

<script setup lang="ts">
const isShown = ref<boolean>(false)

const content = ref<HTMLElement|null>(null)
const translateXrate = ref<number>(1)
const ScrollHandler = () => {
  if (!content.value) { return }
  const rects = content.value.getClientRects()
  if (rects.length === 0) { return }
  const rect = rects[0]
  const innerHeight = window.innerHeight
  const bottom = rect.bottom
  const height = rect.height
  const r = Math.round(((bottom - innerHeight) / height) * 1000) / 1000 - 0.3
  translateXrate.value = (r > 1 ? 1 : r) < 0 ? 0 : r
}

const style = computed(() => {
  return {
    transform: `translateX(${translateXrate.value * 100}%)`
  }
})
onMounted(() => {
  window.addEventListener('scroll', ScrollHandler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', ScrollHandler)
})
</script>
