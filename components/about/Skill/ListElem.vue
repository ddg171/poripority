<template>
  <li class="text-center">
    <div class="h-40 w-40 bg-darkblue">
      <Icon :name="props.name" class="h-40 w-40" />
    </div>
    <span>
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
