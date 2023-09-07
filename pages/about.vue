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
    <section id="contact" class="w-full overflow-x-hidden z-30 bg-gray">
      <NuxtPicture
        src="/images/webp/about/contact.webp"
        class="object-cover w-full h-40"
        legacy-format="jpeg"
        :img-attrs="{ class:'h-full w-full object-cover', alt:''}"
      />
      <IntersectionWrapper :threshold="0.99" trantision="none" class="w-full " @in="contactShow=true">
        <div class="flex flex-col items-center w-full pt-4">
          <CommonContentWidthBox class="flex flex-col px-2 ">
            <div class="z-40 w-full mb-2 md:mb-8 ">
              <AppHeading2 class="z-40">
                Contact
              </AppHeading2>
            </div>
          </CommonContentWidthBox>
          <CommonContentWidthBox id="contact-info" class="flex flex-col px-2 " :is-show="contactShow">
            <div class="z-30 flex flex-col items-center justify-center w-full mb-4">
              <div class="flex flex-col items-center justify-center w-full mb-4 text-2xl text-white">
                If you have any questions, please contact me.
              </div>

              <div class="flex flex-col items-center justify-center gap-4 text-2xl text-white">
                <ContactBox />
              </div>
            </div>
          </CommonContentWidthBox>
        </div>
      </IntersectionWrapper>
    </section>
  </div>
</template>

<script setup lang="ts">
import { setPageMetaData } from '~~/composables/helper/head'
const scrollOption = ref({ updateHistory: false, offset: -64 })
const config = useRuntimeConfig()
const title = 'About|' + config.public.siteName
const description = 'profile, skill, contact'

const contactShow = ref(false)
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

#contact-info[is-show="false"]{
  @apply opacity-0;
}

#contact-info{
  @apply opacity-100 transition-opacity duration-200 delay-500;
}
</style>
