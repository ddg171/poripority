
import { useState } from '#app'
import { Ref } from 'nuxt/dist/app/compat/capi'
import { Category } from '~~/types'

export const useCategoryStore = () => {
  const state = useState<Category[]>(
    () => { return [] })
  return {
    state,
    set: set(state),
    asObject: asObject(state),
    get: get(state)

  }
}

const set = (state:Ref<Category[]>) => (c:Category[]) => { state.value = c }

const asObject = (state:Ref<Category[]>) => ():{[t:string]:Category} => {
  if (state.value.length === 0) { return {} }
  const obj:{[T:string]:Category} = {}
  state.value.forEach((c:Category) => {
    obj[c.id] = c
  })
  return obj
}

const get = (state:Ref<Category[]>) => (id:string):Category|null => {
  const obj = asObject(state)()
  return obj[id] || null
}
