<template>
  <footer class="border-t-solid border-t-4 border-red w-full md:h-60 bg-lightgray text-gray">
    <div class="w-full h-full p-2  md:p-4 flex flex-col justify-start items-center md:flex-row md:h-full md:w-auto">
      <div class="w-full flex flex-col items-start mb-2 md:h-full">
        <div class="flex flex-wrap mb-2 md:mb-0">
          <h2 class="text-2xl mr-2">
            The hut of Proporpty(WIP)
          </h2>
          <ShareBtnBox title="The hut of Poripority" :url="baseURL" />
        </div>
        <p class="text-xl ">
          Author: Hata_kaze
        </p>
        <div class="flex gap-3 items-baseline">
          <h3 class="text-xl">
            SNS
          </h3>
          <ContactBox />
        </div>
      </div>
      <div class="text-sm w-full flex flex-col items-start mb-2 md:justify-end md:h-full md:w-auto shrink-0">
        <p>このWebサイトはリンクフリーです。</p>
        <p>サイト内の情報を引用する際は出典元と閲覧日時を明記してください。</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.public.baseURL
</script>
