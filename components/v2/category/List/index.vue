<template>
    <ul class="flex flex-wrap gap-2">
        <li>
            <V2CategoryListButtonLink :to="`/blog`" :is-selected="!props.selectedCategory">
                全て
            </V2CategoryListButtonLink>
        </li>
        <li v-for="c in props.categories" :key="c.id">
            <V2CategoryListButtonLink :to="`/blog?category=${c.id}`" :is-selected="props.selectedCategory === c.id">
                {{ c.name }}
            </V2CategoryListButtonLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, } from 'vue';
import type { Category } from '~/types/articles';

interface Props {
    categories?: Category[]
    selectedCategory?: string
}
const props = withDefaults(defineProps<Props>(), { categories: () => [], selectedCategory: undefined })
</script>