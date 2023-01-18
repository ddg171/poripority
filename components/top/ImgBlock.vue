<template>
  <div
    class="absolute flex items-center justify-center w-full h-full overflow-hidden firstview "
  >
    <PictureBox
      v-if="props.img"
      :source="props.img.source"
      :alt="props.img.alt"
      :title="props.img.title"
      :webp="props.img.webp"
      :jpg="props.img.jpg"
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
