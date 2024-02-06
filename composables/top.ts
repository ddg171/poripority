import { useState } from '#app'
import { PageTitleProp } from '~/types/components'

const blankSrc = '/images/webp/blanktitle01w2000.webp'
const blankTopImg = {
  src: blankSrc,
  alt: '',
  title: ''
}

export const usePageTopStore = () => {
  const state = useState<PageTitleProp>(
    () => {
      return {
        title: '',
        subtitles: [],
        topImg: blankTopImg
      }
    })
  const selected = ref<string|null>(null)
  return {
    state,
    selected,
    set: set(state),
    reset: reset(state),
    clear: clear(state)

  }
}

const set = (state:Ref<PageTitleProp>) => {
  return (title:PageTitleProp) => {
    state.value = title
    if (!state.value.topImg?.src) {
      state.value.topImg = blankTopImg
    }
  }
}

const reset = (state:Ref<PageTitleProp>) => {
  return () => {
    state.value = {
      title: '',
      subtitles: [],
      topImg: blankTopImg
    }
  }
}

const clear = (state:Ref<PageTitleProp>) => {
  return () => {
    state.value = {
      title: '',
      subtitles: [],
      topImg: null
    }
  }
}
