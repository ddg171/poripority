import { useState } from '#app'
import { Ref } from 'nuxt/dist/app/compat/capi'

type RoofRect = Omit<DOMRect, 'toJSON'>

export const useRootRectStore = () => {
  const state = useState<RoofRect>(
    () => {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 0,
        width: 0,
        x: 0,
        y: 0
      }
    })
  return {
    state,
    set: set(state)
  }
}

const set = (state:Ref<RoofRect>) => (t:DOMRect|RoofRect) => {
  const { top, bottom, left, right, height, width, x, y } = t
  state.value = { top, bottom, left, right, height, width, x, y }
}
