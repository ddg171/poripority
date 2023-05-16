<template>
  <div id="app" ref="app" class="w-full">
    <NuxtLayout>
      <div v-show="!isLoading">
        <NuxtPage />
      </div>
      <div v-if="isLoading" class="w-full">
        <ContentSection class="text-white text-2lg">
          <PlaceHolder />
        </ContentSection>
      </div>
    </NuxtLayout>
    <OptIn />
  </div>
</template>

<script lang="ts" setup>
const isLoading = ref<boolean>(true)
const app = ref<null|Element>(null)

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
  console.log('page:start')
  isLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  console.log('page:finish')
  isLoading.value = false
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
