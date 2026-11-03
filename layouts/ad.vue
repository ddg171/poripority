<template>
    <div>
        <slot />      
    </div>
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
