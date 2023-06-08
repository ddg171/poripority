<template>
  <teleport v-if="props.isShow" to="#app">
    <div id="overlay" class="fixed top-0 z-50 flex items-center justify-center w-full h-screen transition-all bg-gray/90" @click="$emit(`click`)">
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">

interface Props{
    isShow:boolean
}
defineEmits<{(e:'click'):void}>()
const props = withDefaults(defineProps<Props>(), { isShow: false })
</script>
