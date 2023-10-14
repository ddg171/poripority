<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-works">
    <div id="top-box" class="w-full mb-4 h-1/3h lg:h-3/4h max-h-960p min-h-240p">
      <PageTop :title="title" :top-img="topImg" :subtitles="subtitles" />
    </div>

    <div class="flex flex-col items-center w-full max-w-screen-xl ">
      <ContentSection>
        <AppHeading2 class="mb-2">
          制作物について
        </AppHeading2>
        <WorksParaBox>
          <CommonAppApra>
            筆者が最初に学習したプログラミング言語はPythonだったのだが、色々あってFirebaseを触るようになり、同時にフロントエンドが必要ということでVuejsを触り、基本が大事と言ってバニラJSを触っているうちに気がつけばJavascriptメインになっていた。
            途中で投げたものとかも結構あるが、こうやって並べてみるとなんかそれっぽくなったので安心している。
          </CommonAppApra>
          <CommonAppApra>
            大体のアプリはJavascriptで開発している。フレームワークはVue/Nuxtが主。デプロイ先にはGCPのサービスを使っている。あとFirebaseは最初に触ったバックエンドということもあって結構好き。
          </CommonAppApra>
          <CommonAppApra>
            世の中的にはクラウドはAWS、フロントエンドはReact/Nextという話なので、そのうちここにもAWS(の無料枠)とReactを使った制作物が並ぶかもしれない。
          </CommonAppApra>
        </WorksParaBox>
      </ContentSection>

      <ContentSection>
        <div class="grid w-full h-full grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <IntersectionWrapper>
            <WorksArticle id="this-site" :links="linksPrprty">
              <template #name>
                The Hut of Poripority
              </template>
              <template #status>
                運用中
              </template>
              <template #pic>
                <NuxtPicture
                  class="picture-box"
                  src="/images/webp/works-img02-01w2000.webp"
                  legacy-format="jpeg"
                  :img-attrs="imgAttr"
                />
              </template>
              <template #introduction>
                <CommonAppApra>
                  以前運用していたBloggerから移行すると同時に自分のスキルの確認と復習も兼ねて制作したWebサイト。使用フレームワークはVue3+Nuxt3(SSR)とTailwindCSS。
                  バックエンドはGoogle CloudrunとFirebase Hostingを組み合わせている。
                  Nuxt2(静的サイト)+Firebaseの組み合わせでWebアプリを制作した経験はあったが、SSR時の挙動の把握にかなり苦労した。
                </CommonAppApra>
                <CommonAppApra>
                  今後も機能追加を行いつつ継続して運用していく予定。
                </CommonAppApra>
              </template>
            </WorksArticle>
          </IntersectionWrapper>
          <IntersectionWrapper>
            <WorksArticle id="wargame" :links="linksWgm">
              <template #name>
                Wargame Replay uploader
              </template>
              <template #status>
                運用中
              </template>
              <template #pic>
                <NuxtPicture
                  class="picture-box"
                  src="images/webp/works-img02-02w640.webp"
                  legacy-format="jpeg"
                  :img-attrs="imgAttr"
                />
              </template>
              <template #introduction>
                <CommonAppApra>
                  "Wargame Red dragon"というゲームのリプレイデータを投稿、共有するWebアプリ。
                  このアプリ以前に存在していたアップローダーは軒並み終了してしまったのだが、完成した頃にはリプレイの共有手段が公式Discordサーバーに移行していたため、
                  知り合いがちまちま投稿してくれる以外に利用者はほとんどいないという状況になっている。
                </CommonAppApra>
                <CommonAppApra>
                  中身はフロントエンドがVue.js、バックエンドがExpress.jsのアプリをGAEで動かすという単純な物だが、完成度はともかく良い経験だったと思う。
                </CommonAppApra>
              </template>
            </WorksArticle>
          </IntersectionWrapper>
          <IntersectionWrapper>
            <WorksArticle id="yubaba" :links="linksYbb">
              <template #name>
                Firebase湯婆婆
              </template>
              <template #status>
                運用中
              </template>
              <template #pic>
                <NuxtPicture
                  class="picture-box"
                  src="images/webp/works-img02-03w640.webp"
                  legacy-format="jpeg"
                  :img-attrs="imgAttr"
                />
              </template>
              <template #introduction>
                <CommonAppApra>
                  Qiitaで実施された2020年のアドベントカレンダー「湯婆婆 Advent Calendar 2020」に参加するために制作。
                </CommonAppApra>
                <CommonAppApra>
                  Firestoreのセキュリティルールから始まり、リアルタイム監視やCloud Functionを使ったプッシュ通知とデータの自動削除など、
                  結構盛りだくさんなので完成したときにはそこそこ嬉しかった記憶がある。
                </CommonAppApra>
                <CommonAppApra>一応費用の請求があるのだが、1円とか2円とかもはや駄菓子も変えないような額なので懐にも優しい。</CommonAppApra>
              </template>
            </WorksArticle>
          </IntersectionWrapper>
          <IntersectionWrapper>
            <WorksArticle id="yodo" :links="[]">
              <template #name>
                Yodobashic photo maker
              </template>
              <template #status>
                制作中断
              </template>
              <template #pic>
                <NuxtPicture
                  class="picture-box"
                  src="images/webp/works-img02-04w640.webp"
                  legacy-format="jpeg"
                  :img-attrs="imgAttr"
                />
              </template>
              <template #introduction>
                <CommonAppApra>
                  人生で初めて作ったGUIアプリ。画像のEXIF情報を文字入れした上で縮小して出力するという物で今でもたまに使っている。
                </CommonAppApra>
                <CommonAppApra>
                  中身はPython+TKinterという構成で、完成したときはかなり嬉しかった記憶がある、
                  出力画像にEXIFが乗らないという問題もあるが、SNSに投稿する場合はそのほうが安全なのでそのままにしている。
                </CommonAppApra>
                <CommonAppApra>このアプリを作ってからしばらくしてJavaScriptばかり触るようになってしまったため、もはや中のコードがわからなくなり放置している。</CommonAppApra>
                <CommonAppApra>気が向いたらFletというフレームワークで作り直すかもしれない。</CommonAppApra>
              </template>
            </WorksArticle>
          </IntersectionWrapper>
        </div>
      </ContentSection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PictureBoxProp, LinkParams } from '~~/types/components'
import { makeSeoMetaInput } from '~~/utils/useHead'

const title = ref<string>('制作物')
const topImg = ref<PictureBoxProp>({
  src: '/images/webp/works-img01w2000.webp',
  alt: '',
  title: 'TOP画像',
  fromCMS: true
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
}])

const imgAttr = ref(
  {
    decoding: 'async'
  }
)

const config = useRuntimeConfig()
const headTitle = title.value + '|' + config.public.siteName
const description = subtitles.value[0] || ''

useSeoMeta(makeSeoMetaInput(headTitle, description, 'all', 'website')
)

</script>
