<template>
  <footer class="border-t-solid border-t-4 border-red w-full h-60 bg-lightgray text-gray">
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
          <ul class="flex gap-2 flex-wrap">
            <li>
              <CommonExternalLink to="https://twitter.com/hata_kaze" title="Twitter">
                <Icon name="mdi:twitter" class="bg-twttr text-white p-1" />
                Twitter
              </CommonExternalLink>
            </li>
            <li>
              <CommonExternalLink to="https://www.instagram.com/hata_kaze" title="Instagram">
                <Icon name="mdi:instagram" class="h-4 w-4" />

                Instagram
              </CommonExternalLink>
            </li>
            <li>
              <CommonExternalLink to="https://github.com/ddg171" title="Github">
                <Icon name="mdi:github" class="h-4 w-4" />

                Github
              </CommonExternalLink>
            </li>
            <li>
              <CommonExternalLink to="https://qiita.com/ddg171" title="Qiita">
                Qiita
              </CommonExternalLink>
            </li>
          </ul>
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
