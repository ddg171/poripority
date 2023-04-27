<template>
  <article :id="props.id" class="flex flex-col items-start md:h-92 ">
    <AppHeading3 class="mb-2">
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
          <WorksParaBox>
            <slot name="introduction" />
          </WorksParaBox>
        </div>
        <CommonLinkList v-if="links.length!==0" :links="links" class="font-semibold text-md" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types/components'

interface Props{
    id:string
    links:LinkParams[]
}

const props = withDefaults(defineProps<Props>(), { id: '', links: () => [] })
</script>
