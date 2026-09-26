<template>
  <V2CommonAppHeadingFrame :is-important="props.isImportant">
    <h1 class="block text-2xl font-semibold text-white ">
      <slot />
    </h1>
  </V2CommonAppHeadingFrame>

</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  isImportant?: boolean
}>(), {
  isImportant: false
})
</script>
