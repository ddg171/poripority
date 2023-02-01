<template>
  <CommonLayoutBox id="layout" class="relative">
    <AppHeader ref="header" />
    <div class="w-full min-h-screen flex  flex-col   items-center">
      <main class="w-full min-h-screen flex flex-col items-center">
        <slot />
      </main>
    </div>
    <SpBottomBtn :is-show="isBottomBtnShow" />

    <AppFooter />
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
