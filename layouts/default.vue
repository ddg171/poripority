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
const { state } = useRootRectStore()

watch(state, (b) => {
  const top = b.top
  const isShow = !!(top < -100)
  isBottomBtnShow.value = isShow
})

</script>
