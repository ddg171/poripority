<template>
  <span class="inline">{{ shuffledText }}</span>
</template>

<script setup lang="ts">
import { sleep } from '@/utils/helper'
interface Props {
    text?: string
    trriger?:boolean
    delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  trriger: false,
  delay: 0
})

const shuffledText = ref<string>('')

watch(() => props.trriger, (newVal:boolean) => {
  if (!newVal) {
    shuffledText.value = props.text
    return
  }
  shuffle()
})

const shuffle = async () => {
  await sleep(props.delay)
  const charNum = props.text.length
  const duration = 500
  const startAt = new Date().getTime()
  shuffledText.value = ''
  const timerId = setInterval(() => {
    const now = new Date().getTime()
    const diff = now - startAt
    if (diff >= duration) {
      shuffledText.value = props.text
      clearInterval(timerId)
      return
    }
    const howManyChange = charNum - Math.floor((duration - diff) / (duration / charNum)) - 1
    shuffledText.value = replaceRandomCharactor(props.text, howManyChange)
  }, 10)
}

</script>
