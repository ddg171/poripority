<template>
  <div>
    <AppHeading3>カテゴリ</AppHeading3>
    <CommonLinkList :links="categories" class="text-lg">
      <template #first>
        <CommonLinkListElem>
          <CommonAppLink to="/blog">
            全て
          </CommonAppLink>
        </CommonLinkListElem>
      </template>
    </CommonLinkList>
  </div>
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
