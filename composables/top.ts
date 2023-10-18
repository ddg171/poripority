import { useState } from '#app'
import { PageTitleProp } from '~/types/components'

export const usePageTopStore = () => {
  const state = useState<PageTitleProp>(
    () => {
      return {
        title: '',
        subtitles: [],
        topImg: {
          src: '/images/webp/blanktitle01w2000.webp',
          alt: '',
          title: ''
        }
      }
    })
  const selected = ref<string|null>(null)
  return {
    state,
    selected,
    set: set(state),
    clear: clear(state)

  }
}

const set = (state:Ref<PageTitleProp>) => {
  return (title:PageTitleProp) => {
    state.value = title
  }
}

const clear = (state:Ref<PageTitleProp>) => {
  return () => {
    state.value = {
      title: '',
      subtitles: [],
      topImg: {
        src: '/images/webp/blanktitle01w2000.webp',
        alt: '',
        title: ''
      }
    }
  }
}
