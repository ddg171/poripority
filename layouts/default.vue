<template>
  <CommonLayoutBox id="layout" class="relative">
    <AppHeader ref="header" />
    <div class="w-full min-h-screen flex  flex-col   items-center">
      <main class="w-full min-h-screen flex flex-col items-center">
        <suspense>
          <template #default>
            <slot />
          </template>
          <template #fallback>
            <div class="flex flex-col w-full h-full p-6 text-white">
              Loading...
            </div>
          </template>
        </suspense>
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
