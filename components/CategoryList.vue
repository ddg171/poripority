<template>
  <CommonLinkList :links="categories" class="text-lg min-h-240p">
    <template #first>
      <CommonLinkListElem>
        <CommonAppLink to="/blog">
          全て
        </CommonAppLink>
      </CommonLinkListElem>
    </template>
  </CommonLinkList>
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types/components'

const { state } = useCategoryStore()

const categories = computed<LinkParams[]>(() => {
  return state.value.map((c) => {
    return {
      name: c.name,
      path: `/blog?category=${c.id}`
    }
  })
})

</script>
