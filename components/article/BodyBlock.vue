<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="flex flex-col gap-4 text-white cms-content cms-content-width mb-6" v-html="content" />
</template>
<script setup lang="ts">
import { ImageList } from '~~/types/articles'

interface Props{
    content:string|undefined
}

const props = defineProps<Props>()

const emits = defineEmits<{(e:'img-list', v:ImageList):void, (e:'img-click', v:string):void}>()

const content = ref<string>(convertContent(props.content))

const imageClickHandler = (e:Event):void => {
  const img = e.target
  if (!img) { return }
  const id = img.id
  if (!id) { return }
  emits('img-click', id)
}

onMounted(() => {
  nextTick(() => {
    const doc = convertStrToDocument(content.value)
    const imageList = getImgList(doc)
    emits('img-list', imageList)
    const imgs = document.querySelectorAll('picture')
    imgs.forEach((img) => {
      img.addEventListener('click', imageClickHandler)
    })
  })
})

onBeforeUnmount(() => {
  const imgs = document.querySelectorAll('picture')
  imgs.forEach((img) => {
    img.removeEventListener('click', imageClickHandler)
  })
})

</script>
