import { Ref } from 'nuxt/dist/app/compat/capi'
import { useState } from '#app'

interface State{
  isLoading:boolean
}

export const useLoadingStore = () => {
  const state = useState<State>(() => { return { isLoading: true } })
  return {
    state,
    set: set(state)
  }
}

const set = (state:Ref<State>) => (t:boolean) => { state.value.isLoading = t }
