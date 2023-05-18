<template>
  <div id="app" ref="app" class="w-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <OptIn />
  </div>
</template>

<script lang="ts" setup>

const app = ref<null|Element>(null)

const nuxtApp = useNuxtApp()
const isLoading = useLoadingStore()
nuxtApp.hook('page:start', () => {
  isLoading.set(true)
})
nuxtApp.hook('page:finish', () => {
  isLoading.set(false)
})

const ScrollHandler = () => {
  if (!app.value) { return }
  const rect = app.value.getClientRects()
  if (rect.length === 0) { return }
  const target = rect[0]
  const rootRectStore = useRootRectStore()
  rootRectStore.set(target)
}

onMounted(() => {
  nextTick(() => {
    window.addEventListener('scroll', ScrollHandler)
  })
})

onBeforeUnmount(() => {
  window.addEventListener('scroll', ScrollHandler)
})

</script>

<style lang="scss">
.layout-enter-active,
.layout-leave-active {
  transition: all 0.1s;
}
.layout-enter-from,
.layout-leave-to {
  // opacity: 0.75;
  filter: blur(0.25rem);
}
</style>
