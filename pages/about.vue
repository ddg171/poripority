<template>
  <div class="flex flex-col items-center w-full page-about">
    <AboutHeroSec ref="hero" />
    <div class="sticky top-0 z-50 w-full">
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
      <IntersectionWrapper :threshold="0.7" trantision="none" class="h-72 lg:h-64 w-full bg-green" @in="contactHeadingShow=true">
        <TopRelativeBox class="block h-72 lg:h-64 ">
          <TopImgBlock :img="{webp:'/images/webp/about/contact.webp',title:'',alt:''}" />
          <div class="absolute flex items-center justify-center w-full h-full ">
            <CommonContentWidthBox class="flex items-center justify-start">
              <div class="flex flex-col  px-4 py-2 md:px-16 md:py-6 bg-green ">
                <AppHeading2>
                  Contact
                </AppHeading2>
              </div>
            </CommonContentWidthBox>
          </div>
          <div class="absolute w-full h-full cliped-animation  bg-green" :trigger="contactHeadingShow" />
        </TopRelativeBox>
      </IntersectionWrapper>
      <IntersectionWrapper :threshold="0.5" trantision="none" class="w-full " @in="contactShow=true">
        <div class="flex flex-col items-center w-full my-16">
          <CommonContentWidthBox id="contact-info" class="flex flex-col px-2 " :is-show="contactShow">
            <div class="z-30 flex flex-col items-center justify-center w-full">
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
const contactHeadingShow = ref(false)
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
.cliped-animation[trigger="false"]{
  clip-path: polygon(0% 0%, 100% 0%,100% 100%, 0% 100%);
}
.cliped-animation[trigger="true"]{
  animation: 0.5s ease-out 0.25s 1 normal forwards wipe-in;
}

@keyframes wipe-in {
  0% {
    clip-path: polygon(0% 0%, 100% 0%,100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(100% 0%, 100% 0%,100% 100%, 100% 100%);
  }
}

</style>
