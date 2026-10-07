<template>
  <CommonLayoutBox id="layout" class="">
    <AppHeader />
    <div class="flex flex-col items-center w-full min-h-screen">
      <div id="top-box" class="w-full mb-2 min-h-[100px]">
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
            <V2ArticleListSkelton :number-of-items="10" />

          </div>
        </main>
        <div id="side" class="sticky top-0 w-full mx-0 lg:w-96 lg:mx-4 shrink-0">
          <aside class="flex flex-col-reverse w-full mb-2">
            <V2CommonContentSection id="category" class="mb-2" header-text="カテゴリ">
              <template #content>
                <div class="border border-lightgreen">

                  <CategoryList :categories="state || []" :selected="selected" />
                </div>
              </template>
            </V2CommonContentSection>
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

<style></style>
