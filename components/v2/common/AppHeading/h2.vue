<template>
  <V2CommonAppHeadingFrame :is-important="props.isImportant">
    <h2 class="block text-xl font-semibold text-white ">
      <slot />
    </h2>
  </V2CommonAppHeadingFrame>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  isImportant?: boolean
}>(), {
  isImportant: false
})
</script>
