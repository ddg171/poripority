<template>
  <footer class="border-t-solid border-t-4 border-red w-full h-60 bg-lightgray text-gray">
    <div class="w-full h-full p-2  md:p-4 flex flex-col justify-start items-center md:flex-row md:h-full md:w-auto">
      <div class="w-full flex flex-col items-start mb-2 md:h-full">
        <h2 class="text-2xl">
          The hut of Proporpty(WIP)
        </h2>
        <p class="text-xl mb-1">
          Author: Hata_kaze
        </p>
        <div class="flex gap-3 items-baseline">
          <h3 class="text-xl">
            SNS
          </h3>
          <ul class="flex gap-2">
            <li>
              <CommonExternalLink to="https://twitter.com/hata_kaze">
                Twitter
              </CommonExternalLink>
            </li>
            <li>
              <CommonExternalLink to="https://github.com/ddg171">
                Github
              </CommonExternalLink>
            </li>
            <li>
              <CommonExternalLink to="https://qiita.com/ddg171">
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
