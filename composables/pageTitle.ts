
import { useState } from '#app'
import { Ref } from 'nuxt/dist/app/compat/capi'
import { PageTitleProp } from '~~/types/components'

export const usePageTitleStore = () => {
  const state = useState<PageTitleProp>(
    () => { return { title: '', topImg: null, subtitles: [] } })
  return {
    state,
    set: set(state),
    init: init(state)
  }
}

const set = (state:Ref<PageTitleProp>) => (t:PageTitleProp) => { state.value = t }
const init = (state:Ref<PageTitleProp>) => () => { state.value = { title: '', topImg: null, subtitles: [] } }
