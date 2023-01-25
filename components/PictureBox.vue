
<template>
  <NuxtPicture
    v-if="!props.fromCMS"
    :src="props.webp"
    class="picture-box"
    legacy-format="jpeg"
    :img-attrs="imgAttr"
  />
  <picture v-else class="picture-box ">
    <!-- 最大サイズ以外のWebp -->
    <source
      v-for="s,i in props.source"
      :key="i"
      type="image/webp"
      media="(max-width:1024px)"
      :srcset="s"
      sizes="(max-width: 640px) 450px, 970w"
    >
    <!-- 一番大きいWebp -->
    <source type="image/webp" :srcset="webp">
    <img
      class="img-inside-picture"
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

interface Props {
    webp:string, alt?:string, title?:string, fromCMS?:boolean}

const imgAttr = computed(() => {
  return {
    class: 'img-inside-picture',
    height: 400,
    width: 400,
    decoding: 'async',
    alt: props.alt || '',
    title: props.title || ''
  }
})

const props = withDefaults(defineProps<Props>(), { source: () => [], webp: '', jpg: '', alt: '', title: '', fromCMS: false })
</script>
