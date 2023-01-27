<template>
  <div class="min-h-240p">
    <AppHeading3>カテゴリ</AppHeading3>
    <ClientOnly>
      <CommonLinkList :links="categories" class="text-lg">
        <template #first>
          <CommonLinkListElem>
            <CommonAppLink to="/blog">
              全て
            </CommonAppLink>
          </CommonLinkListElem>
        </template>
      </CommonLinkList>
    </ClientOnly>
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
