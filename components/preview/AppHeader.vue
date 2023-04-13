<template>
  <header class="top-0 z-50 w-full text-white bg-green" :is-sticky="isSticky">
    <div id="AppHeader-container" class="flex flex-row justify-between h-full AppHeader-container">
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
