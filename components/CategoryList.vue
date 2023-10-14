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
import { Category } from '~/types/articles'
import { LinkParams } from '~~/types/components'

const props = withDefaults(defineProps<{categories?: Category[]}>(), {
  categories: () => []
})

const categories = computed<LinkParams[]>(() => {
  return props.categories.map((c) => {
    return {
      name: c.name,
      path: `/blog?category=${c.id}`
    }
  })
})

</script>
