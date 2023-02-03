<template>
  <a :href="props.link" class="h-8 w-8 p-2 flex items-center justify-center border">
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props{
    link:string
}

const props = defineProps<Props>()

</script>
