<template>
  <li class="flex flex-col items-center md:p-1 hover:bg-lightgreen">
    <div class="h-20 w-20">
      <Icon :name="props.name" class="h-20 w-20 " />
    </div>
    <span class="block">
      <slot />
    </span>
  </li>
</template>

<script setup lang="ts">
interface Props {
  name: string
}

const props = withDefaults(defineProps<Props>(), { name: '' })
</script>
