<template>
  <article :id="props.id" class="flex flex-col items-start mx-0 my-8 md:my-2 md:mx-2 md:h-92 ">
    <AppHeading3 class="">
      <slot name="name" />
    </AppHeading3>

    <div class="flex flex-col items-center ">
      <div class="flex items-center justify-center w-full h-auto p-2 lg:w-96 lg:h-96 bg-green">
        <slot name="pic" />
      </div>
      <div class="w-full">
        <p class="w-full text-lg font-semibold">
          状況:
          <slot name="status" />
        </p>
        <div class="h-auto mb-4 lg:h-64">
          <slot name="introduction" />
        </div>
        <ul v-if="links.length!==0" class="">
          <li v-for="l , i in links" :key="i" class="my-2">
            <NuxtLink :to="l.path" class="w-full p-1 font-semibold text-md hover:underline focus:underline hover:bg-lightgreen focus:bg-lightgreen" target="_blank" rel="noopener noreferrer">
              {{ l.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types'

interface Props{
    id:string
    links:LinkParams[]
}

const props = withDefaults(defineProps<Props>(), { id: '', links: () => [] })
</script>
