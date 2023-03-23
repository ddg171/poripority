<template>
  <AboutContentSection id="skill" class=" bg-green z-30" @in="isShown=true">
    <template #heading>
      <AppHeading2 class="z-40">
        Skill
      </AppHeading2>
    </template>
    <template #default>
      <div class="">
        <div ref="content" :style="style" class=" w-full z-30 md:h-screen text-white flex flex-col gap-4">
          <div>
            <AppHeading3 class="mb-2">
              Web Development
            </AppHeading3>
            <ul class="w-full flex gap-16">
              <li class="text-center">
                <div class="h-36 w-36 bg-darkblue" />
                HTML/CSS
              </li>
              <li>
                <div class="h-36 w-36 bg-darkblue" />

                JavaScript<br>/Typescript
              </li>
              <li>
                <div class="h-36 w-36 bg-darkblue" />

                Vue.js
              </li>
              <li>
                <div class="h-36 w-36 bg-darkblue" />

                Nuxt.js
              </li>
            </ul>
          </div>
          <div>
            <AppHeading3 class="mb-2">
              Platform/Infrastructure
            </AppHeading3>
            <ul class="w-full flex gap-16">
              <li>
                <div class="h-36 w-36 bg-darkblue" />

                GCP
              </li>
              <li>
                <div class="h-36 w-36 bg-darkblue" />

                Firebase
              </li>
              <li>
                <div class="h-36 w-36 bg-darkblue" />

                Docker
              </li>
            </ul>
          </div>
          <div>
            <AppHeading3 class="mb-2">
              Others
            </AppHeading3>
            <ul class="w-full flex gap-16">
              <li>
                <div class="h-36 w-36 bg-darkblue" />

                Photography
              </li>
              <li>
                <div class="h-36 w-36 bg-darkblue" />

                Drone
              </li>
            </ul>
          </div>
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
  const r = Math.round(((bottom - innerHeight) / height) * 1000) / 1000 - 0.5
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
