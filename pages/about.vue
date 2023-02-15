<template>
  <div class="page-about flex flex-col items-center w-full">
    <section id="hero" class="hero w-full max-h-1080p min-h-480p bg-darkblue relative">
      <div class="h-full w-full">
        <div class="h-full w-full bg-green/25 absolute overflow-hidden flex justify-center items-center">
          <NuxtPicture src="/images/webp/about01.webp" legacy-format="jpeg" class="w-full h-full" :img-attrs="{class:'img-inside-picture' }" />
        </div>>
        <div class="flex justify-center h-full w-full absolute">
          <CommonContentWidthBox class="flex items-center">
            <AppHeading1>
              About
            </AppHeading1>
          </CommonContentWidthBox>
        </div>
      </div>
    </section>
    <div class="sticky top-0 w-full">
      <ul class="h-12 w-full flex justify-center items-center gap-4 bg-lightgray text-black">
        <li>
          <NuxtLink to="#whoiam">
            Profile
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="skill">
            Skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#frebase">
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
    <section id="whoiam" class="mt-12 w-full min-h-screen">
      <AppHeading2>Profile</AppHeading2>
    </section>
    <section id="skill" class="w-full min-h-screen">
      <AppHeading2>Skills</AppHeading2>
    </section>
    <section id="frontend" class="w-full min-h-screen">
      <AppHeading3>Programming</AppHeading3>
    </section>
    <section id="loadmap" class="w-full min-h-screen">
      <AppHeading2>loadmap</AppHeading2>
    </section>
  </div>
</template>

<script setup lang="ts">
import { makeDynamicMeta } from '~~/utils/useHeadHelper'

const config = useRuntimeConfig()
const title = 'About|' + config.public.siteName
const description = 'WIP'

const dynamicMeta = makeDynamicMeta(title, description, 'none')
useHead(dynamicMeta)

</script>

<style scoped>
.hero{
  height: calc(100vh - 64px - 3rem);
}
</style>
