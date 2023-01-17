<template>
  <a :href="props.to" class="block w-full h-full hover:underline focus:underline" target="_blank" tabindex="0">
    <span>
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
  interface Props {
      to?:string
  }

const props = withDefaults(defineProps<Props>(), { to: '' })
</script>
