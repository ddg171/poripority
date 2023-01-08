<template>
  <div :id="id">
    <div :trigger="trigger">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

const id = ref<string>(`intersection-${Math.floor(Math.random() * 100)}`)
const trigger = ref<boolean>(false)
const observer = ref<IntersectionObserver|null>(null)

const emits = defineEmits<{(e:'in'):void}>()

const props = withDefaults(defineProps<{threshold:number}>(), { threshold: 0.5 })

onMounted(() => {
  const target = document.querySelector(`#${id.value}`)
  if (!target) { return }
  const rect = target.getClientRects()
  if (rect.length > 0) {
    const top = rect[0].top
    if (top < 0) {
      trigger.value = true
    }
  }
  observer.value = new IntersectionObserver((
  ) => {
    emits('in')
    trigger.value = true
  }, { threshold: props.threshold })
  observer.value.observe(target)
})

onUnmounted(() => {
  observer.value?.disconnect()
})

</script>
