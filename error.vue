<template>
  <div class="min-h-screen bg-gray">
    <NuxtLayout name="blog">
      <div
        class="flex flex-col items-center justify-center w-full max-w-full text-white"
      >
        <ClientContentSection class="h-full ">
          <p>
            {{ error?.message||"エラーが発生しました。" }}
          </p>
          <ClientBottomNavigation :left="null" :center="centerNav" :right="null" />
        </clientcontentsection>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { NuxtApp } from '#app'
import { LinkParams, PageTitleProp } from '~~/types'

const centerNav = ref<LinkParams>({ name: 'TOPへ戻る。', path: '/' })
defineProps<{ error: NuxtApp['payload']['error'] }>()
// const handleError = () => clearError({ redirect: '/' })
const pageTitleStore = usePageTitleStore()
const pageTitle:PageTitleProp = {
  title: 'ページを表示できませんでした。',
  subtitles: [],
  topImg: null
}

pageTitleStore.set(pageTitle)
onUnmounted(() => {
  pageTitleStore.init()
})

</script>

  <style>
  p{
      overflow-wrap: anywhere !important;
  }
  </style>
