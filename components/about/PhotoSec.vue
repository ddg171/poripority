<template>
  <AboutContentSection id="photography" class="sticky top-0 z-20 min-h-screen pt-10 bg-darkblue md:pt-16" @in="isShown=true">
    <template #heading>
      <AppHeading2>
        Photography
      </AppHeading2>
    </template>
    <template #default>
      <div class="flex flex-col items-start justify-center w-full text-white md:flex-row ">
        <div class="flex items-center justify-center w-full pb-2 md:h-1/2h profile-pic bg-darkblue md:w-1/2">
          ほげ
        </div>
        <div class="flex flex-col items-center flex-grow w-full md:h-1/2h md:justify-center profile-data md:w-1/2 md:shrink-0">
          <div class="flex flex-col items-start gap-2">
            <CommonAppApra>
              カメラ販売店の店員時代にα6000を購入して以来、カメラでの撮影をそのまま趣味として続けている。
            </CommonAppApra>
            <CommonAppApra>
              主な被写体は風景やスナップ写真。特に鳩を撮ることが多い。
            </CommonAppApra>
            <CommonAppApra>
              最近は値下がりしていたDJI製のドローンを購入したため空撮もできるようになった。
            </CommonAppApra>
          </div>
        </div>
      </div>
    </template>
  </AboutContentSection>
</template>

<script setup lang="ts">
const isShown = ref<boolean>(false)

</script>
