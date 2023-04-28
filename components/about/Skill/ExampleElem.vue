<template>
  <li class="w-full md:w-1/3 bg-lightgreen">
    <div class="w-full h-full p-4 ">
      <h4 class="mb-2 text-xl font-bold">
        {{ props.name }}
      </h4>
      <h5 class="text-lg">
        使用技術
      </h5>
      <ul class="mb-2 ">
        <li v-for="t,i in props.techs" :key="i">
          {{ t }}
        </li>
      </ul>
      <h5 class="text-lg">
        概要
      </h5>
      <slot />
    </div>
  </li>
</template>

<script lang="ts" setup>

const props = defineProps<{
  name: string;
  techs: string[];
}>()
</script>
