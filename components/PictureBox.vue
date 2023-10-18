<template>
  <NuxtPicture

    :provider="provider"
    :src="props.src"
    class="picture-box opacity-100 transition-opacity duration-500"
    legacy-format="jpeg"
    :img-attrs="imgAttr"
    :modifiers="modifiers"
    :data-loaded="isLoaded"
    @load="isLoaded = true"
  />
</template>

<script setup lang="ts">

const isLoaded = ref(false)

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
// loadイベントが発火しないことがあるため、強制的にロード完了にする
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 5000)
})
</script>
<style scoped lang="scss">
.picture-box[data-loaded="false"]{
  @apply opacity-0
}
</style>
