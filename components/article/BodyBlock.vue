<!-- eslint-disable vue/no-v-html -->
<template>
  <article id="article-body" class="font-normal text-base leading-relaxed text-white cms-content" v-html="content" />
</template>
<script setup lang="ts">
import DOMPurify from 'dompurify';
import type { Heading, ImageList } from '~~/types/articles';

interface Props {
  content: string | undefined
}

const props = defineProps<Props>()

const emits = defineEmits<{ (e: 'img-list', v: ImageList): void, (e: 'img-click', v: string): void, (e: 'heading-list', v: Heading[]): void }>()

const content = computed<string>(() => {
  if (!props?.content) { return '' }
  return DOMPurify.sanitize ? DOMPurify.sanitize(props?.content, {
    ADD_ATTR: ['target','iframe'],
  }) : props.content
})

const imageClickHandler = (e: Event): void => {
  const img = e?.target
  if (!img) { return }
  const parent = img?.parentNode
  if (!parent) { return }
  const id = parent?.id
  if (!id) { return }
  emits('img-click', id)
}

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      const doc = convertStrToDocument(content.value)
      const imageList = getImgList(doc)
      const headings = getHeadingList(doc)
      emits('img-list', imageList)
      emits('heading-list', headings)
      const imgs = document.querySelectorAll('article#article-body picture')
      imgs.forEach((img) => {
        img.addEventListener('click', imageClickHandler)
      })
    }, 150)
  })
})

onBeforeUnmount(() => {
  const imgs = document.querySelectorAll('article#article-body picture')
  imgs.forEach((img) => {
    img.removeEventListener('click', imageClickHandler)
  })
})

</script>

<style lang="postcss">
/* MicroCMSから取得した内容に対するCSS */
/* applyの使用については議論があるが、統一されたスタイルの適用ができるため使用している。 */
br {
  display: contents;
  height: 0;
}

.cms-content strong,
.cms-content b,
.cms-content em,
.cms-content i {
  @apply contents;
}

.cms-content .img-wrapper {
  @apply w-full flex justify-center items-center my-6;
}

.img-wrapper picture {
  @apply md:w-96 w-full flex justify-center items-center mx-4 md:mx-2;
}

.cms-content img {
  @apply object-scale-down hover:cursor-pointer;
}

.cms-content iframe {
  @apply mx-auto my-2 max-w-full;
  min-width:300px;
  min-height:200px;

}

.cms-content .iframe-ad {
  @apply w-full flex flex-col my-2 p-2 items-center bg-white;
}

.cms-content .iframe-ad:empty{
  @apply h-16 w-16;
}

.cms-content ul {
  @apply md:ml-4 ml-2 mb-2;
}

.cms-content li {
  @apply flex justify-start items-center text-sm;
}

.cms-content li::before {
  content: "//";
  @apply self-start text-white text-base font-extrabold mr-2;
}

.cms-content a {
  @apply underline font-semibold;
}

.cms-content a::after {
  content: url("/assets/svg/open-in-new.svg");
  @apply h-1 w-1 text-white align-middle;
}

.cms-content a:hover,
.cms-content a:focus {
  @apply bg-lightgreen/50;
}

.cms-content h1::before,
.cms-content h2::before,
.cms-content h3::before,
.cms-content h4::before {
  content: "";
  @apply inline-block align-bottom;
}

.cms-content h1::before,
.cms-content h2::before {
  @apply inline-block h-6 w-6 md:h-7 md:w-7 mr-1 mb-1 md:mb-1 bg-lightgreen;
}

.cms-content h3::before,
.cms-content h4::before {
  @apply inline-block h-4 w-4 md:h-5 md:w-5 mx-1 mb-1 mt-4;
}

.cms-content h3::before {
  @apply bg-green;
}

.cms-content h4::before {
  @apply bg-green/50;
}

.cms-content *:first-child {
  @apply mt-0;
}

.cms-content h1,
.cms-content h2 {
  @apply md:text-3xl text-2xl mt-8 mb-2 font-bold;
}

.cms-content h3 {
  @apply md:text-xl text-lg mt-4 mb-2 font-bold;
}

.cms-content h4 {
  @apply md:text-lg text-base mt-2 mb-2 font-semibold;
}

.cms-content code {
  @apply block bg-gray text-orange p-4 my-2 overflow-x-auto whitespace-pre-wrap w-full;
  user-select: all;
}
</style>
