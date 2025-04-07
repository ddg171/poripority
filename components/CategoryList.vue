<template>
  <ul class="text-lg min-h-240p">
    <ClientOnly>
      <CommonLinkListElem class="category-li" :selected="selected===''">
        <CommonAppLink to="/blog">
          全て
        </CommonAppLink>
      </CommonLinkListElem>
      <CommonLinkListElem v-for="c in categories" :key="c.id" class="category-li" :selected="props.selected===c.id">
        <CommonAppLink :to="c.path">
          {{ c.name }}
        </CommonAppLink>
      </CommonLinkListElem>
    </ClientOnly>
  </ul>
</template>

<script setup lang="ts">
import { Category } from '~/types/articles'
import { LinkParams } from '~~/types/components'
interface Props{
  categories?: Category[], selected?:string|null
}

const props = withDefaults(defineProps<Props>(), {
  categories: () => [],
  selected: ''
})

const categories = computed<LinkParams[]>(() => {
  return props.categories.map((c) => {
    return {
      id: c.id,
      name: c.name,
      path: `/blog?category=${c.id}`
    }
  })
})

</script>

<style scoped lang="scss">
.category-li[selected="true"]{
  font-weight: 800 !important;
  @apply bg-green/50
}
</style>
