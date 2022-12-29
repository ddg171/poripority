
import { useState } from '#app'
import { Ref } from 'nuxt/dist/app/compat/capi'
import { PageTitleProp } from '~~/types'

export const usePageTitleStore = () => {
  const state = useState<PageTitleProp>(
    () => { return { title: '記事一覧', topImg: null, subtitles: [] } })
  return {
    state,
    set: set(state)
  }
}

const set = (state:Ref<PageTitleProp>) => (t:PageTitleProp) => { state.value = t }
