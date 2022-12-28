<template>
  <div class="min-h-screen flex flex-col items-center">
    <MyHeader />
    <div class="w-full  min-h-screen flex  flex-col   items-center">
      <ClientPageTitle :title="state.title" :top-img="state.topImg" :subtitles="state.subtitles" />
      <div class="w-full h-full flex justify-center flex-col lg:flex-row">
        <main class="w-full max-w-full  md:max-w-3xl min-h-screen flex flex-col items-center  bg-transparent  ">
          <slot />
        </main>
        <div class="w-full md:max-w-3xl lg:w-72 max-h-96 sticky top-0  mx-0 lg:mx-1">
          <aside class="w-full md:max-w-3xl lg:w-72 min-h-96 bg-darkblue text-white p-4 md:p-6  ">
            <ClientCategoryList />
          </aside>
        </div>
      </div>

      <footer class="border-t-solid border-t-4 border-red w-full h-32 bg-lightgray ">
        footer
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>

import MyHeader from '~~/components/client/MyHeader.vue'

const pageTitleStore = usePageTitleStore()
const { state } = pageTitleStore

</script>
