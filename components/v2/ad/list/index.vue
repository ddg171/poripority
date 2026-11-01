<template>
    <V2AdListFrame>
        <li v-for="a in props.ads" :key="a.id">
            <V2AdCard :ad="a" />
        </li>
    </V2AdListFrame>
</template>

<script setup lang="ts">
import type { Ads } from '~/types/articles';

const props = defineProps<{ ads: Ads[] }>()


</script>