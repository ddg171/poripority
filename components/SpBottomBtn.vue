<template>
  <div class="flex justify-end items-end w-full sticky  h-16  bottom-0 left-full px-3 pb-2 overflow-y-hidden">
    <Transition name="slide-in">
      <CommonAppBtn v-show="props.isShow" id="to-top-btn" class=" border border-darkblue" @click="scrollToTop">
        <Icon name="material-symbols:vertical-align-top" />
        一番上へ
      </CommonAppBtn>
    </Transition>
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
