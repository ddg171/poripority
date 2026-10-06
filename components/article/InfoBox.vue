<template>
  <div class="flex flex-col gap-2">
    <p class="ml-1 flex align-items-center justify-start">
      <Icon name="ant-design:calendar-outlined" class=" mr-1 text-xl text-lightgreen" />
      <span class="text-sm text-lightgray">
        {{ publishedDate }}
      </span>
    </p>
    <div v-if="props.category" class="ml-1 flex gap-1">
      <Icon name="dashicons:category" class=" mr-1 text-xl text-lightgray" />
      <NuxtLink :to="`/blog?category=${props.category.id}`"
        class="w-fit px-2 py-1 bg-gray/75 border border-lightgreen text-xs text-white hover:bg-gray  hover:cursor-pointer"
        @click.stop="() => { }"># {{ props.category.name }}</NuxtLink>
    </div>

    <blockquote>
      <p />
    </blockquote>
  </div>
</template>

<script setup lang="ts">
import { parseISO } from 'date-fns';
import { defineProps, } from 'vue';
import type { Category } from '~~/types/articles';

interface Props {
  publishedDate?: string | null
  category?: Category
}

const props = defineProps<Props>()

const publishedDate = computed<string>(() => articleDate(parseISO(props.publishedDate || '')))

</script>
