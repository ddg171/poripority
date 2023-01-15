
<template>
  <picture class="picture-box w-full h-full flex justify-center items-center">
    <!-- 最大サイズ以外のWebp -->
    <source
      v-for="s,i in props.souce"
      :key="i"
      type="image/webp"
      media="(max-width:1024px)"
      :srcset="s"
      sizes="(max-width: 640px) 450px, 970w"
    >
    <!-- 一番大きいWebp -->
    <source type="image/webp" :srcset="webp">
    <img
      class="min-h-full min-w-full object-cover "
      :src="props.jpg"
      :alt="props.alt"
      :title="props.title"
      decoding="async"
      height="500"
      width="500"
    >
  </picture>
</template>

<script setup lang="ts">

interface Props {souce?:string[]
    webp:string, jpg:string, alt:string, title:string}

const props = withDefaults(defineProps<Props>(), { souce: () => [], webp: '', jpg: '', alt: '', title: '' })
</script>
