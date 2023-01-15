<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-works">
    <ClientPageTitle />
    <div class="flex flex-col items-center w-full max-w-screen-xl ">
      <ClientContentSection>
        <ClientHeader2 class="mb-2">
          制作物について
        </ClientHeader2>
        <div class="flex">
          <div class="">
            <p class="mb-1 works-indent">
              筆者が最初に学習したプログラミング言語はPythonだったのだが、色々あってFirebaseを触るようになり、同時にフロントエンドが必要ということでVuejsを触り、基本が大事と言ってバニラJSを触っているうちに気がつけばJavascriptメインになっていた。
              途中で投げたものとかも結構あるが、こうやって並べてみるとなんかそれっぽくなったので安心している。
            </p>
            <p class="works-indent">
              大体のアプリはJavascriptで開発している。フレームワークはVue/Nuxtが主。デプロイ先にはGCPのサービスを使っている。あとFirebaseは最初に触ったバックエンドということもあって結構好き。
            </p>
            <p>
              世の中的にはクラウドはAWS、フロントエンドはReact/Nextという話なので、そのうちここにもAWS(の無料枠)とReactを使った制作物が並ぶかもしれない。
            </p>
          </div>
        </div>
      </ClientContentSection>

      <ClientContentSection class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <ClientIntersectionWrapper>
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
              <p class="mb-1 works-indent">
                以前運用していたBloggerから移行すると同時に自分のスキルの確認と復習も兼ねて制作したWebサイト。使用フレームワークはVue3+Nuxt3(SSR)とTailwindCSS。
                バックエンドはGoogle CloudrunとFirebase Hostingを組み合わせている。
                Nuxt2(静的サイト)+Firebaseの組み合わせでWebアプリを制作した経験はあったが、SSR時の挙動の把握にかなり苦労した。
              </p>
              <p class="mb-1 works-indent">
                今後も機能追加を行いつつ継続して運用していく予定。
              </p>
            </template>
          </ClientWorksArticle>
        </ClientIntersectionWrapper>
        <ClientIntersectionWrapper>
          <ClientWorksArticle id="wargame" :links="linksWgm">
            <template #name>
              Wargame Replay uploader
            </template>
            <template #status>
              運用中
            </template>
            <template #pic>
              <picture class="">
                <source srcset="/images/webp/works-img02-02w640.webp" type="image/webp">
                <img src="/images/works-img02-02w640.jpg" height="400" width="400" alt="">
              </picture>
            </template>
            <template #introduction>
              <p class="mb-1 works-indent">
                "Wargame Red dragon"というゲームのリプレイデータを投稿、共有するWebアプリ。
                このアプリ以前に存在していたアップローダーは軒並み終了してしまったのだが、完成した頃にはリプレイの共有手段が公式Discordサーバーに移行していたため、
                知り合いがちまちま投稿してくれる以外に利用者はほとんどいないという状況になっている。
              </p>
              <p class="mb-1 works-indent">
                中身はフロントエンドがVue.js、バックエンドがExpress.jsのアプリをGAEで動かすという単純な物だが、完成度はともかく良い経験だったと思う。
              </p>
            </template>
          </ClientWorksArticle>
        </ClientIntersectionWrapper>
        <ClientIntersectionWrapper>
          <ClientWorksArticle id="yubaba" :links="linksYbb">
            <template #name>
              Firebase湯婆婆
            </template>
            <template #status>
              運用中
            </template>
            <template #pic>
              <picture class="">
                <source srcset="/images/webp/works-img02-03w640.webp" type="image/webp">
                <img src="/images/works-img02-03w640.jpg" height="400" width="400" alt="">
              </picture>
            </template>
            <template #introduction>
              <p class="mb-1 works-indent">
                Qiitaで実施された2020年のアドベントカレンダー「湯婆婆 Advent Calendar 2020」に参加するために制作。
              </p>
              <p class="mb-1 works-indent">
                Firestoreのセキュリティルールから始まり、リアルタイム監視やCloud Functionを使ったプッシュ通知とデータの自動削除など、
                結構盛りだくさんなので完成したときにはそこそこ嬉しかった記憶がある。
              </p>
              <p>一応費用の請求があるのだが、1円とか2円とかもはや駄菓子も変えないような額なので懐にも優しい。</p>
            </template>
          </ClientWorksArticle>
        </ClientIntersectionWrapper>
        <ClientIntersectionWrapper>
          <ClientWorksArticle id="yodo" :links="[]">
            <template #name>
              Yodobashic photo maker
            </template>
            <template #status>
              制作中断
            </template>
            <template #pic>
              <picture class="">
                <source srcset="/images/webp/works-img02-04w640.webp" type="image/webp">
                <img src="/images/works-img02-04w640.jpg" height="400" width="400" alt="">
              </picture>
            </template>
            <template #introduction>
              <p class="mb-1 works-indent">
                人生で初めて作ったGUIアプリ。画像のEXIF情報を文字入れした上で縮小して出力するという物で今でもたまに使っている。
              </p>
              <p class="mb-1 works-indent">
                中身はPython+TKinterという構成で、完成したときはかなり嬉しかった記憶がある、
                出力画像にEXIFが乗らないという問題もあるが、SNSに投稿する場合はそのほうが安全なのでそのままにしている。
              </p>
              <p>このアプリを作ってからしばらくしてJavaScriptばかり触るようになってしまったため、もはや中のコードがわからなくなり放置している。</p>
              <p>気が向いたらFletというフレームワークで作り直すかもしれない。</p>
            </template>
          </ClientWorksArticle>
        </ClientIntersectionWrapper>
      </ClientContentSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { makeDynamicMeta } from '~~/components/useHeadHelper'
import { LinkParams, PictureBoxProp } from '~~/types'
const { set, init } = usePageTitleStore()

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
  path: 'https://qiita.com/ddg171/items/bbc445ef427af5addefb'
}])

const config = useRuntimeConfig()
const headTitle = title.value + '|' + config.public.siteName
const description = subtitles.value[0] || ''

const dynamicMeta = makeDynamicMeta(headTitle, description, 'all', 'website')
useHead(dynamicMeta)

onMounted(() => {
  nextTick(() => {
    set({
      title: title.value,
      topImg: topImg.value,
      subtitles: subtitles.value
    })
  })
})

onBeforeUnmount(() => {
  init()
})

</script>

<style>
.works-indent{
  text-indent: 1em;
}
</style>
