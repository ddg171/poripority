<template>
  <div class="min-h-screen bg-gray">
    <NuxtLayout name="default">
      <div class="flex flex-col items-center justify-center w-full h-full">
        <PageTop />
        <div
          class="flex flex-col items-center justify-center w-full h-full max-w-screen-xl text-white"
        >
          <ContentSection class="h-full ">
            <p>
              {{ error?.message||"エラーが発生しました。" }}
            </p>
            <BottomNavigation :left="null" :center="centerNav" :right="null" />
          </Contentsection>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { NuxtApp } from '#app'
import { LinkParams, PageTitleProp } from '~~/types/components'

const centerNav = ref<LinkParams>({ name: 'TOPへ', path: '/' })
defineProps<{ error: NuxtApp['payload']['error'] }>()
// const handleError = () => clearError({ redirect: '/' })
const pageTitleStore = usePageTitleStore()

const pageTitle:PageTitleProp = {
  title: 'ページを表示できませんでした。',
  subtitles: [],
  topImg: null
}

pageTitleStore.set(pageTitle)

onBeforeUnmount(() => {
  pageTitleStore.init()
  clearError()
})

</script>

  <style>
  p{
      overflow-wrap: anywhere !important;
  }
  </style>
