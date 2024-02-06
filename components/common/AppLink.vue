<template>
  <NuxtLink :to="props.to" class="block w-full h-full hover:underline focus:underline" tabindex="0" @click.stop="()=>{}">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    to?:string
}

const props = withDefaults(defineProps<Props>(), { to: '' })
</script>
