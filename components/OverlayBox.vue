<template>
  <teleport v-if="props.isShow" to="#app">
    <div id="overlay"
    role="presentation"
    class="fixed top-0 z-50 flex items-center justify-center w-full h-screen transition-all bg-gray/90" 
    @click="handleClickOutside"
    @keypress.esc="handleClickOutside"
    >
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">

interface Props{
    isShow:boolean
}
const emits =defineEmits<(e: 'click-outside') => void>()

const handleClickOutside = (e:Event) => {
  if (e.target === e.currentTarget) {
    emits('click-outside')
  }
}
const props = withDefaults(defineProps<Props>(), { isShow: false })
</script>
