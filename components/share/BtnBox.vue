<template>
  <div class="flex gap-1">
    <ShareTwttrLink :text="props.title" />
    <ShareRedditLink :text="props.title" />
    <ShareCopyUrlBtn />
  </div>
</template>

<script setup lang="ts">
interface Props{
    title?:string
}

const props = defineProps<Props>()
</script>
