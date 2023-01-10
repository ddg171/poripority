<template>
  <article :id="props.id" class="mx-0 my-8 md:my-2 md:mx-2 md:h-92 flex flex-col items-start ">
    <ClientHeader2 class="">
      <slot name="name" />
    </ClientHeader2>

    <div class="flex flex-col items-center ">
      <div class="w-full lg:w-96 h-auto lg:h-96 bg-green flex justify-center items-center mb-2 p-2">
        <slot name="pic" />
      </div>
      <div class="w-full ml-4">
        <p class="w-full text-lg ">
          状況:
          <slot name="status" />
        </p>
        <div class="h-auto lg:h-64">
          <slot name="introduction" />
        </div>
        <ul v-if="links.length!==0" class="">
          <li v-for="l , i in links" :key="i" class="my-2">
            <NuxtLink :to="l.path" class="text-sm hover:underline focus:underline w-full hover:bg-lightgreen focus:bg-lightgreen p-1" target="_blank" rel="noopener noreferrer">
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
