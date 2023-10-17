import { useState } from '#app'
import { Category } from '~~/types/articles'

export const useCategoryStore = () => {
  const state = useState<Category[]>(
    () => { return [] })
  const selected = ref<string|null>(null)
  return {
    state,
    selected,
    set: set(state),
    asObject: asObject(state),
    get: get(state),
    select: select(selected)
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

const select = (selected:Ref<string|null>) => (id:string|null) => { selected.value = id }
