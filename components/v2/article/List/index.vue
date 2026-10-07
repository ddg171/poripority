<template>
    <V2ArticleListFrame>
        <li v-for="a in props.articles" :key="a.id">
            <V2ArticleCard :article="a" />
        </li>
    </V2ArticleListFrame>
</template>

<script setup lang="ts">
import type { Article } from '~/types/articles';

const props = defineProps<{ articles: Article[] }>()


</script>