import { useFetch } from '#app'
import { useCategoryStore } from '~~/composables/category'

export default defineNuxtPlugin(async () => {
  const { data } = await useFetch('/api/category')
  const categoryStore = useCategoryStore()
  categoryStore.set(data.value?.contents || [])
})
