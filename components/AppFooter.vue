<template>
  <footer class="border-t-solid border-t-4 border-red w-full  bg-lightgray text-gray p-2">
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
    <div class="flex md:justify-end  md:h-full  shrink-0">
      <div class="text-sm">
        <p>このWebサイトはリンクフリーです。</p>
        <p>サイト内の情報を引用する際は出典元と閲覧日時を明記してください。</p>
        <p>サイト内の情報の引用によって生じたあらゆる事象について、当サイトの管理者は一切の責任を負いません。</p>
        <p>サイト内で使用している写真・映像の著作権は、記載のない限り権利者に帰属します。</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseURL = config.public.baseURL
</script>
