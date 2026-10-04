<template>
  <div class="flex items-center justify-center w-full bottom-nav">
    <div class="w-24 mx-1 md:w-28 h-11 sm:mx-4">
      <V2ArticleBottomNavigationButtonLink v-if="props.left" :link-param="props.left" />
    </div>
    <div class="w-auto md:w-28 h-11">
      <V2ArticleBottomNavigationButtonLink :link-param="props.center" @click="$emit('click-center')" />
    </div>
    <div class="w-24 mx-1 md:w-28 h-11 sm:mx-4">
      <V2ArticleBottomNavigationButtonLink v-if="props.right" :link-param="props.right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, } from 'vue'
import type { LinkParams } from '~~/types/components'

interface Props {
  left: LinkParams | null
  center: LinkParams
  right: LinkParams | null

}
defineEmits(['click-center'])

const props = defineProps<Props>()

</script>
