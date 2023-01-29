<template>
  <div class="bottom-nav flex items-center justify-center w-full my-6">
    <div class=" w-24 md:w-28 h-11 sm:mx-4 mx-1">
      <nuxt-link v-if="props.left" :to="props.left.path" class="flex items-center justify-center p-1  text-sm md:text-base text-white w-full h-full  bg-green hover:bg-lightgreen focus:bg-lightgreen ">
        {{ props.left.name }}
      </nuxt-link>
    </div>
    <div class=" w-auto md:w-28 h-11">
      <nuxt-link :to="props.center.path" class="flex items-center justify-center p-2 mx-1 text-md md:text-lg text-white w-full h-full bg-green hover:bg-lightgreen focus:bg-lightgreen" @click="$emit('click-center')">
        {{ props.center.name }}
      </nuxt-link>
    </div>
    <div class=" w-24 md:w-28 h-11 sm:mx-4 mx-1">
      <nuxt-link v-if="props.right" :to="props.right.path" class="flex items-center justify-center p-1 mx-1 text-sm md:text-base text-white  w-full h-full  bg-green hover:bg-lightgreen focus:bg-lightgreen">
        {{ props.right.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types/components'

  interface Props {
    left: LinkParams|null
    center:LinkParams
    right:LinkParams|null

  }
defineEmits(['click-center'])

const props = defineProps<Props>()

</script>
