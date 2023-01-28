<template>
  <teleport v-if="props.isShow" to="#layout">
    <div class="fixed flex justify-center items-center top-0 w-screen h-screen bg-gray/75 transition-all z-50" @click="$emit(`click`)">
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">

interface Props{
    isShow:boolean
}

const props = withDefaults(defineProps<Props>(), { isShow: false })
</script>
