<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="flex flex-col mb-6 text-white cms-content cms-content-width" v-html="content" />
</template>
<script setup lang="ts">
import { Heading, ImageList } from '~~/types/articles'

interface Props{
    content:string|undefined
}

const props = defineProps<Props>()

const emits = defineEmits<{(e:'img-list', v:ImageList):void, (e:'img-click', v:string):void, (e:'heading-list', v:Heading[]):void}>()

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
    const headings = getHeadingList(doc)
    emits('img-list', imageList)
    emits('heading-list', headings)
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

<style lang="postcss">
/* MicroCMSから取得した内容に対するCSS */
/* applyの使用については議論があるが、統一されたスタイルの適用ができるため使用している。 */

.cms-content{
  @apply flex flex-col  text-base leading-8;

}

.cms-content .img-wrapper{
  @apply w-full  flex justify-center items-center my-4;
}

.img-wrapper picture{
  @apply md:w-96 w-64 ;
}

.cms-content img{
  @apply  object-scale-down hover:cursor-pointer;
  }

.cms-content ul{
  @apply ml-4 my-4;
}
.cms-content li{
  @apply flex justify-start items-center;
}
.cms-content li::before{
  content: "//";
  @apply block text-white text-lg font-extrabold mr-2
}
.cms-content a{
  @apply underline font-semibold
}
.cms-content a::after{
  content: url("/assets/svg/open-in-new.svg");
  @apply  h-1 w-1 text-white align-middle;
}
.cms-content a:hover,
.cms-content a:focus{
  @apply  bg-lightgreen/50
}

.cms-content h1,
.cms-content h2,
.cms-content h3{
  @apply pl-2 border-solid border-white border-l-4;
}
.cms-content *:first-child{
  @apply  mt-0;
}

.cms-content h1,
.cms-content h2{
  @apply md:text-4xl text-3xl mt-8 mb-1;
}

.cms-content h3{
  @apply md:text-2xl text-2xl mt-6 mb-1;
}

.cms-content br{
  @apply hidden sm:block;
}
</style>
