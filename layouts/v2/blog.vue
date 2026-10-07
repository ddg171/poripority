<template>
    <CommonLayoutBox id="layout">
        <AppHeader ref="header" />
        <main class="flex flex-col items-center w-full min-h-screen">
            <slot />
        </main>
        <SpBottomBtn :is-show="isBottomBtnShow" />
        <AppFooter />
    </CommonLayoutBox>
</template>

<script lang="ts" setup>
const isBottomBtnShow = ref<boolean>(false)
const { state: rootRect } = useRootRectStore()
// const isLoading = useLoadingStore()

// カテゴリ一覧の取得
const { set: setCategories } = useCategoryStore()
const { data: categories } = await useFetch('/api/category')
setCategories(categories?.value?.contents || [])

watch(rootRect, (b) => {
    const top = b.top
    const isShow = !!(top < -80)
    isBottomBtnShow.value = isShow
})

</script>
