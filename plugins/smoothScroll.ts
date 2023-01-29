import { defineNuxtPlugin } from '#app'
import VueSmoothScroll from 'vue3-smooth-scroll'

export default defineNuxtPlugin((nuxtApp) => {
  const config = {
    duration: 500, // アニメーションにかかる時間(ms)
    offset: 0, // スクロールするオフセット(マイナスも可)
    updateHistory: false, // ハッシュを履歴に残すかどうか(よくわからん)
    easingFunction: 'easeInOutCubic' // イージングのカスタマイズ`t => ...`

  }
  nuxtApp.vueApp.use(VueSmoothScroll, config)
})
