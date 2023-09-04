<template>
  <NuxtPicture

    :provider="provider"
    :src="props.src"
    class="picture-box"
    legacy-format="jpeg"
    :img-attrs="imgAttr"
    :modifiers="modifiers"
  />
</template>

<script setup lang="ts">

interface Props {
    src:string, alt?:string, title?:string, fromCms?:boolean}

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

const props = withDefaults(defineProps<Props>(), { source: () => [], src: '', alt: '', title: '', fromCMS: false })

const provider = computed(() => {
  return props.fromCms ? 'imgix' : 'ipx'
})

const modifiers = computed(() => {
  return props.fromCMS
    ? {
        fm: 'webp',
        decoding: 'async'

      }
    : {}
})
</script>
