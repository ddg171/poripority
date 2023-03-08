<template>
  <section id="hero" class="hero w-full max-h-1080p min-h-480p bg-darkblue relative">
    <Transition name="hero">
      <div v-show="isShown" class="h-full w-full">
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
