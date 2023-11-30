<template>
  <CommonLayoutBox id="layout" class="">
    <AppHeader />
    <div class="flex flex-col items-center w-full min-h-screen">
      <div id="top-box" class="w-full mb-4 h-1/3h lg:h-3/4h max-h-960p min-h-240p">
        <ClientOnly>
          <PageTop :title="pageTitle.title" :top-img="pageTitle.topImg" :subtitles="pageTitle.subtitles" />
        </ClientOnly>
      </div>
      <CommonContentWidthBox class="flex flex-col items-center lg:justify-center lg:items-start lg:flex-row ">
        <main class="flex flex-col items-center w-full bg-transparent">
          <div v-show="!isLoading.state.value.isLoading" class="w-full">
            <slot />
          </div>
          <div v-if="isLoading.state.value.isLoading" class="w-full">
            <ContentSection class="text-white text-2lg">
              <PlaceHolder />
            </ContentSection>
          </div>
        </main>
        <div id="side" class="sticky top-0 w-full mx-0 lg:w-96 lg:mx-4 shrink-0">
          <aside class="flex flex-col-reverse w-full mb-2">
            <AsideContentsBox id="category" class="mb-2">
              <AppHeading3>カテゴリ</AppHeading3>
              <CategoryList :categories="state||[]" :selected="selected" />
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
const isLoading = useLoadingStore()

// カテゴリ一覧の取得
const { state, set: setCategories, selected } = useCategoryStore()
const { data: categories } = await useFetch('/api/category')
setCategories(categories?.value?.contents || [])

// ページ上部
const { state: pageTitle } = usePageTopStore()

watch(rootRect, (b) => {
  const top = b.top
  const isShow = !!(top < -80)
  isBottomBtnShow.value = isShow
})

</script>

<style>

</style>
