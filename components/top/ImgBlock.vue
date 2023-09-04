<template>
  <div
    class="absolute flex items-center justify-center w-full h-full overflow-hidden firstview "
  >
    <PictureBox
      v-if="props.img"
      :alt="props.img.alt"
      :title="props.img.title"
      :src="props.img.webp"
      :from-cms="props.img.fromCMS"
    />
  </div>
</template>

<script setup lang="ts">
import { PictureBoxProp } from '~~/types/components'

interface Props {
    img?:PictureBoxProp|undefined|null
}

const props = withDefaults(defineProps<Props>(), { img: undefined })
</script>
