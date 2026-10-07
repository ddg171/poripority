<!-- eslint-disable vue/no-v-html -->
<template>
  <article id="article-body" class="flex flex-col mb-4 text-white cms-content cms-content-width" v-html="content" />
</template>
<script setup lang="ts">
import DOMPurify from 'dompurify';
import { defineEmits, defineProps, } from 'vue';
import type { Heading, ImageList } from '~~/types/articles';

interface Props {
  content: string | undefined
}

const props = defineProps<Props>()

const emits = defineEmits<{ (e: 'img-list', v: ImageList): void, (e: 'img-click', v: string): void, (e: 'heading-list', v: Heading[]): void }>()

const content = computed<string>(() => {
  const convertedContent = convertContent(props.content)
  return DOMPurify.sanitize ? DOMPurify.sanitize(convertedContent) : convertedContent
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

.cms-content {
  @apply flex flex-col font-normal text-base leading-relaxed;
}

.cms-content strong {
  @apply contents;
}

.cms-content .img-wrapper {
  @apply w-full flex justify-center items-center my-2;
}

.img-wrapper picture {
  @apply md:w-96 w-full flex justify-center items-center;
}

.cms-content img {
  @apply object-scale-down hover:cursor-pointer;
}

.cms-content iframe {
  max-width: 100%;
}

.cms-content ul {
  @apply md:ml-4 ml-2 mb-4;
}

.cms-content li {
  @apply flex justify-start items-center text-sm;
}

.cms-content li::before {
  content: "//";
  @apply self-start text-white text-base font-extrabold mr-2
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
  @apply bg-lightgreen/50
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
  @apply inline-block h-6 w-6 mr-1 mb-1 bg-lightgreen;
}

.cms-content h3::before,
.cms-content h4::before {
  @apply inline-block h-5 w-5 mr-1 mb-1;
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
