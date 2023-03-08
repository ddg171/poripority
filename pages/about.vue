<template>
  <div class="page-about flex flex-col items-center w-full bg-darkblue">
    <AboutHeroSec ref="hero" />
    <div class="sticky top-0 w-full z-30">
      <ul class="h-12 w-full flex justify-center items-center gap-4 bg-lightgray text-black">
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
          <NuxtLink to="#programming">
            Programming
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#loadmap">
            Loadmap
          </NuxtLink>
        </li>
      </ul>
    </div>
    <AboutProfileSec />

    <AboutSkillSec class="mt-86" />
    <IntersectionWrapper :threshold="0.9" trantision="none" class="w-full" @in="programIn=true">
      <section id="programming" class="w-full py-16 min-h-screen relative bg-darkblue">
        <div class="flex flex-col justify-center h-full w-full absolute">
          <CommonContentWidthBox>
            <AppHeading3 class="sticky top-12">
              Programming
            </AppHeading3>
          </CommonContentWidthBox>
        </div>
      </section>
    </IntersectionWrapper>
    <IntersectionWrapper :threshold="0.9" trantision="none" class="w-full" @in="loadmapIn=true">
      <section id="loadmap" class="w-full py-16 min-h-screen relative bg-darkblue">
        <div class="flex flex-col justify-center h-full w-full absolute">
          <CommonContentWidthBox>
            <AppHeading2 class="sticky top-12">
              loadmap
            </AppHeading2>
          </CommonContentWidthBox>
        </div>
      </section>
    </IntersectionWrapper>
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

const programIn = ref<boolean>(false)
const loadmapIn = ref<boolean>(false)

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
