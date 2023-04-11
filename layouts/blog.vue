<template>
  <CommonLayoutBox id="layout" class="">
    <AppHeader />
    <div class="flex flex-col items-center w-full min-h-screen">
      <div id="top-box" class="w-full h-1/4h lg:h-1/2h max-h-960p min-h-480p mb-4" />
      <CommonContentWidthBox class="flex flex-col items-center lg:justify-center lg:items-start lg:flex-row ">
        <main class="flex flex-col items-center w-full  bg-transparent">
          <div v-show="!loading.isLoading" class="w-full">
            <slot />
          </div>
          <div v-if="loading.isLoading" class="w-full">
            <ContentSection class="text-white text-2lg">
              <PlaceHolder />
            </ContentSection>
          </div>
        </main>
        <div id="side" class="sticky top-0 w-full mx-0  lg:w-96  lg:mx-1 shrink-0">
          <aside class="w-full flex flex-col-reverse mb-2">
            <AsideContentsBox class="mb-2">
              <AppHeading3>カテゴリ</AppHeading3>
              <ClientOnly>
                <CategoryList />
              </ClientOnly>
            </AsideContentsBox>
            <div id="side-contents" class="grid" />
          </aside>
        </div>
      </CommonContentWidthBox>

      <SpBottomBtn :is-show="isBottomBtnShow" />
      <AppFooter />
    </div>
  </CommonLayoutBox>
</template>

<script lang="ts" setup>
const isBottomBtnShow = ref<boolean>(false)
const { state: rootRect } = useRootRectStore()
const { state: loading } = useLoadingStore()

const loadingStore = useLoadingStore()
loadingStore.set(true)

watch(rootRect, (b) => {
  const top = b.top
  const isShow = !!(top < -80)
  isBottomBtnShow.value = isShow
})
</script>

<style>

</style>
