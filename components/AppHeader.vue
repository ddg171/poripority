<template>
  <header id="app-header" class="top-0 z-50  w-full h-20 text-white bg-green flex flex-row justify-between align-middle" :is-sticky="isSticky">
      <SiteName />
      <NavBar :menus="menus" :current-path="$route.fullPath" @toggle="toggle" />
  </header>
</template>

<script lang="ts" setup>

const menus = [
  { name: 'TOP', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Works', path: '/works' },
  { name: 'About', path: '/about' }
]

const isSticky = ref<boolean>(false)

const toggle = (val:boolean) => {
  isSticky.value = !!val
}
</script>

<style scoped>


header[is-sticky="true"]{
  position: sticky;
}

</style>
