<template>
  <V2CommonAppHeadingFrame :is-important="props.isImportant">

    <h3 class="block text-lg font-semibold text-white ">
      <slot />
    </h3>
  </V2CommonAppHeadingFrame>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  isImportant?: boolean
}>(), {
  isImportant: false
})
</script>
