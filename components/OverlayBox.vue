<template>
  <teleport v-if="props.isShow" to="#app">
    <div id="overlay" class="fixed flex justify-center items-center top-0 w-full h-screen bg-gray/90 transition-all z-50" @click="$emit(`click`)">
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
