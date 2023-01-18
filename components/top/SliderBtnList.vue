<template>
  <div class="absolute inset-x-0 bottom-0 z-10 flex justify-center w-full my-2 md:my-5">
    <button
      v-for="c in props.contentNum"
      :key="c"
      class="w-6 h-6 mx-2 duration-75 ease-in border-solid shadow-2xl slider-page-btn bg-lightgray"
      :isCurrent="c===sliderPage+1"
      aria-label="スライダーのページ移動"
      title="スライダーのページ移動"
      tabindex="0"
      @click="$emit('jump',c-1)"
    />
    <button
      class="relative w-6 h-6 mx-4 shadow-2xl slider-toggle-btn bg-lightgray"
      aria-label="スライダーの停止・再生切替"
      title="スライダーの停止・再生切替"
      :isStopped="timerId === 0"
      tabindex="0"
      @click="toggle"
    >
      <span class="absolute border-solid border-gray" />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props{
    contentNum:number
    modelValue:number
}

const props = withDefaults(defineProps<Props>, { contentNum: 0, modelValue: -1 })

const emits = defineEmits<{(e:'jump'):number, (e:'stop'):void, (e:'start'):void, (e:'update:modelValue'):number}>()

const sliderPage = computed<number>({ get: () => { return props.modelValue }, set: (val:number) => { emits('update:modelValue', val) } })

</script>
