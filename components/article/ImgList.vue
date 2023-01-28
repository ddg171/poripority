<template>
  <ul class="flex  items-center">
    <li v-for="i in props.imgList" :key="i.id" class="p-2" @click="$emit('click',i.id)">
      <img :src="crop(i.url)" alt="画像を表示">
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ImageList } from '~~/types/articles'

interface Props {
    imgList:ImageList
}

defineEmits<{(e:'click', v:string):void}>()

const props = withDefaults(defineProps<Props>(), { imgList: () => [] })

const crop = (url:string, size:number = 64):string => {
  const arg = {
    url,
    width: 64,
    height: 64
  }
  return cropSquare(arg, false, size).url
}

</script>
