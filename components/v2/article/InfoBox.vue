<template>
  <div class="flex flex-col gap-1">
    <V2ArticleInfoDateInfo :published-date="props.publishedDate" />
    <V2ArticleInfoCategoryInfo :category="props.category" />
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
