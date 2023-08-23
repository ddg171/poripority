<template>
  <div class="flex flex-col items-center w-full page-about">
    <AboutHeroSec ref="hero" />
    <div class="sticky top-0 z-40 w-full">
      <ul class="flex items-center justify-center w-full h-8 gap-4 text-black bg-lightgray">
        <li>
          <NuxtLink to="#profile">
            Profile
          </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="#photography">
            Photography
          </NuxtLink>
        </li> -->
        <li>
          <NuxtLink to="#skill">
            Skill
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#contact">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </div>
    <AboutProfileSec class="bg-darkblue" />
    <AboutSkillSec />
    <section class="w-full z-40 overflow-x-hidden bg-lightgray">
      <div class="h-72 bg-lightgray py-4 flex  items-center justify-center" style="transform:translateX(0px);">
        <div v-for="i in 5" :key="i" class="clip-img w-72 h-64 bg-green shrink-0 text-white text-2xl">
          {{ i }}
        </div>
      </div>
    </section>
    <AboutPhotoSec />
    <AboutContentSection id="contact" class="z-30 py-20 bg-gray md:py-28">
      <template #heading>
        <AppHeading2 class="z-40">
          Contact
        </AppHeading2>
      </template>
      <template #default>
        <div class="z-30 flex flex-col items-center justify-center w-full mb-4 text-2xl text-white">
          If you have any questions, please contact me.
        </div>

        <div class="flex flex-col items-center justify-center gap-4 text-2xl text-white">
          <ContactBox />
        </div>
      </template>
    </AboutContentSection>
  </div>
</template>

<script setup lang="ts">
import { setPageMetaData } from '~~/composables/helper/head'

const config = useRuntimeConfig()
const title = 'About|' + config.public.siteName
const description = 'profile, skill, contact'
setPageMetaData(
  title,
  description
)
const hero = ref<any>(null)

onMounted(() => {
  nextTick(() => {
    hero?.value?.show()
  })
})

</script>

<style lang="postcss" scoped>

.hero{
  height: calc(100vh - 48px - 3rem);
}

.hero-enter-active{
  @apply opacity-100 transition-opacity duration-200 delay-500;
}

.hero-enter-from,
.hero-leave-to {
  @apply opacity-0;
}
.clip-img { margin: 0 -0.75rem; clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%); }
</style>
