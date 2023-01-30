<template>
  <div v-show="props.isShow" class="sticky lg:hidden  bottom-0 left-full m-2">
    <CommonAppBtn @app-click="scrollToTop">
      TOPへ
    </CommonAppBtn>
  </div>
</template>

<script setup lang="ts">

interface Props{
isShow?:boolean
}

const props = withDefaults(defineProps<Props>(), { isShow: true })

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>
