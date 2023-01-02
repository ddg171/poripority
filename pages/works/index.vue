<template>
  <div class="flex flex-col items-center justify-center w-full text-white">
    <ClientPageTitle :title="title" :top-img="topImg" :subtitles="subtitles" />
    <div class="flex flex-col items-center w-full max-w-screen-xl ">
      <ClientContentSection>
        <ClientHeader2>
          制作物一覧
        </ClientHeader2>
        <ul>
          <ul>
            <li class="w-full p-2 text-lg hover:bg-green focus-within:bg-green md:my-1">
              <NuxtLink :to="`/works#this-site`" class="block w-full h-full hover:underline focus:underline" tabindex="0">
                The Hut of Poripority
              </NuxtLink>
            </li>
            <li class="w-full p-2 text-lg hover:bg-green focus-within:bg-green md:my-1">
              <NuxtLink :to="`/works#wargame`" class="block w-full h-full hover:underline focus:underline" tabindex="0">
                Wargame Replay uploader
              </NuxtLink>
            </li>
            <li class="w-full p-2 text-lg hover:bg-green focus-within:bg-green md:my-1">
              <NuxtLink :to="`/works#yubaba`" class="block w-full h-full hover:underline focus:underline" tabindex="0">
                Firebase湯婆婆
              </NuxtLink>
            </li>
            <li class="w-full p-2 text-lg hover:bg-green focus-within:bg-green md:my-1">
              <NuxtLink :to="`/works`" class="block w-full h-full hover:underline focus:underline" tabindex="0">
                Yodobashic photo maker
              </NuxtLink>
            </li>
          </ul>
        </ul>
      </ClientContentSection>
      <ClientContentSection>
        <ClientWorksArticle id="this-site" :links="linksPrprty">
          <template #name>
            The Hut of Poripority
          </template>
          <template #status>
            運用中
          </template>
          <template #pic>
            <picture class="">
              <source srcset="/images/webp/works-img02-01w640.webp" type="image/webp">
              <img src="/images/works-img02-01w640.jpg" height="400" width="400" alt="">
            </picture>
          </template>
          <template #introduction>
            <p class="works-indent mb-2">
              以前運用していたBloggerから移行すると同時に自分のスキルの確認と復習も兼ねて制作したWebサイト。使用フレームワークはVue3+Nuxt3(SSR)とTailwindCSS。
              バックエンドはGoogle CloudrunとFirebase Hostingを組み合わせている。
              Nuxt2(静的サイト)+Firebaseの組み合わせでWebアプリを制作した経験はあったが、SSR時の挙動の把握にかなり苦労した。
            </p>
            <p class="mb-2">
              制作時の目標は以下の通り。
              <ul class="works-indent mb-2">
                <li>見た目を複雑にしない事</li>
                <li>高速かつ快適に閲覧できる事</li>
              </ul>
              ある程度は達成できていると思う。特に2点目についてはFirebase Hostingからの静的ファイルの配信にかなり助けられている部分があり、
              Firebase様々といったところ。月額100円に届かない費用でこの速度が出るなら万々歳である。
            </p>
            <p class="works-indent mb-2">
              今後も機能追加を行いつつ継続して運用していく予定。
            </p>
          </template>
        </ClientWorksArticle>
        <ClientWorksArticle id="wargame" :links="linksWgm">
          <template #name>
            Wargame Replay uploader
          </template>
          <template #status>
            運用中
          </template>
          <template #pic />
          <template #introduction>
            <p class="works-indent mb-2">
              "Wargame Red dragon"というゲームのリプレイデータを投稿、共有するWebアプリ。
              このアプリ以前に存在していたアップローダーは軒並み終了してしまったのだが、完成した頃にはリプレイの共有手段が公式Discordサーバーに移行していたため、
              知り合いがちまちま投稿してくれる以外に利用者はほとんどいないという状況になっている。
            </p>
            <p class="works-indent mb-2">
              中身はフロントエンドがVue.js、バックエンドがExpress.jsのアプリをGAEで動かすという単純な物。
              更にデータはFirestore、リプレイファイルはCloud storageに保存するのでとても安価に運用できている。
              実際請求額が100円を超えたことはほぼ無い。
            </p>
            <p>バックエンドありのアプリを作ったという意味では、完成度はともかく良い経験だったと思う。</p>
          </template>
        </ClientWorksArticle>
        <ClientWorksArticle id="yubaba" :links="linksYbb">
          <template #name>
            Firebase湯婆婆
          </template>
          <template #status>
            運用中
          </template>
          <template #pic />
          <template #introduction>
            <p class="works-indent mb-2">
              Qiitaで実施された2020年のアドベントカレンダー「湯婆婆 Advent Calendar 2020」に参加するために制作。
              当時Firebaseで自分が理解できた事をまとめるために制作するという意味合いもあったが、
              その後FirebaseSDKもVue.jsもバージョンが上がってしまったのでコードを見返しても余り役に立たなくなってしまった。
            </p>
            <p class="works-indent mb-2">
              Firestoreのセキュリティルールから始まり、リアルタイム監視やCloud Functionを使ったプッシュ通知とデータの自動削除など、
              結構盛りだくさんなので完成したときにはそこそこ嬉しかった記憶がある。
            </p>
            <p>一応費用の請求があるのだが、1円とか2円とかもはや駄菓子も変えないような額なので懐にも優しい。</p>
          </template>
        </ClientWorksArticle>
      </ClientContentSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LinkParams, PictureBoxProp } from '~~/types'

const title = ref<string>('制作物')
const topImg = ref<PictureBoxProp>({
  webp: '/images/webp/works-img01w2000.webp',
  souce: ['/images/webp/works-img01w640.webp 640w,/images/webp/works-img01w1270.webp 1024w,'],
  jpg: '/images/webp/works-img01w640.jpg',
  alt: '',
  title: 'TOP画像'
})

const subtitles = ref<string[]>([
  'これまで制作したアプリを紹介'
])

const linksPrprty = ref<LinkParams[]>([{
  name: 'Webサイト',
  path: '/'
}])

const linksWgm = ref<LinkParams[]>([{
  name: 'Webサイト',
  path: 'https://wargamerts-tool.com/'
}])

const linksYbb = ref<LinkParams[]>([{
  name: 'Webサイト',
  path: 'https://yubaba-7bad4.web.app/'
}, {
  name: 'Qiitaでの説明記事',
  path: ''
}])

</script>

<style>
.works-indent{
  text-indent: 1em;
}
</style>
