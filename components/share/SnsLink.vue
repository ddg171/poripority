<template>
  <a :href="props.link" class="flex items-center justify-center w-8 h-8 p-2 border">
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props{
    link:string
}

const props = defineProps<Props>()

</script>
