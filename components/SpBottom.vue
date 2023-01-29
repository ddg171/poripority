<template>
  <div class="sticky lg:hidden  bottom-0 left-full m-2">
    <CommonAppBtn @app-click="scrollToTop">
      TOPへ
    </CommonAppBtn>
  </div>
</template>

<script setup lang="ts">

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>
