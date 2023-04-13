<template>
  <ul class="absolute inset-x-0 bottom-0 z-10 flex justify-center w-full my-2 md:my-5">
    <li
      v-for="c in props.contentNum"
      :key="c"
      class="flex items-center justify-start mx-2"
    >
      <button
        class="w-6 h-6 duration-75 ease-in shadow-2xl slider-page-btn bg-lightgray"
        :isCurrent="c===sliderPage+1"
        aria-label="スライダーのページ移動"
        title="スライダーのページ移動"
        tabindex="0"
        @click="$emit('jump',c-1)"
      />
    </li>
    <li
      class="flex items-center justify-start mx-4"
    >
      <button
        class="relative flex items-center justify-center w-6 h-6 shadow-2xl slider-toggle-btn bg-lightgray text-gray"
        aria-label="スライダーの停止・再生切替"
        title="スライダーの停止・再生切替"
        :isStopped="props.isStopped"
        tabindex="0"
        @click="$emit('toggle',props.isStopped)"
      >
        <Icon v-if="props.isStopped" name="material-symbols:play-arrow" class="w-full h-full" />
        <Icon v-else name="material-symbols:stop" class="w-full h-full" />
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Props{
    contentNum:number
    isStopped:boolean
    modelValue:number
}

const props = withDefaults(defineProps<Props>(), { contentNum: 0, modelValue: -1, isStopped: false })

const emits = defineEmits<{(e:'jump', v:number):void, (e:'toggle', s:boolean):void, (e:'update:modelValue', v:number):void}>()

const sliderPage = computed<number>({ get: () => { return props.modelValue }, set: (val:number) => { emits('update:modelValue', val) } })

</script>
<style scoped>
.slider-page-btn[isCurrent="true"]{
    background-color: #019585;
}

</style>
