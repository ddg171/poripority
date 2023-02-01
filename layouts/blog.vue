<template>
  <CommonLayoutBox id="layout" class="">
    <AppHeader />
    <div class="flex flex-col items-center w-full min-h-screen">
      <PageTop />
      <CommonContentWidthBox class="flex flex-col items-center lg:justify-center lg:items-start lg:flex-row  min-h-screen">
        <main class="flex flex-col items-center w-full  bg-transparent">
          <div class="w-full">
            <slot />
            <ContentSection v-if="loading.isLoading" class="text-white text-2lg">
              <div class="flex items-center justify-center w-full h-48">
                <p>
                  Loading...
                </p>
              </div>
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

watch(rootRect, (b) => {
  const top = b.top
  const isShow = !!(top < -80)
  isBottomBtnShow.value = isShow
})
</script>

<style>

</style>
