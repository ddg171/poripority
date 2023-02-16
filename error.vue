<template>
  <div class="min-h-screen bg-gray">
    <NuxtLayout name="default">
      <pageTop />
      <div
        class="flex flex-col items-center justify-center w-full max-w-full text-white"
      >
        <CommonContentWidthBox>
          <ContentSection class="h-full w-full">
            <p>
              {{ error?.message||"エラーが発生しました。" }}
            </p>
            <BottomNavigation :left="null" :center="centerNav" :right="null" />
          </Contentsection>
        </CommonContentWidthBox>
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

const loadingStore = useLoadingStore()
onMounted(() => {
  nextTick(() => {
    loadingStore.set(true)
  })
})

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
