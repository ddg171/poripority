<template>
  <div class="flex items-center justify-center w-full my-6">
    <nuxt-link v-if="props.left" :to="props.left.path" class="flex items-center justify-center p-2 mx-1 text-base text-white w-28 h-11 sm:mx-4 bg-green hover:bg-lightgreen focus:bg-lightgreen ">
      {{ props.left.name }}
    </nuxt-link>
    <span v-else class="p-2 mx-1 text-white w-28 h-11 sm:mx-4" />
    <nuxt-link :to="props.center.path" class="flex items-center justify-center p-2 mx-1 text-lg text-white w-28 h-11 sm:mx-4 bg-green hover:bg-lightgreen focus:bg-lightgreen" @click="$emit('click-center')">
      {{ props.center.name }}
    </nuxt-link>
    <nuxt-link v-if="props.right" :to="props.right.path" class="flex items-center justify-center p-2 mx-1 text-white w-28 h-11 sm:mx-4 bg-green hover:bg-lightgreen focus:bg-lightgreen">
      {{ props.right.name }}
    </nuxt-link>
    <span v-else class="p-2 mx-1 text-center text-white w-28 h-11 sm:mx-4" />
  </div>
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types'

  interface Props {
    left: LinkParams|null
    center:LinkParams
    right:LinkParams|null

  }
defineEmits(['click-center'])

const props = defineProps<Props>()

</script>
