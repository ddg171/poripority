<template>
  <section id="hero" class="relative w-full hero max-h-1080p min-h-480p bg-darkblue snap-start">
    <Transition name="hero">
      <div v-show="isShown" class="w-full h-full">
        <div class="absolute flex items-center justify-center w-full h-full overflow-hidden bg-green/25">
          <NuxtPicture src="/images/webp/about01.webp" legacy-format="jpeg" class="w-full h-full" :img-attrs="{class:'img-inside-picture' }" />
        </div>
        <div class="absolute flex justify-center w-full h-full">
          <CommonContentWidthBox class="flex items-center">
            <AppHeading1>
              About
            </AppHeading1>
          </CommonContentWidthBox>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">

const isShown = ref<boolean>(false)
const show = () => {
  isShown.value = true
}

defineExpose({
  show
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
