<template>
  <a
    :href="props.href"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center justify-center py-1 px-2  mx-1 text-sm md:text-xl  hover:opacity-75"
  >
    <slot />
    <Icon name="mdi:open-in-new" />
  </a>
</template>
<script setup lang="ts">
interface Props{
    href: string

}

const props = defineProps<Props>()

</script>
