<template>
  <div class="flex flex-col items-center min-h-screen">
    <MyHeader />
    <div class="flex flex-col items-center w-full">
      <ClientPageTitle :title="state.title" :top-img="state.topImg" :subtitles="state.subtitles" />
      <div class="flex flex-col items-center w-full h-full min-h-screen lg:justify-center lg:items-start lg:flex-row">
        <main class="flex flex-col items-center w-full max-w-full bg-transparent md:max-w-3xl ">
          <suspense>
            <template #default>
              <slot />
            </template>
            <template #fallback>
              <div class="flex flex-col w-full h-full p-6 text-white">
                Loading...
              </div>
            </template>
          </suspense>
        </main>
        <div class="sticky top-0 w-full mx-0 md:max-w-3xl lg:w-72  lg:mx-1">
          <aside class="w-full p-4 text-white md:max-w-3xl lg:w-72 min-h-96 bg-darkblue md:p-6 ">
            <ClientCategoryList />
          </aside>
        </div>
      </div>
      <ClientMyFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>

import MyHeader from '~~/components/client/MyHeader.vue'

const pageTitleStore = usePageTitleStore()
const { state } = pageTitleStore

</script>
