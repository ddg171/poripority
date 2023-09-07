<template>
  <AboutContentSection id="photography" class="z-20  bg-darkblue py-16" @in="isShown=true">
    <template #heading>
      <AppHeading2>
        Photography
      </AppHeading2>
    </template>
    <template #default>
      <div class="flex flex-col items-center lg:items-start justify-center w-full text-white lg:flex-row gap-4 lg:gap-8">
        <div class="relative pb-2  w-96 h-96 profile-pic bg-darkblue  overflow-hidden">
          <NuxtPicture
            :src="photo1"
            class="absolute z-40  top-0 left-12 w-80 h-80 bg-green/50 hover:top-0 hover:left-0 hover:z-50  hover:w-96 hover:h-96 transition-all drop-shadow-lg"
            legacy-format="jpeg"
            height="320"
            width="320"
            :img-attrs="{ class:'h-full w-full object-cover', alt:''}"
          />
          <NuxtPicture
            :src="photo2"
            class="absolute z-20 bottom-0  left-0 w-64 h-64 hover:z-50 hover:w-96 hover:h-96 transition-all drop-shadow-lg"
            legacy-format="jpeg"
            height="320"
            width="320"

            :img-attrs="{ class:'h-full w-full object-cover', alt:''}"
          />
          <NuxtPicture
            :src="photo3"
            class="absolute z-10 bottom-4  right-0 w-48 h-48 hover:bottom-0 hover:z-50  hover:w-96 hover:h-96 transition-all drop-shadow-lg"

            legacy-format="jpeg"
            height="320"
            width="320"

            :img-attrs="{ class:'h-full w-full object-cover', alt:''}"
          />
        </div>
        <div class="flex flex-row items-center w-full  justify-center lg:justify-start  md:w-1/2 md:grow-0">
          <div class=" h-full flex flex-col items-start gap-2">
            <CommonAppApra>
              カメラ販売店の店員時代にα6000を購入して以来、カメラでの撮影をそのまま趣味として続けている。
              あくまでも趣味のはずだったが職場で証明写真や集合写真の撮影を担当するようになったり、プロのカメラマンの手伝いをすることになったりするのだから世の中わからない。。
            </CommonAppApra>
            <CommonAppApra>
              使用機材はα6600がメイン。ソニーのカメラを使いはするがもっぱら静止画撮影が主で、動画撮影はあまりやっていない。
              動画については「やって」と言われればやるけど、という程度。
            </CommonAppApra>
            <CommonAppApra>
              主な被写体は風景やスナップ写真。特に鳩を撮ることが多い。鳩を撮るのはそこそこ動いて個性があり、何より肖像権がないから。
            </CommonAppApra>
            <CommonAppApra>
              最近は値下がりしていたDJI製のドローンを購入したため空撮もできるようになった。現在飛べる場所を探しつつ練習中。
            </CommonAppApra>
          </div>
        </div>
      </div>
    </template>
  </AboutContentSection>
</template>

<script setup lang="ts">
const isShown = ref<boolean>(false)

const photo1 = ref<string>('/images/webp/about/hato/hato_001.webp')
const photo2 = ref<string>('/images/webp/about/hato/hato_002.webp')
const photo3 = ref<string>('/images/webp/about/hato/hato_003.webp')

</script>
