<template>
  <header class="top-0 z-50 w-full text-white bg-green" :is-sticky="isSticky">
    <div id="AppHeader-container" class="flex flex-row justify-between h-full AppHeader-container">
      <SiteName />
      <NavBar :menus="menus" :current-path="$route.fullPath" @toggle="toggle" />
    </div>
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
header{
    height: 64px;
}

header[is-sticky="true"]{
  position: sticky;
}

</style>
