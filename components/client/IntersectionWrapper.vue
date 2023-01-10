<template>
  <div ref="wrapper" class="intersection-wrapper" :trigger="trigger" transition="vertical">
    <slot />
  </div>
</template>

<script setup lang="ts">
const trigger = ref<boolean>(false)
const observer = ref<IntersectionObserver|null>(null)

const wrapper = ref<null | Element>(null)

const emits = defineEmits<{(e:'in'):void}>()
interface Props {
    threshold?:number
}

const props = withDefaults(defineProps<Props>(), { threshold: 0.4 })

const intersectionHandler = (e:IntersectionObserverEntry[]) => {
  if (e.length === 0) { return }
  if (!e[0].isIntersecting) { return }
  emits('in')

  trigger.value = true
}

const disable = () => {
  observer.value?.disconnect()
  observer.value = null
}

onMounted(() => {
  nextTick(() => {
    if (!wrapper.value) { return }
    observer.value = new IntersectionObserver(intersectionHandler, { threshold: props.threshold })
    observer.value.observe(wrapper.value)

    const intViewportHeight = window.innerHeight
    const rect = wrapper.value.getClientRects()
    if (rect.length === 0) { return }
    const top = rect[0].top
    const intersectionRate = top / intViewportHeight
    if (intersectionRate > props.threshold) { return }
    trigger.value = true
  })
})

watch(() => trigger.value, (val:boolean) => {
  if (!val) { return }
  disable()
})

onUnmounted(() => {
  disable()
})

</script>

<style>
.intersection-wrapper[trigger=false]>*{
    opacity: 0;
}
.intersection-wrapper[trigger=true]>*{
    opacity: 1;
    transform: none;
    transition: all 0.5s;
}

.intersection-wrapper[transition="vertical"][trigger=false] >*{
  transform: translateY(20%);
}
</style>
