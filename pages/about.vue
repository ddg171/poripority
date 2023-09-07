<template>
  <div class="flex flex-col items-center w-full page-about">
    <AboutHeroSec ref="hero" />
    <div class="sticky top-0 z-40 w-full">
      <ul class="flex items-center justify-center w-full h-8 gap-4 text-black bg-lightgray">
        <li>
          <a v-smooth-scroll="scrollOption" href="#hero">
            Top
          </a>
        </li>
        <li>
          <a v-smooth-scroll href="#profile">
            Profile
          </a>
        </li>
        <li>
          <a v-smooth-scroll href="#skill">
            Skill
          </a>
        </li>
        <li>
          <a v-smooth-scroll href="#photography">
            Photography
          </a>
        </li>
        <li>
          <a v-smooth-scroll href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <AboutProfileSec class="bg-darkblue" />
    <AboutSkillSec />
    <ClientOnly>
      <AboutPararaxSection />
    </ClientOnly>
    <AboutPhotoSec />
    <AboutContentSection id="contact" class="z-30 py-20 min-h-3/4h bg-gray">
      <template #heading>
        <AppHeading2 class="z-40">
          Contact
        </AppHeading2>
      </template>
      <template #default>
      <div class="z-30 flex flex-col items-center justify-center w-full h-full mt-16">
        <div class="flex flex-col items-center justify-center w-full mb-4 text-2xl text-white">
          If you have any questions, please contact me.
        </div>

        <div class="flex flex-col items-center justify-center gap-4 text-2xl text-white">
          <ContactBox />
        </div>
              </div>

      </template>
    </AboutContentSection>
  </div>
</template>

<script setup lang="ts">
import { setPageMetaData } from '~~/composables/helper/head'
const scrollOption = ref({ updateHistory: false, offset: -64 })
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
</style>
