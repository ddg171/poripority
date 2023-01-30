<template>
  <CommonLayoutBox id="layout" class="">
    <AppHeader />
    <div class="flex flex-col items-center w-full min-h-screen">
      <PageTop />
      <CommonContentWidthBox class="flex flex-col items-center lg:justify-center lg:items-start lg:flex-row  min-h-screen">
        <main class="flex flex-col items-center w-full  bg-transparent">
          <suspense>
            <template #default>
              <slot />
            </template>
            <template #fallback>
              <ContentSection class="flex flex-col w-full h-full p-6 text-white">
                Loading...
              </ContentSection>
            </template>
          </suspense>
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
const { state } = useRootRectStore()

watch(state, (b) => {
  const top = b.top
  const isShow = !!(top < -80)
  isBottomBtnShow.value = isShow
})
</script>

<style>

</style>
