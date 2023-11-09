<template>
  <div class="flex flex-col items-center justify-center w-full text-white page-works">
    <div id="top-box" class="w-full mb-4 h-1/3h lg:h-3/4h max-h-960p min-h-240p">
      <PageTop :title="title" :top-img="topImg" :subtitles="subtitles" />
    </div>
    <div class="flex flex-col items-center w-full max-w-screen-xl ">
      <ContentSection>
        <AppHeading1 class="mb-2">
          免責事項
        </AppHeading1>
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
        <AppHeading1 class="mb-2">
          広告掲載ポリシー
        </AppHeading1>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { PictureBoxProp } from '~~/types/components'
import { makeSeoMetaInput } from '~~/utils/useHead'

const title = ref<string>('特記事項')
const topImg = ref<PictureBoxProp>({
  src: '/images/webp/blanktitle01w2000.webp',
  alt: '',
  title: '',
  fromCMS: true
})

const subtitles = ref<string[]>([
  '免責事項及び広告掲載ポリシー'
])

const config = useRuntimeConfig()
const headTitle = title.value + '|' + config.public.siteName
const description = subtitles.value[0] || ''

useSeoMeta(makeSeoMetaInput(headTitle, description, 'all', 'website')
)

</script>
