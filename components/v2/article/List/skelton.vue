<template>
    <V2ArticleListFrame>
        <li v-for="n in props.numberOfItems" :key="n">
            <V2ArticleCardDummy />
        </li>
    </V2ArticleListFrame>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    numberOfItems?: number
}>(), {
    numberOfItems: 4
})
</script>