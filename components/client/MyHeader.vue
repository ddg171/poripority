<template>
  <header class="w-full  bg-green text-white">
    <div id="header-container" class="header-container h-full flex flex-row justify-between">
      <SiteName />
      <NavBar :props="{menus:menus}" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import SiteName from './SiteName.vue'
import NavBar from './NavBar.vue'
const menus = [
  { name: 'Home', path: '/' },
  { name: 'blog', path: '/blog' }
]
</script>

<style scoped>
header{
    height: 64px;
}

.header-container{
    max-width: 1920px;
}
</style>
