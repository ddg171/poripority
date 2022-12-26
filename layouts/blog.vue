<template>
  <div class="min-h-screen flex flex-col items-center">
    <MyHeader />
    <div class="w-full  min-h-screen flex  flex-col   items-center">
      <div class="title-box bg-darkblue text-white w-full h-1/5h lg:h-1/4h overflow-hidden relative">
        <div v-if="topImg" class="w-full h-full ">
          <ClientPictureBox
            :souce="topImg.souce"
            :alt="topImg.alt"
            :title="topImg.title"
            :webp="topImg.webp"
            :jpg="topImg.jpg"
          />
        </div>
        <div class="w-full h-full absolute ">
          <div class="w-full h-full flex  justify-center items-center">
            <div class="w-full md:w-auto max-w-screen-lg  m-2 p-4 bg-green">
              <h1 class="text-4xl md:text-5xl pb-1 border-solid border-l-8  border-l-lightgray pl-2 flex items-center">
                {{ title }}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full flex justify-center flex-col-reverse lg:flex-row">
        <main class="w-full max-w-full  md:max-w-3xl min-h-screen flex flex-col items-center  bg-transparent  ">
          <slot />
        </main>
        <aside class="w-full lg:w-60  h-60 bg-green text-white sticky top-0 m-0 lg:m-1" />
      </div>

      <footer class="border-t-solid border-t-4 border-red w-full h-32 bg-lightgray ">
        footer
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyHeader from '~~/components/client/MyHeader.vue'
import { PictureBoxProp } from '~~/types'
const title = ref<string>('記事一覧')
const topImg = ref<PictureBoxProp|null>(null)

</script>
