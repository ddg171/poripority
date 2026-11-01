<template>
  <h2 
    v-if="$slots.default"
    class="pl-2 text-xl font-semibold text-white border-l-4 border-white border-solid">
    <slot />
  </h2>
</template>

<script setup lang="ts">

</script>
