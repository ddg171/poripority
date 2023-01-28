<template>
  <div class=" w-full md:w-3/4w max-h-3/4h">
    <img class="max-w-full max-h-full opacity-100" :src="selectedImg">
  </div>
</template>

<script setup lang="ts">
import { ImageList } from '~~/types/articles'

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

const selectedImg = computed<string|undefined>(() => {
  if (!props.selectedId) { return undefined }
  if (props.imageList.length === 0) { return undefined }
  const i = images.value[props.selectedId]
  return i
})

</script>
