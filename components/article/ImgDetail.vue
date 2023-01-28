<template>
  <div v-if="img" class="w-3/4w h-3/4h">
    <PictureBox :webp="img.webp" :jpg="img.jpg" :from-c-m-s="img.fromCMS" :alt="img.alt" />
  </div>
</template>

<script setup lang="ts">
import { ImageList } from '~~/types/articles'
import { PictureBoxProp } from '~~/types/components'

interface Props {
    imageList:ImageList
    selectedId:string|undefined
}
const props = withDefaults(defineProps<Props>(), { imageList: () => [], img: undefined })

const images = computed<{[T:string]:string}>(() => {
  const obj:{[T:string]:string} = {}
  if (props.imageList.length === 0) { return obj }
  props.imageList.forEach((i) => {
    obj[i.id] = i.url
  })
  return obj
})

const img = computed<PictureBoxProp|undefined>(() => {
  if (!selectedImg.value) { return undefined }
  const jpg = selectedImg.value + '?q=70'
  const webp = jpg + '&fm=webp'
  const alt = ''
  const title = ''
  return {
    webp,
    jpg,
    alt,
    title,
    source: [],
    fromCMS: true
  }
})

const selectedImg = computed<string|undefined>(() => {
  if (!props.selectedId) { return undefined }
  if (props.imageList.length === 0) { return undefined }
  const i = images.value[props.selectedId]
  return i
})

</script>
