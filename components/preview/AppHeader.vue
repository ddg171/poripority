<template>
  <header class="w-full  bg-green text-white z-50 top-0" :is-sticky="isSticky">
    <div id="AppHeader-container" class="AppHeader-container h-full flex flex-row justify-between">
      <SiteName />
      <p class="p-4 bg-gray text-orange">
        PREVIEW
      </p>
    </div>
  </header>
</template>

<script lang="ts" setup>

const isSticky = ref<boolean>(false)

</script>

<style scoped>
header{
    height: 64px;
}

header[is-sticky="true"]{
  position: sticky;
}

</style>
