<template>
  <div v-if="isShow" class="optin py-6 px-4 md:px-12 md:max-w-2xl absolute w-full border-solid border-white bottom-0 ml-0 shadow-xl shadow-gray  opacity-100 bg-gray grid gap-2 transition-opacity  delay-600 z-40" :is-visible="isVisible">
    <div class="w-full">
      <AppHeading2>Cookie/解析ツール等の使用について</AppHeading2>
      <div class="text-white ">
        <CommonAppApra>
          本Webサイトではアクセス解析のためGoogle Analytics(以下"GA")を導入しています。GAによる情報送信を回避する場合は、下記の拒否ボタンを押してください。
        </CommonAppApra>
        <CommonAppApra>
          本Webサイトではクッキーを使用しておりますが、オプトイン設定の識別のみに利用し、個人情報の保持・収集には使用しておりません。
        </CommonAppApra>
      </div>
    </div>
    <div class="w-full flex justify-around">
      <CommonAppBtn @app-click="setOptIn(false)">
        DENIED/拒否
      </CommonAppBtn>
      <CommonAppBtn variant="denied" @app-click="setOptIn(true)">
        ACCEPT/許可
      </CommonAppBtn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useState } from 'vue-gtag-next'

const config = useRuntimeConfig()
const gaMeasurementID = config.public.gaMeasurementId

const gtag = useState()
const optIn = useCookie<'ACCEPT'|'DENIED'|undefined>('optin')
const ga = useCookie<string|undefined>('_ga')
const gaWithID = useCookie<string|undefined>(gaMeasurementID.replace('G-', '_ga_'))

const removeGaCookie = () => {
  ga.value = undefined
  gaWithID.value = undefined
}

const isVisible = ref<boolean>(false)

const isShow = computed<boolean>(() => {
  return !optIn.value
})

const start = () => {
  if (gtag.isEnabled === undefined) {
    return
  }
  gtag.isEnabled.value = true
}

const setOptIn = (v:boolean) => {
  optIn.value = v ? 'ACCEPT' : 'DENIED'
  if (v) {
    start()
    return
  }
  removeGaCookie()
}

onMounted(() => {
  isVisible.value = true
  if (optIn.value !== 'ACCEPT') {
    removeGaCookie()
    return
  }
  start()
})

</script>

<style scoped>
.optin[is-visible=false]{
  opacity: 0;
}
</style>
