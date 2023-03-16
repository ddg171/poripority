<template>
  <div class="flex flex-col items-center w-full page-about">
    <AboutHeroSec ref="hero" />
    <div class="sticky top-0 z-50 w-full">
      <ul class="flex items-center justify-center w-full h-12 gap-4 text-black bg-lightgray">
        <li>
          <NuxtLink to="#profile">
            Profile
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#skill">
            Skill
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="#loadmap">
            Loadmap
          </NuxtLink>
        </li>
      </ul>
    </div>
    <AboutProfileSec class="bg-darkblue" />
    <AboutSkillSec />
    <AboutLoadmapSec />
  </div>
</template>

<script setup lang="ts">
import { makeDynamicMeta } from '~~/utils/useHeadHelper'

const config = useRuntimeConfig()
const title = 'About|' + config.public.siteName
const description = 'WIP'

const dynamicMeta = makeDynamicMeta(title, description, 'none')
useHead(dynamicMeta)
const hero = ref<any>(null)

onMounted(() => {
  nextTick(() => {
    hero?.value?.show()
  })
})

</script>

<style scoped>

.hero{
  height: calc(100vh - 64px - 3rem);
}

.hero-enter-active{
  opacity: 1;
  transition: opacity 0.25s linear;
  transition-delay: 0.5s;
}

.hero-enter-from,
.hero-leave-to {
  opacity: 0;
}

#scroll{
  animation-duration: 1.5s;
  animation-name: shaking;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes shaking {
  from {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.25rem);

  }
  to {
    transform: translateY(0);

  }
}

</style>
