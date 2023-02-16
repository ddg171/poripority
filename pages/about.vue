<template>
  <div class="page-about flex flex-col items-center w-full">
    <section id="hero" class="hero w-full max-h-1080p min-h-480p bg-darkblue relative">
      <div class="h-full w-full">
        <div class="h-full w-full bg-green/25 absolute overflow-hidden flex justify-center items-center">
          <NuxtPicture src="/images/webp/about01.webp" legacy-format="jpeg" class="w-full h-full" :img-attrs="{class:'img-inside-picture' }" />
        </div>
        <div class="flex justify-center h-full w-full absolute">
          <CommonContentWidthBox class="flex items-center">
            <AppHeading1>
              About
            </AppHeading1>
          </CommonContentWidthBox>
        </div>
        <div class="w-full py-4 bottom-0 absolute flex items-center justify-center text-white">
          <div>
            <CommonAppLink to="#profile" class="text-4xl">
              <Icon
                id="scroll"
                class="h-full"
                name="material-symbols:arrow-downward"
              />
              next
            </CommonAppLink>
          </div>
        </div>
      </div>
    </section>
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
    <IntersectionWrapper :threshold="0.9" trantision="none" class="w-full" @in="profileIn=true">
      <section id="profile" class="w-full py-16 min-h-screen relative bg-darkblue">
        <div class="flex flex-col justify-center items-start h-full w-full absolute">
          <CommonContentWidthBox>
            <AppHeading2>Profile</AppHeading2>
            <div class="w-full text-white">
              hoge
            </div>
          </CommonContentWidthBox>
        </div>
      </section>
    </IntersectionWrapper>
    <IntersectionWrapper :threshold="0.9" trantision="none" class="w-full" @in="skillIn=true">
      <section id="skill" class="w-full py-16 min-h-screen relative bg-darkblue">
        <div class="flex flex-col justify-center h-full w-full absolute">
          <CommonContentWidthBox>
            <AppHeading2>Skill</AppHeading2>
            <div class="w-full text-white">
              hoge
            </div>
          </CommonContentWidthBox>
        </div>
      </section>
    </IntersectionWrapper>
    <IntersectionWrapper :threshold="0.9" trantision="none" class="w-full" @in="programIn=true">
      <section id="programming" class="w-full py-16 min-h-screen relative bg-darkblue">
        <div class="flex flex-col justify-center h-full w-full absolute">
          <CommonContentWidthBox>
            <AppHeading3>Programming</AppHeading3>
          </CommonContentWidthBox>
        </div>
      </section>
    </IntersectionWrapper>
    <IntersectionWrapper :threshold="0.9" trantision="none" class="w-full" @in="loadmapIn=true">
      <section id="loadmap" class="w-full py-16 min-h-screen relative bg-darkblue">
        <div class="flex flex-col justify-center h-full w-full absolute">
          <CommonContentWidthBox>
            <AppHeading2>loadmap</AppHeading2>
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

const profileIn = ref<boolean>(false)
const skillIn = ref<boolean>(false)
const programIn = ref<boolean>(false)
const loadmapIn = ref<boolean>(false)

</script>

<style scoped>

.hero{
  height: calc(100vh - 64px - 3rem);
}

#scroll{
  animation-duration: 1s;
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
