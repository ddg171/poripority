<template>
  <article :id="props.id" class="mx-0 my-8 md:my-2 md:mx-2 md:h-92 flex flex-col items-center md:items-start">
    <ClientHeader2 class="w-full">
      <slot name="name" />
    </ClientHeader2>
    <p class="w-full">
      状況:
      <slot name="status" />
    </p>
    <div class="max-w-4xl flex flex-col items-center ">
      <div class="w-full flex flex-col md:w-auto md:flex-row">
        <div class="w-full h-64 md:w1/3 md:h-auto  bg-green flex justify-center items-center mb-4">
          <slot name="pic" />
        </div>
        <div class="w-full md:w-auto ml-4">
          <div>
            <slot name="introduction" />
          </div>
          <ul v-if="links.length!==0" class="mt-8">
            <li v-for="l , i in links" :key="i">
              <NuxtLink :to="l.path" class="text-lg hove:underline focus:underline">
                {{ l.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
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
