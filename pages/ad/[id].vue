<template>
    <div class="white">ad:{{id || "unknown"}}</div>

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'ad'
})


const config = useRuntimeConfig()
const route = useRoute()

const id = route.params.id
</script>
