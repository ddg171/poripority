<template>
  <CommonLayoutBox>
    <AppHeader />
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
    <AppFooter />
  </CommonLayoutBox>
</template>

<script lang="ts" setup>

</script>
