<template>
  <ul>
    <CommonLinkListElem v-for="h,i in props.headings" :key="i" :data-level="h.level" class="heading-li">
      <a v-smooth-scroll :href="`#${h.id}`" class="hover:underline">
        {{ h.title }}
      </a>
    </CommonLinkListElem>
  </ul>
</template>

<script setup lang="ts">
import { Heading } from '~~/types/articles'

interface Props{
    headings:Heading[]
}

const props = withDefaults(defineProps<Props>(), { headings: () => [] })
</script>

<style scoped>
.heading-li[data-level="3"]{
    text-indent: 1rem;
}

.heading-li[data-level="4"]{
    text-indent: 1.5rem;
}

.heading-li[data-level="5"]{
    text-indent: 2rem;
}
</style>
