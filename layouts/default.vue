<template>
  <CommonLayoutBox>
    <AppHeader />
    <div class="w-full min-h-screen flex  flex-col   items-center">
      <main class="w-full min-h-screen flex flex-col items-center  bg-transparent  ">
        <slot />
      </main>
    </div>
    <AppFooter />
  </CommonLayoutBox>
</template>

<script lang="ts" setup>

</script>
