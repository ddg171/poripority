<template>
  <div v-if="img" class="w-4/5 h-4/5">
    <a
      :href="selectedImg"
      tabindex="0"
      target="_blank"
      title="クリックすると新しいタブで画像を開きます。"
      class="bg-green:75 "
      @click.stop="()=>{}"
    >
      <NuxtPicture
        class="object-contain"
        :src="selectedImg"
        :img-attrs="{ class:'w-full h-full object-contain', alt:'拡大表示',height:'400',width:'400' , decoding: 'async'}"
        :modifiers="{ format: 'webp',q:'70' }"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ImageList } from '~~/types/articles'
import { PictureBoxProp } from '~~/types/components'

interface Props {
    imageList?:ImageList
    selectedId:string|undefined
}
const props = withDefaults(defineProps<Props>(), { imageList: () => [] })

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
    source: []
  }
})

const selectedImg = computed<string|undefined>(() => {
  if (!props.selectedId) { return undefined }
  if (props.imageList.length === 0) { return undefined }
  const i = images.value[props.selectedId]
  return i
})

</script>
