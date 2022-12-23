<template>
  <header class="w-full  bg-green text-white" :is-sticky="isSticky">
    <div id="header-container" class="header-container h-full flex flex-row justify-between">
      <SiteName />
      <NavBar :menus="menus" :current-path="$route.fullPath" @toggle="toggle" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import SiteName from './SiteName.vue'
import NavBar from './NavBar.vue'
const menus = [
  { name: 'About', path: '/' },
  { name: 'Works', path: '/' },
  { name: 'blog', path: '/blog' }
]

const isSticky = ref<boolean>(false)

const toggle = (val:boolean) => {
  isSticky.value = !!val
}

</script>

<style scoped>
header{
    height: 64px;
}

header[is-sticky="true"]{
  position: sticky;
  top:0;
  z-index: 11;
}

</style>
