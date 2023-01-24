
<template>
  <NuxtPicture
    :src="props.webp"
    class="picture-box"
    legacy-format="jpeg"
    :img-attrs="imgAttr"
  />
</template>

<script setup lang="ts">

interface Props {source?:string[]
    webp:string, jpg?:string, alt?:string, title?:string}

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

const props = withDefaults(defineProps<Props>(), { source: () => [], webp: '', jpg: '', alt: '', title: '' })
</script>
