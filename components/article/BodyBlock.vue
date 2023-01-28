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
  const parent = img.parentNode
  if (!parent) { return }
  const id = parent.id
  if (!id) { return }
  emits('img-click', id)
}

onMounted(() => {
  nextTick(() => {
    const doc = convertStrToDocument(content.value)
    const imageList = getImgList(doc)
    emits('img-list', imageList)
    const imgs = document.querySelectorAll('article picture')
    imgs.forEach((img) => {
      img.addEventListener('click', imageClickHandler)
    })
  })
})

onBeforeUnmount(() => {
  const imgs = document.querySelectorAll('article picture')
  imgs.forEach((img) => {
    img.removeEventListener('click', imageClickHandler)
  })
})

</script>

<style>

.cms-content{
  display: flex;
  flex-direction: column;

}

.cms-content .img-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cms-content img{
  max-width: 500px;
  margin: 1rem 0;
}

@media screen and (max-width:532px) {
  .cms-content img{
  max-width: 100%;
}
}

.cms-content ul{
  margin-left: 1rem;
}
.cms-content li{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cms-content li::before{
  display: block;
  background-color: white;
  width: 0.5em;
  height: 0.5em;
  margin-right: 0.25em;
  margin-bottom: 0.125em;
  content: "";
}

.cms-content a:hover,
.cms-content a:focus{
  text-decoration: underline;
  font-weight: 500;
}

.cms-content h1,
.cms-content h2,
.cms-content h3{
  padding-left: 0.5rem;
  border-left-style: solid;
  border-color: white;
  border-left-width: 4px;
}

.cms-content h1{
  font-size: 2.5rem !important;
}

.cms-content h2{
  font-size: 2rem !important;
}

.cms-content h3{
  font-size: 1.5rem !important;
}
@media screen and (max-width:767px) {
 .cms-content h1{
  font-size: 2rem !important;
}

.cms-content h2{
  font-size: 1.5rem !important;
}

.cms-content h3{
  font-size: 1.25rem !important;
}
}

</style>
