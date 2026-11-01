<template>
  <h3
    v-if="$slots.default"
    class="pl-2 text-lg font-semibold text-white border-l-4 border-white border-solid"
  >
    <slot />
  </h3>
</template>

<script setup lang="ts">

</script>
