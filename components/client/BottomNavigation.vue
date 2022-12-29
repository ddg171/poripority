<template>
  <div class="w-full flex justify-center items-center">
    <nuxt-link v-if="props.left.path" :to="props.left.path" class="w-28 h-11 p-2 mx-1 sm:mx-4 text-white bg-green hover:bg-lightgreen focus:bg-lightgreen text-base md:text-lg flex justify-center items-center">
      {{ props.left.name }}
    </nuxt-link>
    <span v-else class="w-28 h-11 p-2 mx-1 sm:mx-4 text-white" />
    <nuxt-link v-if="props.center.path" :to="props.center.path" class="w-28 h-11 p-2 mx-1 sm:mx-4 text-white bg-green hover:bg-lightgreen focus:bg-lightgreen text-lg flex justify-center items-center">
      {{ props.center.name }}
    </nuxt-link>
    <span v-else class="w-28 h-11 p-2 mx-1 sm:mx-4 text-white bg-green " />
    <nuxt-link v-if="props.right.path" :to="props.right.path" class="w-28 h-11 p-2 mx-1 sm:mx-4 text-white bg-green hover:bg-lightgreen focus:bg-lightgreen  flex justify-center items-center">
      {{ props.right.name }}
    </nuxt-link>
    <span v-else class="w-28 h-11 p-2 mx-1 sm:mx-4 text-white text-center" />
  </div>
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types'

  interface Props {
    left: LinkParams
    center:LinkParams
    right:LinkParams

  }

const props = defineProps<Props>()

</script>
