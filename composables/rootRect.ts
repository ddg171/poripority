import { useState } from '#app'
import { Ref } from 'nuxt/dist/app/compat/capi'

export const useRootRectStore = () => {
  const state = useState<DOMRect>(
    () => {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => {}
      }
    })
  return {
    state,
    set: set(state)
  }
}

const set = (state:Ref<DOMRect>) => (t:DOMRect) => { state.value = t }
