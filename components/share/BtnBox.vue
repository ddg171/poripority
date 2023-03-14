<template>
  <div class="flex gap-1">
    <ShareTwttrLink :text="props.title" :url="props.url" />
    <ShareRedditLink :text="props.title" :url="props.url" />
    <ShareCopyUrlBtn :url="props.url" />
  </div>
</template>

<script setup lang="ts">
interface Props{
    title?:string
    url?:string
}

const props = defineProps<Props>()
</script>
