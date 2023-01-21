<template>
  <div class="text-sm">
    <p>
      {{ publishedDate }}
    </p>
    <p>
      Category:
      <CommonAppLink v-if="props?.category" :to="`/blog?category=${props.category.id}`" class="inline">
        {{ props.category.name }}
      </CommonAppLink>
      <span v-else>n/a</span>
    </p>
    <blockquote>
      <p />
    </blockquote>
  </div>
</template>

<script setup lang="ts">
import { parseISO } from 'date-fns'
import { Category } from '~~/types/articles'

interface Props{
    publishedDate?:string
    category?:Category
}

const props = defineProps<Props>()

const publishedDate = computed<string>(() => articleDate(parseISO(props.publishedDate || '')))

</script>
