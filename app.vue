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

// Suspenseの状態を更新・保持する。
const nuxtApp = useNuxtApp()
const { set } = useLoadingStore()
nuxtApp.hook('page:start', () => {
  set(true)
})
nuxtApp.hook('page:finish', () => {
  set(false)
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
