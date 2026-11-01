<template>
  <V2CommonPageContainer>
    <template #hero>
      <PageTop :title="title" :top-img="topImg" :subtitles="subtitles" />

    </template>
    <V2CommonContentSectionFrame>
      <div class="flex flex-col items-center w-full max-w-screen-lg md:px-20">
        <V2CommonContentSection header-text="免責事項" is-important>
          <template #content>
            <V2CommonContentBox class="md:px-4 text-white textt-lg leading-relaxed">
              <CommonAppApra>
                当Webサイト内に掲載されている内容については極力正確な内容になるように努めておりますが、その内容の正確性や安全性を保証するものではありません。当サイト内の情報の引用、ご利用により生じたいかなる損害についても、当サイトは一切の責任を負いかねます。
              </CommonAppApra>
              <CommonAppApra>
                当Webサイトは、予告なしに内容を変更または削除する場合があります。また、当Webサイトの構築・運用のために使用しているプログラム、ツール、ライブラリ、Webサービス等の障害及び脆弱性により生じたいかなる損害についても、当サイトは一切の責任を負いかねます。
              </CommonAppApra>
              <CommonAppApra>
                当Webサイトからリンクされている第三者のWebサイトの内容について、当サイトは一切の責任を負いかねます。
              </CommonAppApra>
            </V2CommonContentBox>
          </template>
        </V2CommonContentSection>
        <V2CommonContentSection header-text="広告掲載ポリシー" is-important>
          <template #content>
            <V2CommonContentBox class="md:px-4 text-white textt-lg leading-relaxed">
              <CommonAppApra>
                当Webサイトはアフィリエイト広告及びバナー広告を掲載しています。広告の掲載により、当ブログが収益を得ることがあります。またブログ記事内の商品名及びサービス名には、アフィリエイトリンクが含まれている場合があります。
              </CommonAppApra>
              <CommonAppApra>
                当Webサイト内に掲載されるバナー広告の内容について、当サイトは一切の責任を負いかねます。
              </CommonAppApra>
              <CommonAppApra>
                当ブログ内で金銭・機材等の授受・貸与を伴う商品の宣伝を行う場合については、該当記事内で明記します。
              </CommonAppApra>
            </V2CommonContentBox>
          </template>

        </V2CommonContentSection>
      </div>
    </V2CommonContentSectionFrame>
  </V2CommonPageContainer>
</template>

<script setup lang="ts">
import type { PictureBoxProp } from '~~/types/components'
import { makeSeoMetaInput } from '~~/utils/useHead'

const title = ref<string>('特記事項')
const topImg = ref<PictureBoxProp>({
  src: '/images/webp/blanktitle01w2000.webp',
  alt: '',
  title: '',
  fromCMS: true
})

const subtitles = ref<string[]>([
  '免責事項及び広告掲載ポリシー',
  '2023/11/12更新'
])

const config = useRuntimeConfig()
const headTitle = title.value + '-' + config.public.siteName
const description = subtitles.value[0] || ''

useSeoMeta(makeSeoMetaInput(headTitle, description, 'all', 'website')
)

</script>
