<template>
  <Transition name="slide-in">
    <div v-show="props.isShow" class="sticky lg:hidden  bottom-0 left-full m-2 overflow-y-hidden">
      <CommonAppBtn id="to-top-btn" @app-click="scrollToTop">
        TOPへ
      </CommonAppBtn>
    </div>
  </Transition>
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

<style scoped>
.slide-in-enter-active{
  transition: all 0.25s ease-out;
}

.slide-in-leave-active {
  transition: all 0.25s ease-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateY(80px);
}
</style>
