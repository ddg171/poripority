<template>
  <ClientOnly>
    <Transition name="optin">
      <div v-if="isShow" class="optin py-6 px-4 md:px-12 md:max-w-2xl fixed w-full border-solid border-white bottom-0 ml-0 shadow-xl shadow-gray  opacity-100 bg-gray grid gap-2 transition-opacity  delay-600 z-100">
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
          <CommonAppBtn @click="setOptIn(false)">
            DENIED/拒否
          </CommonAppBtn>
          <CommonAppBtn variant="denied" @click="setOptIn(true)">
            ACCEPT/許可
          </CommonAppBtn>
        </div>
      </div>
    </Transition>
  </ClientOnly>
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

const isShow = ref<boolean>(false)

const start = () => {
  if (gtag.isEnabled === undefined) {
    return
  }
  gtag.isEnabled.value = true
}

const setOptIn = (v:boolean) => {
  isShow.value = false
  optIn.value = v ? 'ACCEPT' : 'DENIED'
  if (v) {
    start()
    return
  }
  removeGaCookie()
}

onMounted(() => {
  nextTick(() => {
    if (!optIn.value) {
      isShow.value = true
      return
    }
    if (optIn.value !== 'ACCEPT') {
      removeGaCookie()
      return
    }
    start()
  })
})

</script>

<style scoped>
.optin-enter-active{
  opacity: 1;
  transition: opacity 0.25s linear;
  transition-delay: 0.5s;
}

.optin-enter-from,
.optin-leave-to {
  opacity: 0;
}
</style>
